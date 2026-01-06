import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { VolleyballIcon as RegularVolleyballIcon } from './volleyball';
import { VolleyballIconDuotone as VolleyballIconDuotone } from './volleyball-duotone';
import { VolleyballIconBold as VolleyballIconBold } from './volleyball-bold';
import { VolleyballIconBoldDuotone as VolleyballIconBoldDuotone } from './volleyball-bold-duotone';
import { VolleyballIconFill as VolleyballIconFill } from './volleyball-fill';
import { VolleyballIconFillDuotone as VolleyballIconFillDuotone } from './volleyball-fill-duotone';

export interface VolleyballIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const VolleyballIcon = memo(forwardRef<SVGSVGElement, VolleyballIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <VolleyballIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <VolleyballIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <VolleyballIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <VolleyballIconFill ref={ref} {...props} />;
  if (duotone) return <VolleyballIconDuotone ref={ref} {...props} />;
  return <RegularVolleyballIcon ref={ref} {...props} />;
}));

VolleyballIcon.displayName = 'VolleyballIcon';

export { VolleyballIcon };
