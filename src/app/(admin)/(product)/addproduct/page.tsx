"use client"
import { ChevronRightIcon, EyeIcon, PencilSquareIcon, TrashIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import { useState, useEffect, useRef } from 'react';

export default function AddProduct() {

  const product = [
    {
      name: 'Nước sơn chống thấm',
      code: 'MCNS-001',
      category: 'Nước sơn',
      producer: 'MyColor',
      quality: '2',
      price: '$2999',
    },
    {
      name: 'Keo dán gạch',
      code: 'KVKD-001',
      category: 'Keo dán',
      producer: 'Kova',
      quality: '5',
      price: '$1999',
    },
    {
      name: 'Gạch lát nền',
      code: 'DTGC-001',
      category: 'Gạch',
      producer: 'DongTam',
      quality: '10',
      price: '$99',
    },
  ]
  // ADD PRODUCT
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  const handleAddProductClick = () => {
    setShowForm(!showForm);
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (formRef.current && !formRef.current.contains(event.target as Node)) {
      setShowForm(false); // Ẩn form nếu click xảy ra bên ngoài form
    }
  };

  useEffect(() => {
    if (showForm) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Cleanup event listener khi component bị hủy
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showForm]);
  //ADD PRODUCT

  // EDIT PRODUCT

  const [nameProduct, setNameProduct] = useState("Nước sơn");
  const [price, setPrice] = useState("25,000");
  const [quantity, setQuantity] = useState("4");
  const [detail, setDetail] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.");

  const [showFormEdit, setShowFormEdit] = useState(false);
  const formRefEdit = useRef<HTMLFormElement | null>(null);

  const handleEditProductClick = () => {
    setShowFormEdit(!showFormEdit);
  };
  const handleClickOutsideEdit = (event: MouseEvent) => {
    if (formRefEdit.current && !formRefEdit.current.contains(event.target as Node)) {
      setShowFormEdit(false);
    }
  };
  useEffect(() => {
    if (showFormEdit) {
      document.addEventListener('mousedown', handleClickOutsideEdit);
    } else {
      document.removeEventListener('mousedown', handleClickOutsideEdit);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideEdit);
    };
  }, [showFormEdit]);
  // END EDIT PRODUCT

  return (
    <div id="home" className='px-8 pt-5'>
      {/* Breadcrumb */}
      <div className='w-full flex items-center justify-between mb-6'>
        <nav className="text-sm font-semibold " aria-label="Breadcrumb">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center text-blue-500">
              <a href="#" className="text-gray-700">Sản phẩm</a>
              <ChevronRightIcon className="w-3 h-3 mx-3" />
            </li>
            <li className="flex items-center">
              <a href='#' className="text-gray-600">Thêm sản phẩm</a>
            </li>
          </ol>
        </nav>
        <button onClick={handleAddProductClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2.5 text-sm px-3 rounded transition duration-150 ease-in-out">Thêm sản phẩm</button>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-4 py-3">
                Mã sản phẩm
              </th>
              <th scope="col" className="px-8 py-3">
                Tên sản phẩm
              </th>
              <th scope="col" className="px-4 py-3">
                Giá
              </th>
              <th scope="col" className="px-4 py-3">
                Loại
              </th>
              {/* <th scope="col" className="px-6 py-3">
                Quality
              </th> */}
              <th scope="col" className="px-4 py-3">
                Nhà sản xuất
              </th>
              <th scope="col" className="px-6 py-3 ">
                Hành động
              </th>
            </tr>
          </thead>
          <tbody>
            {product.map((item, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-4 py-4" >
                  {item.code}
                </th>
                <td className="px-8 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {item.name}
                </td>
                <td className="px-4 py-4">
                  {item.price}
                </td>
                <td className="px-4 py-4">
                  {item.category}
                </td>
                {/* <td className="px-6 py-4">
                  {item.quality}
                </td> */}
                <td className="px-4 py-4">
                  {item.producer}
                </td>
                <td className="px-6 py-4 flex">
                  <a href="#" className="transition duration-200 ease-out "><EyeIcon className="h-5 w-5 text-gray-500 dark:text-white hover:text-gray-400" /></a>
                  <button onClick={handleEditProductClick} className="transition duration-200 ease-out mx-2"><PencilSquareIcon className="h-5 w-5 text-blue-600 dark:text-blue-500 hover:text-blue-400" /></button>
                  <a href="#" className="transition duration-200 ease-out "><TrashIcon className="h-5 w-5 text-red-600 dark:text-red-500 hover:text-red-400" /></a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showForm && (
        <div className='w-full absolute h-screen bg-black bg-opacity-10 top-0 right-1/2 translate-x-1/2 flex items-center'>
          <form ref={formRef} className="w-5/12 mx-auto bg-gray-100 shadow-lg border rounded p-10 mt-16 ">
            <div className="mb-3 flex">
              <div className="w-1/3 mr-1">
                <label htmlFor="code" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mã sản phẩm</label>
                <input type="text" id="code" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2.5 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
              </div>
              <div className="w-2/3 ml-1">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tên sản phẩm</label>
                <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2.5 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
              </div>
            </div>
            <div className="mb-6 flex">
              <div className="w-1/2 mr-1">
                <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Giá</label>
                <input type="text" id="price" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2.5 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
              </div>
              <div className="w-1/2 ml-1">
                <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Số lượng</label>
                <input type="text" id="quantity" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2.5 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
              </div>
            </div>
            <div className='mb-3 flex justify-between'>
              <div className="w-1/2 relative mr-2">
                <select className="block appearance-none text-sm w-full bg-white border border-gray-400 hover:border-gray-500 px-2 py-1.5 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                  <option>Nhà sản xuất</option>
                  <option>MyColor</option>
                  <option>DongTam</option>
                  <option>Kova</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center text-gray-700">
                  <ChevronDownIcon className="h-4 w-4 text-gray-500" />
                </div>
              </div>
              <div className="w-1/2 relative">
                <select className="block appearance-none text-sm w-full bg-white border border-gray-400 hover:border-gray-500 px-2 py-1.5 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                  <option>Loại sản phẩm</option>
                  <option>Nước sơn</option>
                  <option>Keo dán</option>
                  <option>Gạch</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center text-gray-700">
                  <ChevronDownIcon className="h-4 w-4 text-gray-500" />
                </div>
              </div>
            </div>
            <div className='mb-3'>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Thông tin chi tiết</label>
              <textarea id="message" rows={4} className="block pl-2.5 py-1.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
            </div>
            <div className='mb-3'>

              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload file</label>
              <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-sm cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" />
              <p className="mt-1 text-gray-500 dark:text-gray-300 text-xs" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>

            </div>
            <div className='flex items-center justify-center w-full'>
              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Thêm</button>
            </div>
          </form>
        </div>
      )}
      {showFormEdit && (
        <div className='w-full absolute h-screen bg-black bg-opacity-10 top-0 right-1/2 translate-x-1/2 flex items-center'>
          <form ref={formRefEdit} className="w-5/12 mx-auto bg-gray-100 shadow-lg border rounded p-10 mt-16 ">
            <div className="mb-3 flex">
              <div className="w-1/3 mr-1">
                <label htmlFor="code" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mã sản phẩm</label>
                <p id="code" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2.5 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light">MCNS-001</p>
              </div>
              <div className="w-2/3 ml-1">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tên sản phẩm</label>
                <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2.5 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" value={nameProduct} onChange={(e) => setNameProduct(e.target.value)} />
              </div>
            </div>
            <div className="mb-6 flex">
              <div className="w-1/2 mr-1">
                <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Giá</label>
                <input type="text" id="price" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2.5 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" value={price} onChange={(e) => setPrice(e.target.value)} />
              </div>
              <div className="w-1/2 ml-1">
                <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Số lượng</label>
                <input type="text" id="quantity" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2.5 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
              </div>
            </div>
            <div className='mb-3 flex justify-between'>
              <div className="w-1/2 relative mr-2">
                <select className="block appearance-none text-sm w-full bg-white border border-gray-400 hover:border-gray-500 px-2 py-1.5 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                  <option>Nhà sản xuất</option>
                  <option>MyColor</option>
                  <option>DongTam</option>
                  <option>Kova</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center text-gray-700">
                  <ChevronDownIcon className="h-4 w-4 text-gray-500" />
                </div>
              </div>
              <div className="w-1/2 relative">
                <select className="block appearance-none text-sm w-full bg-white border border-gray-400 hover:border-gray-500 px-2 py-1.5 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                  <option>Loại sản phẩm</option>
                  <option>Nước sơn</option>
                  <option>Keo dán</option>
                  <option>Gạch</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center text-gray-700">
                  <ChevronDownIcon className="h-4 w-4 text-gray-500" />
                </div>
              </div>
            </div>
            <div className='mb-3'>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Thông tin chi tiết</label>
              <textarea id="message" rows={4} className="block pl-2.5 py-1.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={detail} onChange={(e) => setDetail(e.target.value)} placeholder="Write your thoughts here..."></textarea>
            </div>
            <div className='mb-3'>

              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload file</label>
              <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-sm cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" />
              <p className="mt-1 text-gray-500 dark:text-gray-300 text-xs" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>

            </div>
            <div className='flex items-center justify-center w-full'>
              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Thêm</button>
            </div>
          </form>
        </div>
      )}
    </div>

  )
}