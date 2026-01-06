import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ExpandSimpleAltIcon as RegularExpandSimpleAltIcon } from './expand-simple-alt';
import { ExpandSimpleAltIconDuotone as ExpandSimpleAltIconDuotone } from './expand-simple-alt-duotone';
import { ExpandSimpleAltIconBold as ExpandSimpleAltIconBold } from './expand-simple-alt-bold';
import { ExpandSimpleAltIconBoldDuotone as ExpandSimpleAltIconBoldDuotone } from './expand-simple-alt-bold-duotone';
import { ExpandSimpleAltIconFill as ExpandSimpleAltIconFill } from './expand-simple-alt-fill';
import { ExpandSimpleAltIconFillDuotone as ExpandSimpleAltIconFillDuotone } from './expand-simple-alt-fill-duotone';

export interface ExpandSimpleAltIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ExpandSimpleAltIcon = memo(forwardRef<SVGSVGElement, ExpandSimpleAltIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ExpandSimpleAltIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ExpandSimpleAltIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ExpandSimpleAltIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ExpandSimpleAltIconFill ref={ref} {...props} />;
  if (duotone) return <ExpandSimpleAltIconDuotone ref={ref} {...props} />;
  return <RegularExpandSimpleAltIcon ref={ref} {...props} />;
}));

ExpandSimpleAltIcon.displayName = 'ExpandSimpleAltIcon';

export { ExpandSimpleAltIcon };
