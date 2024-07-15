import { TriangleAlert } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "./alert"

type TAlertBoxProps = {
  title: string;
  message: string;
  variant: "destructive" | "success" | "info";
}

export const AlertBox = ({ title, message, variant }: TAlertBoxProps ) => {
   return (
    <Alert variant={variant}>
    {
        variant === "destructive" && <TriangleAlert size={18} />
    }
    <AlertTitle>{title}</AlertTitle>
    <AlertDescription>
        {message}
    </AlertDescription>
  </Alert>
   )
}