/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { PaperClipIcon } from '@heroicons/react/solid'
import FormComponent from '../components/form'
import LoginComponent from '../components/login'
import ProfileComponent from '../components/profile'
import ServiceComponent from '../components/services'
import CollectionsComponent from '../components/collections'
import Link from 'next/link'
const navigation = [
    { name: 'Homepage', href: '/', current: true },
    { name: 'Service', href: '/service', current: false },
    { name: 'About Me', href: '#', current: false },
    { name: 'Sign In', href: '/signin', current: false },
    { name: 'Sign Up', href: '/signin', current: false },
]

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export default function App() {
    return (
        <h1>This is homepage</h1>
    )
}
