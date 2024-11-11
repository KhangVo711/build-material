import Link from "next/link";

export default function DashboardRecentTrasactions() {
    return (
        <div className="w-1/3 px-3">
          <p className="text-xl font-semibold mb-3">Giao dịch gần dây</p>
          <div className="w-full bg-white border rounded-lg p-3">
            {[
              { name: 'Trent Murphy', product: 'Product 1', amount: '$25.00', color: 'green' },
              { name: 'Joseph Brent', product: 'Product 34', amount: '$74.99', color: 'red' },
              { name: 'Jacob Bator', product: 'Product 23', amount: '$14.95', color: 'green' },
              { name: 'Alex Mason', product: 'Product 66', amount: '$44.99', color: 'green' },
            ].map(({ name, product, amount, color }, index) => (
              <div key={index} className="w-full bg-gray-100 border rounded-lg flex justify-between items-center px-3 py-1.5 mb-1">
                <div>
                  <p className="font-semibold text-md">{name}</p>
                  <p className='text-sm'>{product}</p>
                </div>
                <span className={`text-${color}-500 font-semibold text-md`}>{amount}</span>
              </div>
            ))}
          </div>
          <Link href="/dashboard/arc">Arc</Link>
        </div>
    )
}