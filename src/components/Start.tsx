import { theme } from "@/styles/stitches.config";
import { Star as StarIcon } from "@phosphor-icons/react";

interface Props {
  color: string | false
}

export function Star({color}: Props) {
  const { colors } = theme;

  if(!color) 
    return <StarIcon 
      size={16} 
      weight="bold"
      color={colors.purple100.value} 
    />

  return <StarIcon 
      size={16} 
      weight="fill" 
      color={color}
    />
}