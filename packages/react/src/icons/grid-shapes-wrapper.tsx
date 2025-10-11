import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { GridShapesIcon as GridShapesIconRegular } from './grid-shapes';
import { GridShapesIconBold } from './grid-shapes-bold';
import { GridShapesIconFilled } from './grid-shapes-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface GridShapesIconProps extends IconProps {
  variant?: IconVariant;
}

const GridShapesIcon = memo(forwardRef<SVGSVGElement, GridShapesIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <GridShapesIconFilled ref={ref} {...props} />;
    case 'bold':
      return <GridShapesIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <GridShapesIconRegular ref={ref} {...props} />;
  }
}));

GridShapesIcon.displayName = 'GridShapesIcon';

export { GridShapesIcon };
