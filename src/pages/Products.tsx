import React, { useEffect, useState } from 'react'
import { BorderColorOutlined, CheckOutlined, ClearOutlined, DeleteForeverOutlined, Search } from '@mui/icons-material'
import axios from 'axios';
// import PopUpMenu from '../components/PopUpMenu.tsx';

import { useSelector } from 'react-redux';
const Products = () => {
  const [Deleted, setDeleted] = useState(false)
  // const [search, setSearch] = useState('');
  // const [filteredProduct, setFilteredProduct] = useState([]);
  const [productsFetched, setProductsFetched] = useState([]);
  const [editProduct, setEditProduct] = useState({})
  const [popUpMenu, setPopUpMenu] = useState(false)
  const { currentUser } = useSelector(state => state.user)
  const accessToken = currentUser.accessToken
  const token = `Bearer ${accessToken}`;



// GET ALL PRODUCT
  useEffect(() => {
    const dataFetching = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER}/api/product/`)
        setProductsFetched(response.data);
      } catch (error) {
        console.log(error)
      }
    }
    dataFetching();
  }
    ,
    []
  )


// DELETE PRODUCT
  const deleteProduct = async (id) => {
    try {
      let res = await axios.delete(`${process.env.REACT_APP_SERVER}/api/product/${id}`, {
        headers: {
          token: token
        }
      })
      res.data && setDeleted((prev) => !prev)
    } catch (error) {
      console.log(error)
    }
  }


// EDIT PRODUCT
  const edit = (id, title, color, price, size, producer, inStock) => {
    setEditProduct({ id, title, color, price, size, producer, inStock })
    setPopUpMenu((prev)=>!prev)

  }
  const [changes, setChanges] = useState('')
  const handelChanged = (e) => {
      e.preventDefault()
      const value = e.target.value;
      setChanges({
          ...changes,
          [e.target.name]: value,
      })
  }
  const handelSubmit = async (e) => {
      e.preventDefault()
      try {
          let res = await axios.put(`${process.env.REACT_APP_SERVER}/api/product/${editProduct.id}`, changes, { headers: { token: token } })
          console.log(res.data)
      } catch (error) {
          console.log(error)
      }
      setPopUpMenu(false)
  }
  // function getsearch(e) {
  //   console.log(e.target.value.toLowerCase())
  //   setSearch(e.target.value.toLowerCase())
  // }

  // FILTER PRODUCTS
  //  useEffect(() => {
  //   const searchedData = () => {
  //     const productsFiltered = productsFetched.filter((product) => {
  //       return (
  //         product.color[0].toLowerCase().includes(search) ||
  //         product.producer.toLowerCase().includes(search) ||
  //         // product.price.toLowerCase().includes(search) ||
  //         product.title.toLowerCase().includes(search)
  //       )
  //     })
  //     console.log(filteredProduct)
  //     setFilteredProduct(productsFiltered);
  //   }
  //   search ? searchedData() : setFilteredProduct(productsFetched);
  // }
  // , [search,productsFetched])



  return (
    <div className='contentContainer flex flex-col gap-10'>

      <div className='flex gap-5'>
        <p className='text-white text-2xl font-bold'>PRODUCTS</p>
        <a type='button' className='p-2 bg-white rounded border-[2px] border-black hover:bg-black hover:text-white ' href='addproduct'>Add new product</a>

      </div>
      <div className='flex flex-col bg-white py-5 px-3 gap-5 rounded '>
        <div className='flex p-1  max-w-[20%] items-center border-b border-gray-400 hover:border-black hover:border-b-2  transition-[ease-in_30ms]'>
          <Search className='w-6 h-6 text-black' />
          <input type='text' placeholder='Search...' className='outline-none text-black pl-1' /> {/** onChange={getsearch} */}
        </div>
        <table className='text-black '>
          <thead className=''>
            <tr className=''>
              <th scope="col" >
                <input type='checkbox' />
              </th>
              <th scope="col" >Id</th>
              <th scope="col" >Image</th>
              <th scope="col">Title</th>
              <th scope="col">Color</th>
              <th scope="col">Price</th>
              <th scope="col">Producer</th>
              <th scope="col">Created At</th>
              <th scope="col">inStock</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody className=''>
            {productsFetched.map(product => (
              <tr key={product._id} className='' >
                <td className='text-center'>
                  <input type='checkbox' name={`${product._id}`} />
                </td>
                <td className='text-center'>{product._id}</td>
                <td className='Img__user_div'>
                  <div className=' w-[30%] h-12 rounded-[100%]'>
                    <img src={product.img} alt='products' className='w-full h-full object-cover rounded-[100%]' />
                  </div>
                </td>
                <td className='text-center'>{product.title}</td>
                <td className='text-center'>{product.color}</td>
                <td className='text-center'>{product.price}</td>
                <td className='text-center'>{product.producer}</td>
                <td className='text-center'>{product.createdAt}</td>
                <td className='text-center'>{product.inStock === true ? <CheckOutlined /> : <ClearOutlined />}</td>
                <td className='flex gap-5 justify-center' >
                  <BorderColorOutlined className='text-green-600 cursor-pointer' onClick={() => edit(product._id, product.title, product.color, product.price, product.size, product.producer, product.inStock)} />
                  <DeleteForeverOutlined className='text-red-700 cursor-pointer' onClick={() => deleteProduct(product._id)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={`absolute ${popUpMenu?'flex':'hidden'}`}>

          <form className=' w-[500px] h-[350px] items-center bg-black rounded py-5 flex flex-col gap-5' >
            <div className='w-[60%] flex gap-5 items-center h-16'>
              <label className='text-white flex-1'>Title</label>
              <input type='email' placeholder={editProduct.title} name='title' className='rounded-lg pl-1 flex-1 ' onChange={handelChanged} />
            </div>
            <div className='w-[60%] flex gap-5 items-center h-16'>
              <label className='text-white flex-1'>Produce</label>
              <input type='text' placeholder={editProduct.producer} name='producer' className='rounded-lg pl-1 flex-1' onChange={handelChanged} />
            </div>
            <div className='w-[60%] flex gap-5 items-center h-16'>
              <label className='text-white flex-1'>color</label>
              <input type='text' placeholder={editProduct.color} name='color' className='rounded-lg pl-1 flex-1 ' onChange={handelChanged} />
            </div>
            <div className='w-[60%] flex gap-5 items-center h-16'>
              <label className='text-white flex-1'>Size</label>
              <input type='text' placeholder={editProduct.size} name='size' className='rounded-lg pl-1 flex-1' onChange={handelChanged} />
            </div>
            <div className='w-[60%] flex gap-5 items-center h-16'>
              <label className='text-white flex-1'>Price</label>
              <input type='number' placeholder={editProduct.price} name='price' className='rounded-lg pl-1 flex-1' onChange={handelChanged} />
            </div>
            <div className='w-[60%] flex gap-5 items-center h-16'>
              <label className='text-white flex-1'>In Stock</label>
              <select className='flex-1' onChange={handelChanged} name='inStock' value={editProduct.inStock}>
                <option value='true'>Yes</option>
                <option value='false'>No</option>
              </select>
            </div>
            <button className='bg-red-500 text-white rounded w-[60%] h-16' onClick={(e) => handelSubmit(e)}>Submit Changes</button>
          </form>
        </div>
      </div>
    </div>
  )
}


export default Products