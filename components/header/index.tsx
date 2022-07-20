/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useState, useContext, useRef } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { PaperClipIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ThemeContext } from '../../pages/_app'
import { classNames } from '../../utils/helper'

type Nav = {
    id: number;
    name: string;
    href: string;
    current: boolean;
}

const navigation: Nav[] = [
    { id: 1, name: 'Homepage', href: '/', current: true },
    { id: 2, name: 'Service', href: '/service', current: false },
    { id: 3, name: 'About Me', href: '/about', current: false },
    { id: 4, name: 'Sign In', href: '/signin', current: false },
    { id: 5, name: 'Sign Up', href: '/signup', current: false },
]

function checkActiveNavbar(isActive: boolean, theme: any) {
    if (isActive && theme === 'dark') {
        return 'bg-slate-800 text-zinc-900 rounded-2xl'
    } else if (isActive && theme === '') {
        return 'bg-white text-zinc-900 rounded-2xl'
    }
    return 'text-zinc-900 hover:text-gray-400'
}

function checkActiveNavMobile(isActive: boolean, theme: any) {
    if (isActive && theme === 'dark') {
        return 'bg-slate-800 text-zinc-900'
    } else if (isActive && theme === '') {
        return 'bg-white text-zinc-900'
    }
    return 'text-zinc-900 hover:text-gray-400'
}


export default function Header() {
    const [nav, setNav] = useState(navigation)
    const [theme, handleTheme]: any = useContext(ThemeContext)
    const handleSwitchPage = (index: number) => {
        const stateNew: any = navigation.map((item, i) => {
            if (index === i) {
                item.current = true
            } else
                item.current = false
            return item
        })
        setNav(stateNew)
    }
    const router = useRouter();
    const route = useRef(router.route);
    useEffect(() => {
        const navNew: any = navigation.map(item => {
            if (route.current === item.href) item.current = true
            else item.current = false
            return item
        })
        setNav(navNew)
    }, [route.current])
    return (
        <>
            <Head>
                <title>My Fullstack Blog</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap" rel="stylesheet" />
                <link rel="icon" href="man-working.svg" />

            </Head>
            <Disclosure as="nav" className="bg-custom pt-8">
                {({ open }: any) => (
                    <>
                        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                            <div className="relative flex items-center justify-between h-16">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex-custom flex items-center justify-center sm:items-stretch sm:justify-start">
                                    <div className="flex-shrink-0 flex items-center">
                                        <img
                                            className="block lg:hidden h-8 w-auto"
                                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                                            alt="Workflow"
                                        />
                                        <img
                                            className="hidden lg:block h-8 w-auto"
                                            src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                                            alt="Workflow"
                                        />

                                    </div>
                                </div>
                                <div className="hidden sm:block sm:ml-6 bg-nav">
                                    <div className="flex space-x-4 h-10 p-1">
                                        {nav.map((item, index) => (
                                            <Link href={item.href} key={item.id}>
                                                <a
                                                    key={item.id}
                                                    href={item.href}
                                                    onClick={() => handleSwitchPage(index)}
                                                    className={classNames(
                                                        checkActiveNavbar(item.current, theme),
                                                        'px-3 pt-1 text-sm font-medium', item.current || 'false'
                                                    )}
                                                    aria-current={item.current ? 'page' : undefined}
                                                >
                                                    {item.name}
                                                </a>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">


                                    {/* Profile dropdown */}
                                    <Menu as="div" className="ml-3 relative">
                                        <div>
                                            <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                                <span className="sr-only">Open user menu</span>
                                                <img
                                                    className="h-8 w-8 rounded-full"
                                                    src="https://console-skyview-dev.s3.amazonaws.com/organization_new/profile/62b97283c93f00cc0fcec799_1657161976.jpg"
                                                    alt=""
                                                />
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <Menu.Item>
                                                    {({ active }: any) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                        >
                                                            Your Profile
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }: any) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                        >
                                                            Settings
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }: any) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                        >
                                                            Sign out
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>
                            </div>
                        </div>
                        <Disclosure.Panel className="sm:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                {navigation.map((item, index) => (
                                    <Link href={item.href} key={item.id}>
                                        <Disclosure.Button
                                            onClick={() => { handleSwitchPage(index) }}
                                            key={item.name}
                                            as="a"
                                            href={item.href}
                                            className={classNames(
                                                checkActiveNavMobile(item.current, theme),
                                                'block px-3 py-2 rounded-md text-base font-medium'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    </Link>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </>
                )
                }
            </Disclosure >
        </>
    )
}
