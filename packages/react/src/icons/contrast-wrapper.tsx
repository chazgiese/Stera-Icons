import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ContrastIcon as ContrastIconRegular } from './contrast';
import { ContrastIconBold } from './contrast-bold';
import { ContrastIconFilled } from './contrast-filled';
import { ContrastIconFilltone } from './contrast-filltone';
import { ContrastIconLinetone } from './contrast-linetone';

export interface ContrastIconProps extends IconProps {
  variant?: IconVariant;
}

const ContrastIcon = memo(forwardRef<SVGSVGElement, ContrastIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ContrastIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ContrastIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ContrastIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ContrastIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <ContrastIconRegular ref={ref} {...props} />;
  }
}));

ContrastIcon.displayName = 'ContrastIcon';

export { ContrastIcon };
