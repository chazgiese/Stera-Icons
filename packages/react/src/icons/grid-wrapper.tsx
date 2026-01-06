import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { GridIcon as RegularGridIcon } from './grid';
import { GridIconDuotone as GridIconDuotone } from './grid-duotone';
import { GridIconBold as GridIconBold } from './grid-bold';
import { GridIconBoldDuotone as GridIconBoldDuotone } from './grid-bold-duotone';
import { GridIconFill as GridIconFill } from './grid-fill';
import { GridIconFillDuotone as GridIconFillDuotone } from './grid-fill-duotone';

export interface GridIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const GridIcon = memo(forwardRef<SVGSVGElement, GridIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <GridIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <GridIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <GridIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <GridIconFill ref={ref} {...props} />;
  if (duotone) return <GridIconDuotone ref={ref} {...props} />;
  return <RegularGridIcon ref={ref} {...props} />;
}));

GridIcon.displayName = 'GridIcon';

export { GridIcon };
