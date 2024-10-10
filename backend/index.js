import express from 'express'
import mongoose from 'mongoose'
 import router from './Routes/RestaurentRoute.js'
 import cors from 'cors'

const port=3000

const app=express()

const mongodbUrl='mongodb://localhost:27017/Foodko'
app.use(express.json())
app.use(cors())
app.use('/food',router)

mongoose.connect(mongodbUrl)
.then(()=>{
    console.log("Database connected successfully")
}).catch((error)=>{
    console.log(error)
})

app.listen(port,()=>{
    console.log(`Server successfully connected at localhost ${port}`)
})

// import express from 'express';
// import mongoose from 'mongoose';
// import router from './Routes/RestaurentRoute.js';

// const port = 3000;
// const app = express();
// const mongodbUrl = 'mongodb://localhost:27017/Foodko';

// // Middleware to parse JSON
// app.use(express.json());

// // Routes
// app.use('/food', router);

// // Connect to MongoDB
// mongoose.connect(mongodbUrl, {
//   useNewUrlParser: true, 
//   useUnifiedTopology: true
// })
//   .then(() => {
//     console.log('Database connected successfully');
//   })
//   .catch((error) => {
//     console.log('Database connection failed:', error.message);
//   });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server successfully connected at localhost:${port}`);
// });
