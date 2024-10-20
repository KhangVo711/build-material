'use client'
import React, { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  MagnifyingGlassIcon,
  MicrophoneIcon,
  ShoppingCartIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import Image from 'next/image';

const products = [
  { name: 'Nước sơn', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Phụ gia chống thấm', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Thạch cao', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Xi măng', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Gạch', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
  { name: 'Gỗ', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'Xem chi tiết', href: '#', icon: PlayCircleIcon },
  { name: 'Liên hệ mua hàng', href: '#', icon: PhoneIcon },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white sticky top-0 z-10">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image src="https://png.pngtree.com/png-vector/20220726/ourmid/pngtree-construction-logo-png-image_6066962.png" alt="LOGO" width="500" height="500" className="h-16 w-auto" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden items-center lg:flex xl:gap-x-12 lg:gap-x-7">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm xl:text-md font-semibold leading-6 text-gray-900">
              Sản phẩm
              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                  >
                    <item.icon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <a href="#" className="text-sm font-semibold leading-6 xl:text-md text-gray-900">
            Đặc trưng
          </a>
          <a href="#" className="text-sm font-semibold leading-6 xl:text-md text-gray-900">
            Đang giảm
          </a>
          <a href="#" className="text-sm font-semibold leading-6 xl:text-md text-gray-900">
            Liên hệ
          </a>

          <div className="flex items-center border border-gray-300 rounded-full p-2 xl:w-80 lg:w-64 bg-white shadow-sm">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
            <input
              type="text"
              placeholder="Tìm kiếm"
              className="ml-2 outline-none w-full text-sm"
            />
            <div className="w-0.5 h-5 bg-gray-300 mr-2"></div>
            <MicrophoneIcon className="h-5 w-5 text-gray-700" />
          </div>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            <ShoppingCartIcon className="h-6 w-6 text-gray-700 hover:text-gray-900" />
          </a>
        </PopoverGroup>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="/login" className="text-sm xl:text-md font-semibold leading-6 text-gray-900 border rounded-2xl border-white hover:border hover:rounded-2xl hover:border-black px-2 py-1 transition duration-300 ease-in-out">
            Đăng nhập 
          </Link>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image src="https://png.pngtree.com/png-vector/20220726/ourmid/pngtree-construction-logo-png-image_6066962.png" alt="LOGO" width="500" height="500" className="h-16 w-auto" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6 cursor-pointer" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <div className="flex items-center border border-gray-300 rounded-full p-1.5 w-full bg-white shadow-sm">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-600" />
                  <input
                    type="text"
                    placeholder="Tìm kiếm"
                    className="ml-2 outline-none w-full"
                  />
                  <div className="w-0.5 h-5 bg-gray-300 mr-2"></div>
                  <MicrophoneIcon className="h-5 w-5 mr-0.5 text-gray-600" />
                </div>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Sản phẩm
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Đặc trưng
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Đang giảm
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Liên hệ
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  <p className='flex justify-between'>Giỏ hàng<ShoppingCartIcon className="h-6 w-6 text-gray-700" /></p>
                </a>
              </div>
              

              <div className="py-6">
                <Link
                  href="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Đăng nhập
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}