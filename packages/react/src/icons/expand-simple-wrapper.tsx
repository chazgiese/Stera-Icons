import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ExpandSimpleIcon as RegularExpandSimpleIcon } from './expand-simple';
import { ExpandSimpleIconDuotone as ExpandSimpleIconDuotone } from './expand-simple-duotone';
import { ExpandSimpleIconBold as ExpandSimpleIconBold } from './expand-simple-bold';
import { ExpandSimpleIconBoldDuotone as ExpandSimpleIconBoldDuotone } from './expand-simple-bold-duotone';
import { ExpandSimpleIconFill as ExpandSimpleIconFill } from './expand-simple-fill';
import { ExpandSimpleIconFillDuotone as ExpandSimpleIconFillDuotone } from './expand-simple-fill-duotone';

export interface ExpandSimpleIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ExpandSimpleIcon = memo(forwardRef<SVGSVGElement, ExpandSimpleIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ExpandSimpleIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ExpandSimpleIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ExpandSimpleIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ExpandSimpleIconFill ref={ref} {...props} />;
  if (duotone) return <ExpandSimpleIconDuotone ref={ref} {...props} />;
  return <RegularExpandSimpleIcon ref={ref} {...props} />;
}));

ExpandSimpleIcon.displayName = 'ExpandSimpleIcon';

export { ExpandSimpleIcon };
