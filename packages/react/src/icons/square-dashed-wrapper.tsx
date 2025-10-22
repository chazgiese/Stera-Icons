import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { SquareDashedIcon as SquareDashedIconRegular } from './square-dashed';
import { SquareDashedIconBold } from './square-dashed-bold';
import { SquareDashedIconFilled } from './square-dashed-filled';
import { SquareDashedIconFilltone } from './square-dashed-filltone';
import { SquareDashedIconLinetone } from './square-dashed-linetone';

export interface SquareDashedIconProps extends IconProps {
  variant?: IconVariant;
}

const SquareDashedIcon = memo(forwardRef<SVGSVGElement, SquareDashedIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <SquareDashedIconFilled ref={ref} {...props} />;
    case 'bold':
      return <SquareDashedIconBold ref={ref} {...props} />;
    case 'filltone':
      return <SquareDashedIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <SquareDashedIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <SquareDashedIconRegular ref={ref} {...props} />;
  }
}));

SquareDashedIcon.displayName = 'SquareDashedIcon';

export { SquareDashedIcon };
