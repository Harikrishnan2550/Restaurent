




import React, { useEffect, useState } from 'react';
import { TbPlaylistAdd } from "react-icons/tb";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { RiArrowUpDownLine } from "react-icons/ri";
import axios from 'axios';
import { FaRegEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import Modal from './modal';
import { useParams } from 'react-router-dom';

function OrderList() {
  const [food, setFood] = useState([]);
  const [filteredFood, setFilteredFood] = useState([]); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentOrder, setCurrentOrder] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const [filterId, setFilterId] = useState("");  
  const [filterDate, setFilterDate] = useState("");  
  const [filterLocation, setFilterLocation] = useState("");  

  const { id } = useParams();

   useEffect(() => {
    axios.get('http://localhost:3000/food')
      .then((res) => {
        setFood(res.data.data);
        setFilteredFood(res.data.data);  
      }).catch((error) => {
        console.log(error);
      });
  }, []);

   const handleFilter = () => {
    let updatedList = food;

    if (filterId) {
      updatedList = updatedList.filter((item, index) => String(index + 1).includes(filterId));
    }

    if (filterDate) {
      updatedList = updatedList.filter((item) =>
        new Date(item.date).toISOString().slice(0, 10) === filterDate
      );
    }

    if (filterLocation) {
      updatedList = updatedList.filter((item) => item.location.toLowerCase().includes(filterLocation.toLowerCase()));
    }

    setFilteredFood(updatedList); 
  };

  const handleAddOrder = () => {
    setIsEditing(false);
    setIsModalOpen(true);
    setCurrentOrder(null);
  };

  const handleEdit = (order) => {
    setIsEditing(true);
    setCurrentOrder(order);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentOrder(null);
  };

  const handleSubmitOrder = (updatedOrder) => {
    if (isEditing) {
      axios.put(`http://localhost:3000/food/${updatedOrder._id}`, updatedOrder)
        .then((response) => {
          const updatedFoodList = food.map((item) =>
            item._id === updatedOrder._id ? response.data : item
          );
          setFood(updatedFoodList);
          setFilteredFood(updatedFoodList); 
          closeModal();
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios.post('http://localhost:3000/food', updatedOrder)
        .then((response) => {
          const newList = [...food, response.data];
          setFood(newList);
          setFilteredFood(newList);  
          closeModal();
        })
        .catch((error) => {
          console.error("Error creating a new order:", error);
        });
    }
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/food/${id}`)
      .then(() => {
        const updatedList = food.filter(item => item._id !== id);
        setFood(updatedList);
        setFilteredFood(updatedList); 
      }).catch((error) => {
        console.log(error);
      });
  };

   const handleClearFilters = () => {
    setFilterId("");
    setFilterDate("");
    setFilterLocation("");
    setFilteredFood(food); 
  };

   useEffect(() => {
    console.log("Food Data:", food);  
    console.log("Filtered Food Data:", filteredFood); 
  }, [food, filteredFood]);

  return (
    <div className='p-12 bg-white mt-10 rounded-lg shadow-md'>
      <div className='flex justify-between'>
        <h1 className='text-[20px] font-bold'>Order List</h1>
        <button onClick={handleAddOrder} className='flex py-2 px-5 bg-gray-200 rounded-lg text-green-500 font-bold mt-2'>
          <TbPlaylistAdd className='text-green-500 mr-2 text-[25px]' />Add order
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Modal
              closeModal={closeModal}
              onSubmit={handleSubmitOrder}
              orderData={currentOrder}
              isEditing={isEditing}
            />
          </div>
        </div>
      )}

      <div className='mt-6 flex justify-between'>
        <div className='space-x-5'>
          <input
            type="date"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
            className='border border-gray-300 rounded-lg py-1 px-3 opacity-75 shadow-md'
          />
          <input
            type="text"
            placeholder="Select an order ID"
            value={filterId}
            onChange={(e) => setFilterId(e.target.value)}
            className='border border-gray-300 rounded-lg py-1 px-3 opacity-75 shadow-md'
          />
          <input
            type="text"
            placeholder="Select a location"
            value={filterLocation}
            onChange={(e) => setFilterLocation(e.target.value)}
            className='border border-gray-300 rounded-lg py-1 px-3 opacity-75 shadow-md'
          />
        </div>
        <button onClick={handleClearFilters} className='flex font-semibold border border-gray-300 rounded-lg py-1 px-2 shadow-md text-gray-600'>
          Clear All <IoIosCloseCircleOutline className='ml-2 text-[23px] mt-0' />
        </button>
        <button onClick={handleFilter} className='ml-4 flex font-semibold border border-gray-300 rounded-lg py-1 px-2 shadow-md text-gray-600'>
          Apply Filters
        </button>
      </div>

      <div className='mt-10'>
        {filteredFood.length > 0 ? (
          <table className='min-w-full table-auto'>
            <thead className='bg-gray-200'>
              <tr>
                <th className='py-2 px-4'>Date</th>
                <th className='py-2 px-4'>Id <RiArrowUpDownLine className='inline-block ml-1' /></th>
                <th className='py-2 px-4'>Product Name <RiArrowUpDownLine className='inline-block ml-1' /></th>
                <th className='py-2 px-4'>Customer Name <RiArrowUpDownLine className='inline-block ml-1' /></th>
                <th className='py-2 px-4'>Price <RiArrowUpDownLine className='inline-block ml-1' /></th>
                <th className='py-2 px-4'>Quantity <RiArrowUpDownLine className='inline-block ml-1' /></th>
                <th className='py-2 px-4'>Location <RiArrowUpDownLine className='inline-block ml-1' /></th>
                <th className='py-2 px-4'>Status <RiArrowUpDownLine className='inline-block ml-1' /></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredFood.map((item, index) => (
                <tr key={item._id} className='text-center border-b border-gray-300 font-semibold'>
                  <td className='py-2 px-4'>{new Date(item.date).toLocaleDateString()}</td>
                  <td className='py-2 px-4'>{index + 1}</td>
                  <td className='py-2 px-4'>{item.pname}</td>
                  <td className='py-2 px-4'>{item.cname}</td>
                  <td className='py-2 px-4'>{item.price}</td>
                  <td className='py-2 px-4'>{item.quantity}</td>
                  <td className='py-2 px-4'>{item.location}</td>
                  <td className='py-2 px-4'>{item.status}</td>
                  <td className='py-2 px-4'>
                    <div className='flex space-x-5 ml-20 text-[23px]'>
                      <button onClick={() => handleEdit(item)}><FaRegEdit className='text-orange-400' /></button>
                      <button onClick={() => handleDelete(item._id)}><FaTrashAlt className='text-red-400' /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-center mt-10">
            <p className="text-gray-500">No data available.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default OrderList;
