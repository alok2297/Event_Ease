import { Icon } from '@iconify/react';

export const Iconify = (props) => {
  return (
      <Icon icon={props.icon} height={props.height} width={props.width} color={props.color} style={props.style}/>
  )
}
