import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { BlocksIcon as RegularBlocksIcon } from './blocks';
import { BlocksIconBold } from './blocks-bold';
import { BlocksIconFilled } from './blocks-filled';
import { BlocksIconFilltone } from './blocks-filltone';
import { BlocksIconLinetone } from './blocks-linetone';

export interface BlocksIconProps extends IconProps {
  variant?: IconVariant;
}

const BlocksIcon = memo(forwardRef<SVGSVGElement, BlocksIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BlocksIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BlocksIconBold ref={ref} {...props} />;
    case 'filltone':
      return <BlocksIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <BlocksIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularBlocksIcon ref={ref} {...props} />;
  }
}));

BlocksIcon.displayName = 'BlocksIcon';

export { BlocksIcon };
