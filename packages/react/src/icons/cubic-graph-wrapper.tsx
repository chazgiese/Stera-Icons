import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CubicGraphIcon as RegularCubicGraphIcon } from './cubic-graph';
import { CubicGraphIconDuotone as CubicGraphIconDuotone } from './cubic-graph-duotone';
import { CubicGraphIconBold as CubicGraphIconBold } from './cubic-graph-bold';
import { CubicGraphIconBoldDuotone as CubicGraphIconBoldDuotone } from './cubic-graph-bold-duotone';
import { CubicGraphIconFill as CubicGraphIconFill } from './cubic-graph-fill';
import { CubicGraphIconFillDuotone as CubicGraphIconFillDuotone } from './cubic-graph-fill-duotone';

export interface CubicGraphIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CubicGraphIcon = memo(forwardRef<SVGSVGElement, CubicGraphIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CubicGraphIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CubicGraphIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CubicGraphIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CubicGraphIconFill ref={ref} {...props} />;
  if (duotone) return <CubicGraphIconDuotone ref={ref} {...props} />;
  return <RegularCubicGraphIcon ref={ref} {...props} />;
}));

CubicGraphIcon.displayName = 'CubicGraphIcon';

export { CubicGraphIcon };
