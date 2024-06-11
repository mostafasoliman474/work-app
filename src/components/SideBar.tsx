import { NavList } from '../data.ts'
const SideBar = () => {
  return (
    <header className='flex-1 border-r border-gray-500'>
      <nav className='flex flex-col gap-6 pl-5'>
        {NavList.map((div)=>(
        <div key={div.id} className='flex flex-col gap-2'>
          <p className='text-gray-600'>{div.title}</p>
          {div.links.map(link=>(
          <a key={link.id} href={link.link} className='hover:bg-cyan-400 py-3 rounded flex gap-3 p-1'>
            <link.img className='icons'/>
            <p className='text-white cursor-pointer'>{link.text}</p>
          </a>
          ))}
        </div>
        ))}
      </nav>
    </header>
  )
}

export default SideBar