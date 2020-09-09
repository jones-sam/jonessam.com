import React from "react"
import { Tooltip, Box } from "@chakra-ui/core"

interface IconProps {
  label: string
}

export const Icon: React.FC<IconProps> = ({ label, children }) => {
  return (
    <Tooltip aria-label={label} label={label} placement="right">
      <Box m={1}>{children}</Box>
    </Tooltip>
  )
}
