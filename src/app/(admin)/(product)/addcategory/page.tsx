"use client"
import { ChevronRightIcon, PencilSquareIcon, TrashIcon} from '@heroicons/react/24/solid';
import { useState, useEffect, useRef } from 'react';

export default function AddCategory() {
    const product = [
        {
            code: 'NS-001',
            name: 'Nước sơn',
        },
        {
            code: 'KD-001',
            name: 'Keo dán',
        },
        {
            code: 'GC-001',
            name: 'Gạch',
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
            setShowForm(false);
        }
    };
    useEffect(() => {
        if (showForm) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showForm]);
    // END ADD PRODUCT

    // EDIT PRODUCT
    const [nameCategory, setNameCategory] = useState("Nước sơn");

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
                            <a href='#' className="text-gray-600">Thêm loại</a>
                        </li>
                    </ol>
                </nav>
                <button onClick={handleAddProductClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2.5 text-sm px-3 rounded transition duration-150 ease-in-out">Thêm loại</button>
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-4 py-3">
                                Mã loại
                            </th>
                            <th scope="col" className="px-40 py-3">
                                Loại
                            </th>
                           
                            <th scope="col" className="px-1 py-3 ">
                                Hành động
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {product.map((item, index) => (
                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th  scope="row" className="px-4 py-4">
                                    {item.code}
                                </th>
                                <td className="px-40 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {item.name}
                                </td>
                                
                              
                                <td className="px-1 py-4 flex">
                                    {/* <a href="#" className="transition duration-200 ease-out "><EyeIcon className="h-5 w-5 text-gray-500 dark:text-white hover:text-gray-400" /></a> */}
                                    <button onClick={handleEditProductClick} className="transition duration-200 ease-out mx-2"><PencilSquareIcon className="h-5 w-5 text-blue-600 dark:text-blue-500 hover:text-blue-400"/></button>
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
                        <div className="mb-3">
                            <label htmlFor="code" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mã loại</label>
                            <input type="text" id="code" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2.5 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tên loại</label>
                            <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2.5 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
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
                        <div className="mb-3">
                            <label htmlFor="code" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mã loại</label>
                            <p id="code" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2.5 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light">NS-001</p>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tên loại</label>
                            <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2.5 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" value={nameCategory}  onChange={(e) => setNameCategory(e.target.value)}/>
                        </div>

                        <div className='flex items-center justify-center w-full'>
                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Đồng ý</button>
                        </div>
                    </form>
                </div>
            )}

            

            
        </div>

    )
}