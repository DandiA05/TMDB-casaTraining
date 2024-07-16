'use client'

import { ProfileMobile } from '@components/atoms/profile'
import useNamePage from '@hooks/useNamePage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  const pageName = useNamePage()
  return (
    <header className="flex flex-row md:py-6 md:px-6 py-2 px-5 bg-black">
      <h1 className="flex text-white justify-center items-center font-semibold">
        {pageName === 'Watch-list' ? 'Watch List' : pageName}
      </h1>

      <div className="flex-row ml-auto hidden md:flex items-center gap-2">
        <FontAwesomeIcon icon={faVideo} className="me-0" color="#f5c518" />
        <h1 className=" text-white font-semibold">Nonton Yuk</h1>
      </div>

      <div className="md:hidden ml-auto">
        <ProfileMobile />
      </div>
    </header>
  )
}
