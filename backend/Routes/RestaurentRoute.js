import express from "express";
import Model from "../Model/RestaurentModel.js";

const router=express.Router()

 

router.get('/',async(req,res)=>{
    try{
        const food=await Model.find({});

        return res.status(200).json({
            count: food.length,
            data:food
        })
    }catch(error){
        console.log(error.message);
        res.status(500).send({
            message:error.message
        })
    }
})

router.post('/', async(req,res)=>{
    try{
        
        if(
            // !req.body.id ||
            // !req.body.date ||
            !req.body.pname ||
            !req.body.cname ||
            !req.body.quantity ||
            !req.body.price ||
            !req.body.location ||
            !req.body.status 
        )
        {
            return res.status(400).send({
                message: 'send all required fields: id,  pname, cname, quantity, price, location, status',
            })
        }
        const newModel={
            // id: req.body.id,
            date: req.body.date,
            pname: req.body.pname,
            cname: req.body.cname,
            quantity: req.body.quantity,
            price: req.body.price,
            location: req.body.location,
            status: req.body.status
        };

        const food=await Model.create(newModel)
        return res.status(201).send(food)
    } catch(error){
        console.log(error.message);
        res.status(500).send({
            message:error.message
        })
    }
})


router.put('/:id', async(req,res)=>{
    try{
        if(
            !req.body.pname ||
            !req.body.cname ||
            !req.body.quantity ||
            !req.body.price ||
            !req.body.location ||
            !req.body.status 
        ){
            return res.status(400).send({
                message: 'send all required fields: id,  pname, cname, quantity, price, location, status',
            })
        }
     
        const {id}=req.params;
        const result= await Model.findByIdAndUpdate(id,req.body)

        if(!result){
            return res.status(404).json({
                message:'Model not found'
            })
        }
        return res.status(200).send({ message:'Book updated successfully'})

    } catch(error){
        console.log(error.message);
        res.status(500).send({
            message:error.message
        })
    }
})


router.delete('/:id', async(req,res)=>{
    try{
        const {id}=req.params;
        const result= await Model.findByIdAndDelete(id)

        if(!result){
            return res.status(404).json({
                message:'Model not found'
            })
        }
        return res.status(200).send({ message:'Model deleted successfully'})

    } catch(error){
        console.log(error.message);
        res.status(500).send({
            message:error.message
        })
    }
})


export default router;