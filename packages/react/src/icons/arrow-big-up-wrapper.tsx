import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ArrowBigUpIcon as ArrowBigUpIconRegular } from './arrow-big-up';
import { ArrowBigUpIconBold } from './arrow-big-up-bold';
import { ArrowBigUpIconFilled } from './arrow-big-up-filled';
import { ArrowBigUpIconFilltone } from './arrow-big-up-filltone';
import { ArrowBigUpIconLinetone } from './arrow-big-up-linetone';

export interface ArrowBigUpIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowBigUpIcon = memo(forwardRef<SVGSVGElement, ArrowBigUpIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowBigUpIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowBigUpIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ArrowBigUpIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ArrowBigUpIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowBigUpIconRegular ref={ref} {...props} />;
  }
}));

ArrowBigUpIcon.displayName = 'ArrowBigUpIcon';

export { ArrowBigUpIcon };
