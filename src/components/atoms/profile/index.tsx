'use client'

import IconProfile, { IconProfileLG } from '@assets/icons/IconProfile'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export function Profile() {
  const pathname = usePathname()
  const [isHovering, setIsHovering] = useState(false)

  return (
    <Link href={'/profile'}>
      <div
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className={`${
          pathname === '/profile' ? 'bg-menuColor rounded-lg text-teksActive' : 'text-teksBlack'
        } text-base font-semibold my-1 py-2 px-3 hover:bg-teksActive hover:rounded-lg text-white hover:text-black flex flex-row items-center`}
      >
        <IconProfile className="mr-2" color={isHovering ? '#0A0A0A' : '#f5c518'} />
        <h1 className="font-semibold  text-base">Dandi Anto</h1>
      </div>
    </Link>
  )
}

export function ProfileMobile() {
  return (
    <Link href={'/profile'}>
      <div>
        <IconProfileLG color="#f5c518" />
      </div>
    </Link>
  )
}
