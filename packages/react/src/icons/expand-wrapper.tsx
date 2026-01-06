import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ExpandIcon as RegularExpandIcon } from './expand';
import { ExpandIconDuotone as ExpandIconDuotone } from './expand-duotone';
import { ExpandIconBold as ExpandIconBold } from './expand-bold';
import { ExpandIconBoldDuotone as ExpandIconBoldDuotone } from './expand-bold-duotone';
import { ExpandIconFill as ExpandIconFill } from './expand-fill';
import { ExpandIconFillDuotone as ExpandIconFillDuotone } from './expand-fill-duotone';

export interface ExpandIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ExpandIcon = memo(forwardRef<SVGSVGElement, ExpandIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ExpandIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ExpandIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ExpandIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ExpandIconFill ref={ref} {...props} />;
  if (duotone) return <ExpandIconDuotone ref={ref} {...props} />;
  return <RegularExpandIcon ref={ref} {...props} />;
}));

ExpandIcon.displayName = 'ExpandIcon';

export { ExpandIcon };
