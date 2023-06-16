import { Button, Tooltip } from "@mui/material"

export const TooltipButton = ({ title, onClick,text }) => {
    
   return (
        <Tooltip title={title} placement="bottom" >
            <Button color="inherit" onClick={onClick}>{text} </Button>
        </Tooltip>
    )
}