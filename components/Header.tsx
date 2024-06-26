import React from 'react'
import Logo from './Logo'
import DarkModeToggle from './DarkModeToggle'
import UserButton from './UserButton'
import { authOptions } from '@/auth'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { MessagesSquareIcon } from 'lucide-react'
import CreateChatButton from './CreateChatButton'
import UpgradeBanner from './UpgradeBanner'
import LanguageSelect from './LanguageSelect'

async function Header() {
    const session = await getServerSession(authOptions);

    return (
        <header className='sticky top-0 z-50 bg-white dark:bg-gray-900'>
            <nav className='flex flex-col sm:flex-row items-center p-5 pl-2 bg-white dark:bg-gray-900 max-w-7xl mx-auto'>
                {/* Logo */}
                <div className='flex items-center justify-center gap-2'>
                    <Logo />
                    <Link href="/" className='text-4xl font-bold tracking-tight sm:text-3xl' >
                        ChatsApp
                    </Link>
                </div>

                <div className='flex-1 flex items-center justify-end space-x-4'>
                    {/* Language select */}
                    <LanguageSelect />

                    {/* Session */}
                    {session ? (
                        <>
                            <Link href={'/chat'} prefetch={false}>
                                <MessagesSquareIcon className='text-black dark:text-white' />
                            </Link>
                            <CreateChatButton />
                        </>
                    ) : (
                        <Link href={'/pricing'}>
                            Pricing
                        </Link>
                    )}

                    {/* Dark mode toggle */}
                    <DarkModeToggle />

                    {/* User button */}
                    <UserButton session={session} />
                </div>
            </nav>

            {/* Upgrade Banner */}
            {/* <UpgradeBanner /> */}
        </header>
    )
}

export default Header