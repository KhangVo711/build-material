import { ChevronRightIcon } from '@heroicons/react/24/solid';

export default function DefaultDashboardPage() {
    return (
        <>
            <nav className="text-sm font-semibold mb-3" aria-label="Breadcrumb">
                <ol className="list-none p-0 inline-flex">
                    <li className="flex items-center text-blue-500">
                        <a href="#" className="text-gray-700">Trang chủ</a>
                        <ChevronRightIcon className="w-3 h-3 mx-3" />
                    </li>
                    <li className="flex items-center">
                        <a href="#" className="text-gray-600">Bảng điều khiển</a>
                    </li>
                </ol>
            </nav>

            <div className="lg:flex justify-between items-center mb-4">
                <p className="text-2xl font-semibold mb-2 lg:mb-0">Chào buổi sáng, Admin!</p>
                <button className="bg-blue-500 hover:bg-blue-600 focus:outline-none rounded-lg px-3 py-2 text-white font-semibold shadow">
                    Nhật ký
                </button>
            </div>


        </>
    )
}