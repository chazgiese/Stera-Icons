import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CanLabelIcon as RegularCanLabelIcon } from './can-label';
import { CanLabelIconDuotone as CanLabelIconDuotone } from './can-label-duotone';
import { CanLabelIconBold as CanLabelIconBold } from './can-label-bold';
import { CanLabelIconBoldDuotone as CanLabelIconBoldDuotone } from './can-label-bold-duotone';
import { CanLabelIconFill as CanLabelIconFill } from './can-label-fill';
import { CanLabelIconFillDuotone as CanLabelIconFillDuotone } from './can-label-fill-duotone';

export interface CanLabelIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CanLabelIcon = memo(forwardRef<SVGSVGElement, CanLabelIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CanLabelIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CanLabelIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CanLabelIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CanLabelIconFill ref={ref} {...props} />;
  if (duotone) return <CanLabelIconDuotone ref={ref} {...props} />;
  return <RegularCanLabelIcon ref={ref} {...props} />;
}));

CanLabelIcon.displayName = 'CanLabelIcon';

export { CanLabelIcon };
