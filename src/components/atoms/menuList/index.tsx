'use client'

import { ListInterface } from '@interfaces/listInterfaces'
import { ICON_MENU } from '@utils/list'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export function MenuList({ item, index }: Readonly<ListInterface>) {
  const pathname = usePathname()
  const ListMenu = ICON_MENU[item.icon as keyof typeof ICON_MENU]

  const [isHovering, setIsHovering] = useState(false)

  return (
    <div key={index}>
      <Link href={item.href}>
        <li
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className={`${
            pathname === item.href ? 'bg-teksActive rounded-lg text-black' : 'text-white'
          } text-base font-semibold my-1 py-2 px-3 hover:bg-teksActive hover:rounded-lg hover:text-black flex flex-row items-center`}
        >
          <div className="mr-2">
            <ListMenu color={pathname === item.href || isHovering ? '#0A0A0A' : '#ffff'} />
          </div>
          <span>{item.name}</span>
        </li>
      </Link>
    </div>
  )
}

export function MenuNav({ item, index }: Readonly<ListInterface>) {
  const pathname = usePathname()
  const ListMenu = ICON_MENU[item.icon as keyof typeof ICON_MENU]

  const [isHovering, setIsHovering] = useState(false)

  return (
    <div key={index}>
      <Link href={item.href}>
        <li
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className={`${
            pathname === item.href ? ' rounded-lg text-teksActive' : 'text-white'
          } text-[10px] font-semibold my-1 py-2 px-3 hover:rounded-lg hover:text-teksActive flex flex-col justify-center items-center`}
        >
          <div className="mb-2">
            <ListMenu color={pathname === item.href || isHovering ? '#f5c518' : '#ffff'} />
          </div>
          {item.name}
        </li>
      </Link>
    </div>
  )
}
