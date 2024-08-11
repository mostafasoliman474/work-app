import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useSelector } from 'react-redux'
import { BorderColorOutlined, CheckOutlined, ClearOutlined, DeleteForeverOutlined } from '@mui/icons-material'

const Orders = () => {
  const [orders, setOrders] = useState([])
  const { currentUser } = useSelector(state => state.user)
  const accessToken = currentUser.accessToken
  const token = `Bearer ${accessToken}`;
  useEffect(()=>{
    const getAllOrders = async()=>{
      try {
        let orders = await axios.get(`${process.env.REACT_APP_SERVER}/api/order`,{headers:{token:token}});
        setOrders(orders.data)
        
      } catch (error) {
        console.log(error)
      }
    }
    getAllOrders()
  },[token])
  return (
    <div className='contentContainer'>
      <h1 className='font-bold text-2xl'>ORDERS</h1>
      <table className='text-black '>
          <thead className=''>
            <tr className=''>
              <th scope="col" >
                <input type='checkbox' />
              </th>
              <th scope="col" >userID</th>
              <th scope="col" >amount</th>
              <th scope="col">status</th>
              <th scope="col">address</th>
              <th scope="col">Created At</th>
              <th scope="col">Verified</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody className=''>
            {orders.map(order => (
              <tr key={order._id} className='' >
                <td className='table-orders'>
                  <input type='checkbox' name={`${order._id}`} />
                </td>
                <td className='table-orders'>{order.userId}</td>
                {/* <td className='Img__user_div'>
                  <div className=' w-[30%] h-12 rounded-[100%]'>
                    <img src={user.img} alt='users' className='w-full h-full object-cover rounded-[100%]' />
                  </div>
                </td> */}
                <td className='table-orders'>{order.amount}</td>
                <td className='table-orders'>{order.status}</td>
                <td className='table-orders'>{order.address.city}</td>

                <td className='table-orders'>{order.createdAt}</td>
                <td className='table-orders'>{order.status === "pending" ? <ClearOutlined /> : <CheckOutlined />}</td>
                <td className='flex gap-5 justify-center' >
                  <BorderColorOutlined className='text-green-600 cursor-pointer' />
                  <DeleteForeverOutlined className='text-red-700 cursor-pointer' />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}

export default Orders