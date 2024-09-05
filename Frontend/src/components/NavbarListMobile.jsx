import React from 'react'

const list = [{
    name:"Home",
    href:"/"
},{
    name:"About us",
    href:"/about"
},{
    name:"Contact us",
    href:"/contact"
}]

const NavbarListMobile = () => {
  return (
    <div>
    <div className='flex flex-col items-center gap-14 mt-28'>
        {list.map((l) => {
            return <a className='font-semibold text-4xl' href={l.href}>{l.name}</a>
        })}
    </div>
    </div>
  )
}

export default NavbarListMobile