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

const NavbarList = () => {
  return (
    <div className='hidden md:flex gap-10'>
        {list.map((l) => {
            return <a className='font-semibold text-lg' href={l.href}>{l.name}</a>
        })}
    </div>
  )
}

export default NavbarList;