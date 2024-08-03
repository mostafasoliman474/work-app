// import axios from 'axios';
// import React, { useState } from 'react'
// import { useSelector } from 'react-redux';
// interface ChangableInfo {
//     id: String,
//     title: String,
//     producer: String,
//     color: String,
//     size: String,
//     price: number,
//     inStock: boolean,
//     apppearing:boolean,

// }
// const PopUpMenu = ({ id, title, producer, color, size, price, inStock,apppearing }: ChangableInfo) => {
//     const { currentUser } = useSelector(state => state.user)
//     const accessToken = currentUser.accessToken
//     const token = `Bearer ${accessToken}`;
//     const [filter, setfilter] = useState('')
//     const [hidePop, setHidePop] = useState(apppearing)
//     const handelChanged = (e) => {
//         e.preventDefault()
//         const value = e.target.value;
//         setfilter({
//             ...filter,
//             [e.target.name]: value,
//         })
//     }
//     console.log(hidePop)
//     const handelSubmit = async (e) => {
//         e.preventDefault()
//         try {
//             let res = await axios.put(`${process.env.REACT_APP_SERVER}/api/product/${id}`, filter, { headers: { token: token } })
//             console.log(res.data)
//         } catch (error) {
//             console.log(error)
//         }
//         setHidePop((prev)=>!prev)
//     }
//     return (
//         <div className={`absolute m-auto ${hidePop===true?"flex":"hidden"}` }>
//             <form className=' w-[500px] h-[350px] items-center bg-black rounded py-5 flex flex-col gap-5'>
//                 <div className='w-[60%] flex gap-5 items-center h-16'>
//                     <label className='text-white flex-1'>Title</label>
//                     <input type='email' placeholder={title} name='title' className='rounded-lg pl-1 flex-1 ' onChange={handelChanged} />
//                 </div>
//                 <div className='w-[60%] flex gap-5 items-center h-16'>
//                     <label className='text-white flex-1'>Produce</label>
//                     <input type='text' placeholder={producer} name='producer' className='rounded-lg pl-1 flex-1' onChange={handelChanged} />
//                 </div>
//                 <div className='w-[60%] flex gap-5 items-center h-16'>
//                     <label className='text-white flex-1'>color</label>
//                     <input type='text' placeholder={color} name='color' className='rounded-lg pl-1 flex-1 ' onChange={handelChanged} />
//                 </div>
//                 <div className='w-[60%] flex gap-5 items-center h-16'>
//                     <label className='text-white flex-1'>Size</label>
//                     <input type='text' placeholder={size} name='size' className='rounded-lg pl-1 flex-1' onChange={handelChanged} />
//                 </div>
//                 <div className='w-[60%] flex gap-5 items-center h-16'>
//                     <label className='text-white flex-1'>Price</label>
//                     <input type='number' placeholder={price} name='price' className='rounded-lg pl-1 flex-1' onChange={handelChanged} />
//                 </div>
//                 <div className='w-[60%] flex gap-5 items-center h-16'>
//                     <label className='text-white flex-1'>In Stock</label>
//                     <select className='flex-1' onChange={handelChanged} name='inStock' value={inStock}>
//                         <option value='true'>Yes</option>
//                         <option value='false'>No</option>
//                     </select>
//                 </div>
//                 <button className='bg-red-500 text-white rounded w-[60%] h-16' onClick={(e) => handelSubmit(e)}>Submit Changes</button>
//             </form>
//         </div>
//     )
// }

// export default PopUpMenu