import { Clock, Download, Upload } from "iconoir-react";
import Balance from "../balance";
import Button from "../ui/button";

const actions = [
    {
      href: "/wallet/send",
      icon: <Upload fontSize={13}  className="text-white"/>,
      label: "Send",
    },
    {
      href: "/wallet/receive",
      icon: <Download fontSize={13} className="text-white" />,
      label: "Receive",
    },
    {
      href: "/wallet/history",
      icon: <Clock fontSize={13} className="text-white" />,
      label: "History",
    },
  ];

export default function Hero() {
  return (
    <>
        <Balance />
        <div className="flex gap-x-4 w-full mt-4">
          {actions.map((action, index) => (
            <Button
              key={index}
              href={action.href}
              variant="action"
              size="action"
            >
              {action.icon}
              {action.label}
            </Button>
          ))}
        </div>

    </>
  )
}
