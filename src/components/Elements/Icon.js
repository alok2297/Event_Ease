import { Icon } from '@iconify/react';

export const Iconify = (props) => {
    // console.log(icon, "");
  return (
      <Icon icon={props.icon} height={props.height} width={props.width} color={props.color} style={props.style}/>
  )
}
