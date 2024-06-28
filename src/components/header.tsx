import { ScanQrCode } from "iconoir-react"

export default function Header() {
  return (
    <header className=" grid grid-cols-3 h-10 items-center">
        <div></div>
        <div></div>
        <div className=" flex justify-end">
            <button className=" text-neutral-500"><ScanQrCode/></button>
        </div>
    </header>
  )
}
