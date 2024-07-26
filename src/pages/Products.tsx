import React, { useEffect, useState } from 'react'
import { BorderColorOutlined, CheckOutlined, ClearOutlined, DeleteForeverOutlined, Search } from '@mui/icons-material'
import axios from 'axios';

const Products = () => {

  // const [search, setSearch] = useState('');
  const [productsFetched, setProductsFetched] = useState([]);
  // const [filteredProduct, setFilteredProduct] = useState([]);
  // function getsearch(e) {
  //   setSearch(e.target.value.toLowerCase())
  // }


  // useEffect(() => {
  //   const searchedData = () => {
  //     const productsFiltered = productsFetched.filter((product) => {
  //       return (
  //         product.color.toLowerCase().includes(search) ||
  //         product.producer.toLowerCase().includes(search) ||
  //         product.price.toLowerCase().includes(search) ||
  //         product.title.toLowerCase().includes(search)
  //       )
  //     })
  //     setFilteredProduct(productsFiltered);
  //   }
  //   search ? searchedData() : setFilteredProduct(productsFetched);
  // }
  //   , [search])
  useEffect(() => {
    const dataFetching = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/product/")
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

  return (
    <div className='contentContainer flex flex-col gap-10'>

      <div className='flex gap-5'>
        <p className='text-white text-2xl font-bold'>PRODUCTS</p>
        <a type='button' className='p-2 bg-white rounded border-[2px] border-black hover:bg-black hover:text-white ' href='addproduct'>Add new product</a>

      </div>
      <div className='flex flex-col bg-white py-5 px-3 gap-5 rounded '>
        <div className='flex p-1  max-w-[20%] items-center border-b border-gray-400 hover:border-black hover:border-b-2  transition-[ease-in_30ms]'>
          <Search className='w-6 h-6 text-black' />
          <input type='text' placeholder='Search...' className='outline-none text-black pl-1' /> {/**onChange={getsearch}  */}
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
                  <BorderColorOutlined className='text-green-600 cursor-pointer' />
                  <DeleteForeverOutlined className='text-red-700 cursor-pointer' />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Products