'use client'

import { MenuNav } from '@components/atoms/menuList'
import { MENU_HEADER } from '@utils/list'
import React from 'react'

export default function Navigation() {
  return (
    <div className="md:hidden bg-[#1a1a1a] fixed bottom-0 w-screen shadow-[0px_0px_20px_0px_#00000024] px-4 py-2 grid grid-cols-5 gap-8">
      {MENU_HEADER.map((item, index) => (
        <MenuNav key={item.id} item={item} index={index} />
      ))}
    </div>
  )
}
