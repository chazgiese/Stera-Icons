import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CollapseIcon as RegularCollapseIcon } from './collapse';
import { CollapseIconDuotone as CollapseIconDuotone } from './collapse-duotone';
import { CollapseIconBold as CollapseIconBold } from './collapse-bold';
import { CollapseIconBoldDuotone as CollapseIconBoldDuotone } from './collapse-bold-duotone';
import { CollapseIconFill as CollapseIconFill } from './collapse-fill';
import { CollapseIconFillDuotone as CollapseIconFillDuotone } from './collapse-fill-duotone';

export interface CollapseIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CollapseIcon = memo(forwardRef<SVGSVGElement, CollapseIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CollapseIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CollapseIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CollapseIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CollapseIconFill ref={ref} {...props} />;
  if (duotone) return <CollapseIconDuotone ref={ref} {...props} />;
  return <RegularCollapseIcon ref={ref} {...props} />;
}));

CollapseIcon.displayName = 'CollapseIcon';

export { CollapseIcon };
