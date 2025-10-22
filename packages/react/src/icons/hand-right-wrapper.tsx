import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { HandRightIcon as HandRightIconRegular } from './hand-right';
import { HandRightIconBold } from './hand-right-bold';
import { HandRightIconFilled } from './hand-right-filled';
import { HandRightIconFilltone } from './hand-right-filltone';
import { HandRightIconLinetone } from './hand-right-linetone';

export interface HandRightIconProps extends IconProps {
  variant?: IconVariant;
}

const HandRightIcon = memo(forwardRef<SVGSVGElement, HandRightIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <HandRightIconFilled ref={ref} {...props} />;
    case 'bold':
      return <HandRightIconBold ref={ref} {...props} />;
    case 'filltone':
      return <HandRightIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <HandRightIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <HandRightIconRegular ref={ref} {...props} />;
  }
}));

HandRightIcon.displayName = 'HandRightIcon';

export { HandRightIcon };
