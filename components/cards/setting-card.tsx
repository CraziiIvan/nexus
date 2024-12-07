import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

type TSettingCardProps = {
    title: string
    icon: JSX.Element
    description: string
    href: string 
}

export default function SettingCard({ title, icon, description, href }: TSettingCardProps) {
  return (
    <Link href={href} className="flex items-center justify-between w-full gap-x-2">
    <div className="flex gap-x-3">
      <div className="text-gray11 min-w-10 h-10 mt-1 border border-gray4 aspect-square text-sm  rounded-full bg-gray1 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <div>{title}</div>
        <div className="text-sm text-gray11">
          {description}
        </div>
      </div>
    </div>
        <ChevronRight  size={14} />
  </Link>
  )
}
