import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { GridIcon as GridIconRegular } from './grid';
import { GridIconBold } from './grid-bold';
import { GridIconFilled } from './grid-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface GridIconProps extends IconProps {
  variant?: IconVariant;
}

const GridIcon = memo(forwardRef<SVGSVGElement, GridIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <GridIconFilled ref={ref} {...props} />;
    case 'bold':
      return <GridIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <GridIconRegular ref={ref} {...props} />;
  }
}));

GridIcon.displayName = 'GridIcon';

export { GridIcon };
