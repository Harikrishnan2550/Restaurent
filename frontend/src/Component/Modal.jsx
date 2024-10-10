// import React, { useState,useEffect } from 'react';

// function Modal( { closeModal, onSubmit, orderData, isEditing } ) {
//   const [formData, setFormData] = useState({
//     date: '',
//     pname: '',
//     cname: '',
//     price: '',
//     quantity: '',
//     location: '',
//     status: ''
//   });


//   useEffect(() => {
//     if (isEditing && orderData) {
//       setFormData({
//         pname: orderData.pname,
//         cname: orderData.cname,
//         price: orderData.price,
//         quantity: orderData.quantity,
//         location: orderData.location,
//         status: orderData.status,
//       });
//     }
//   }, [isEditing, orderData]);

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formData);
//   };

//   return (
//     <div className='modal-container w-[600px]'>
//       <form onSubmit={handleSubmit} className='modal-form bg-white p-6 rounded-lg'>
//         <h2 className='text-lg font-bold mb-4'>Add Order</h2>
//         <div className='mb-4'>
//           <label className='block text-gray-700'>Date:</label>
//           <input
//             type="date"
//             name="date"
//             value={formData.date}
//             onChange={handleInputChange}
//             className='border border-gray-300 rounded-lg w-full py-2 px-3'
//           />
//         </div>
//         <div className='mb-4'>
//           <label className='block text-gray-700'>Product Name:</label>
//           <input
//             type="text"
//             name="pname"
//             value={formData.pname}
//             onChange={handleInputChange}
//             className='border border-gray-300 rounded-lg w-full py-2 px-3'
//           />
//         </div>
//         <div className='mb-4'>
//           <label className='block text-gray-700'>Customer Name:</label>
//           <input
//             type="text"
//             name="cname"
//             value={formData.cname}
//             onChange={handleInputChange}
//             className='border border-gray-300 rounded-lg w-full py-2 px-3'
//           />
//         </div>
//         <div className='mb-4'>
//           <label className='block text-gray-700'>Price:</label>
//           <input
//             type="number"
//             name="price"
//             value={formData.price}
//             onChange={handleInputChange}
//             className='border border-gray-300 rounded-lg w-full py-2 px-3'
//           />
//         </div>
//         <div className='mb-4'>
//           <label className='block text-gray-700'>Quantity:</label>
//           <input
//             type="number"
//             name="quantity"
//             value={formData.quantity}
//             onChange={handleInputChange}
//             className='border border-gray-300 rounded-lg w-full py-2 px-3'
//           />
//         </div>
//         <div className='mb-4'>
//           <label className='block text-gray-700'>Location:</label>
//           <input
//             type="text"
//             name="location"
//             value={formData.location}
//             onChange={handleInputChange}
//             className='border border-gray-300 rounded-lg w-full py-2 px-3'
//           />
//         </div>
//         <div className='mb-4'>
//         <label className='block text-gray-700'>Status:</label>
//         <select
//           name="status"
//           value={formData.status}
//           onChange={handleInputChange}
//           className='border border-gray-300 rounded-lg w-full py-2 px-3'
//         >
//           <option value="pending">Pending</option>
//           <option value="delivered">Delivered</option>
//           <option value="canceled">Canceled</option>
//         </select>
//       </div>
      

//         <div className='flex justify-end'>
//           <button
//             type="button"
//             onClick={closeModal}
//             className='bg-red-500 text-white px-4 py-2 rounded-lg mr-2'
//           >
//             Cancel
//           </button>
//           <button
//             type="submit"
//             className='bg-blue-500 text-white px-4 py-2 rounded-lg'
//           >
//           {isEditing ? 'Update Order' : 'Add Order'}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Modal;




import React, { useState, useEffect } from 'react';

function Modal({ closeModal, onSubmit, orderData, isEditing }) {
  const [formData, setFormData] = useState({
    date: '',
    pname: '',
    cname: '',
    price: '',
    quantity: '',
    location: '',
    status: '',
  });

  useEffect(() => {
    if (isEditing && orderData) {
      setFormData({
        // date: new Date(orderData.date).toISOString().split('T')[0],  // Ensure date format is correct
        pname: orderData.pname,
        cname: orderData.cname,
        price: orderData.price,
        quantity: orderData.quantity,
        location: orderData.location,
        status: orderData.status,
      });
    }
  }, [isEditing, orderData]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const orderToSubmit = isEditing ? { ...formData, _id: orderData._id } : formData;  // Include _id for editing
    onSubmit(orderToSubmit);
  };

  return (
    <div className='modal-container w-[600px]'>
      <form onSubmit={handleSubmit} className='modal-form bg-white p-6 rounded-lg'>
        <h2 className='text-lg font-bold mb-4'>{isEditing ? 'Edit Order' : 'Add Order'}</h2>
        <div className='mb-4'>
          <label className='block text-gray-700'>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            className='border border-gray-300 rounded-lg w-full py-2 px-3'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700'>Product Name:</label>
          <input
            type="text"
            name="pname"
            value={formData.pname}
            onChange={handleInputChange}
            className='border border-gray-300 rounded-lg w-full py-2 px-3'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700'>Customer Name:</label>
          <input
            type="text"
            name="cname"
            value={formData.cname}
            onChange={handleInputChange}
            className='border border-gray-300 rounded-lg w-full py-2 px-3'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700'>Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            className='border border-gray-300 rounded-lg w-full py-2 px-3'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700'>Quantity:</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleInputChange}
            className='border border-gray-300 rounded-lg w-full py-2 px-3'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700'>Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            className='border border-gray-300 rounded-lg w-full py-2 px-3'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700'>Status:</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleInputChange}
            className='border border-gray-300 rounded-lg w-full py-2 px-3'
          >
            <option value="pending">Pending</option>
            <option value="delivered">Delivered</option>
            <option value="canceled">Canceled</option>
          </select>
        </div>

        <div className='flex justify-end'>
          <button
            type="button"
            onClick={closeModal}
            className='bg-red-500 text-white px-4 py-2 rounded-lg mr-2'
          >
            Cancel
          </button>
          <button
            type="submit"
            className='bg-blue-500 text-white px-4 py-2 rounded-lg'
          >
            {isEditing ? 'Update Order' : 'Add Order'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Modal;


 