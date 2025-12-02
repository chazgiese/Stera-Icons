import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { FigmaIcon as RegularFigmaIcon } from './figma';
import { FigmaIconBold } from './figma-bold';
import { FigmaIconFilled } from './figma-filled';
import { FigmaIconFilltone } from './figma-filltone';
import { FigmaIconLinetone } from './figma-linetone';

export interface FigmaIconProps extends IconProps {
  variant?: IconVariant;
}

const FigmaIcon = memo(forwardRef<SVGSVGElement, FigmaIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <FigmaIconFilled ref={ref} {...props} />;
    case 'bold':
      return <FigmaIconBold ref={ref} {...props} />;
    case 'filltone':
      return <FigmaIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <FigmaIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularFigmaIcon ref={ref} {...props} />;
  }
}));

FigmaIcon.displayName = 'FigmaIcon';

export { FigmaIcon };
