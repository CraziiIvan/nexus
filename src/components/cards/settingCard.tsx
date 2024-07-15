import { NavArrowRight } from 'iconoir-react'
import Link from 'next/link'

type TSettingCardProps = {
    title: string
    icon: JSX.Element
    description: string
    href: string 
}

export default function SettingCard({ title, icon, description, href }: TSettingCardProps) {
  return (
    <Link href={href} className="flex items-center text-neutral-500 justify-between w-full gap-x-2">
    <div className="flex gap-x-3">
      <div className=" min-w-10 h-10 mt-1 border border-neutral-800 aspect-square text-sm  rounded-full bg-neutral-900 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <div className='text-white'>{title}</div>
        <div className="text-sm font-light ">
          {description}
        </div>
      </div>
    </div>
        <NavArrowRight  fontSize={12} />
  </Link>
  )
}
