import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CanIcon as RegularCanIcon } from './can';
import { CanIconDuotone as CanIconDuotone } from './can-duotone';
import { CanIconBold as CanIconBold } from './can-bold';
import { CanIconBoldDuotone as CanIconBoldDuotone } from './can-bold-duotone';
import { CanIconFill as CanIconFill } from './can-fill';
import { CanIconFillDuotone as CanIconFillDuotone } from './can-fill-duotone';

export interface CanIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CanIcon = memo(forwardRef<SVGSVGElement, CanIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CanIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CanIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CanIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CanIconFill ref={ref} {...props} />;
  if (duotone) return <CanIconDuotone ref={ref} {...props} />;
  return <RegularCanIcon ref={ref} {...props} />;
}));

CanIcon.displayName = 'CanIcon';

export { CanIcon };
