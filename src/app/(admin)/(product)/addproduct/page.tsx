import { ChevronRightIcon, EyeIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid';

export default function AddProduct() {
  const product = [
    {
      name: 'Apple MacBook Pro 17"',
      color: 'Silver',
      category: 'Laptop',
      quality: '2',
      price: '$2999',
    },
    {
      name: 'Microsoft Surface Pro',
      color: 'White',
      category: 'Laptop PC',
      quality: '5',
      price: '$1999',
    },
    {
      name: 'Magic Mouse 2',
      color: 'Black',
      category: 'Accessories',
      quality: '10',
      price: '$99',
    },
  ]
  return (
    <div id="home" className='p-8 overflow-x-hidden'>
      {/* Breadcrumb */}
      <div className='w-full flex items-center justify-between mb-6'>
        <nav className="text-sm font-semibold " aria-label="Breadcrumb">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center text-blue-500">
              <a href="#" className="text-gray-700">Sản phẩm</a>
              <ChevronRightIcon className="w-3 h-3 mx-3" />
            </li>
            <li className="flex items-center">
              <a href="#" className="text-gray-600">Thêm sản phẩm</a>
            </li>
          </ol>
        </nav>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2.5 text-sm px-3 rounded transition duration-150 ease-in-out">Thêm sản phẩm</button>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              {/* <th scope="col" className="px-6 py-3">
                Quality
              </th> */}
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3 ">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {product.map((item, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {item.name}
                </th>
                <td className="px-6 py-4">
                  {item.color}
                </td>
                <td className="px-6 py-4">
                  {item.category}
                </td>
                {/* <td className="px-6 py-4">
                  {item.quality}
                </td> */}
                <td className="px-6 py-4">
                  {item.price}
                </td>
                <td className="px-6 py-4 flex">
                  <a href="#" className="transition duration-200 ease-out "><EyeIcon className="h-5 w-5 text-gray-500 dark:text-white hover:text-gray-400" /></a>
                  <a href="#" className="transition duration-200 ease-out mx-2"><PencilSquareIcon className="h-5 w-5 text-blue-600 dark:text-blue-500 hover:text-blue-400" /></a>
                  <a href="#" className="transition duration-200 ease-out "><TrashIcon className="h-5 w-5 text-red-600 dark:text-red-500 hover:text-red-400" /></a>
                </td>
              </tr>
            ))}


          </tbody>
        </table>
      </div>

    </div>
  )
}