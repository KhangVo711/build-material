import { ChevronRightIcon } from '@heroicons/react/24/solid';

export default function AddProduct() {
    return (
        <div id="home" className='p-8 overflow-x-hidden'>
      {/* Breadcrumb */}
      <nav className="text-sm font-semibold mb-6" aria-label="Breadcrumb">
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
      </div>
    )
}