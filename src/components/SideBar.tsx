import React from 'react'
import GroupIcon from '@mui/icons-material/Group';
import HomeIcon from '@mui/icons-material/Home';
import InventoryIcon from '@mui/icons-material/Inventory';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PublishIcon from '@mui/icons-material/Publish';
import EditNoteIcon from '@mui/icons-material/EditNote';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import BackupIcon from '@mui/icons-material/Backup';
const NavList=[
  {
    id:1,
    title:"MAIN",
    links:[
      {
        id:1,
        text:"Home Page",
        link:"#",
        img:HomeIcon
      },
      {
        id:2,
        text:"Profile",
        link:"#",
        img:GroupIcon
      },
    ]
  },
  {
    id:2,
    title:"Lists",
    links:[
      {
        id:1,
        text:"Users",
        link:"#",
        img:GroupIcon
      },
      {
        id:2,
        text:"Products",
        link:"#",
        img:InventoryIcon
      },
      {
        id:3,
        text:"Orders",
        link:"#",
        img:ListAltIcon

      },
      {
        id:4,
        text:"Posts",
        link:"#",
        img:PublishIcon
      ,
      },
    ]
  },
  {
    id:3,
    title:"GENERAL",
    links:[
      {
        id:1,
        text:"Elements",
        link:"#",
        img:EditNoteIcon
      },
      {
        id:2,
        text:"Notes",
        link:"#",
        img:EditNoteIcon
      },
      {
        id:3,
        text:"Calender",
        link:"#",
        img:CalendarMonthIcon
      },
      {
        id:4,
        text:"Forms",
        link:"#",
        img:FormatAlignLeftIcon
      },
    ]
  },
  {
    id:4,
    title:"MAINTENANCE",
    links:[
      {
        id:1,
        text:"Settings",
        link:"#",
        img:SettingsIcon

      },
      {
        id:2,
        text:"Backups",
        link:"#",
        img:BackupIcon
      },
    ]
  },
  {
    id:5,
    title:"ANALYTICS",
    links:[
      {
        id:1,
        text:"Charts",
        link:"#",
        img:BarChartIcon

      },
      {
        id:2,
        text:"Logs",
        link:"#",
        img:ListAltIcon
      },
    ]
  },
]
const SideBar = () => {
  return (
    <header>
      <nav className='flex flex-col gap-6 pl-5 flex-grow'>
        {NavList.map((div)=>(
        <div key={div.id} className='flex flex-col gap-2'>
          <a href='#' className='text-gray-600 cursor-pointer'>{div.title}</a>
          {div.links.map(link=>(
          <div key={link.id} className='hover:bg-cyan-200 py-3 rounded flex gap-3 p-1'>
            <link.img className='icons'/>
            <a href={link.link} className='text-white cursor-pointer'>{link.text}</a>
          </div>
            
          ))}
        </div>

        ))}
        <p className='text-xl text-white'>username</p>
      </nav>
    </header>
  )
}

export default SideBar