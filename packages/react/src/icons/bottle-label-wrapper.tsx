import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BottleLabelIcon as RegularBottleLabelIcon } from './bottle-label';
import { BottleLabelIconDuotone as BottleLabelIconDuotone } from './bottle-label-duotone';
import { BottleLabelIconBold as BottleLabelIconBold } from './bottle-label-bold';
import { BottleLabelIconBoldDuotone as BottleLabelIconBoldDuotone } from './bottle-label-bold-duotone';
import { BottleLabelIconFill as BottleLabelIconFill } from './bottle-label-fill';
import { BottleLabelIconFillDuotone as BottleLabelIconFillDuotone } from './bottle-label-fill-duotone';

export interface BottleLabelIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const BottleLabelIcon = memo(forwardRef<SVGSVGElement, BottleLabelIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <BottleLabelIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <BottleLabelIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <BottleLabelIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <BottleLabelIconFill ref={ref} {...props} />;
  if (duotone) return <BottleLabelIconDuotone ref={ref} {...props} />;
  return <RegularBottleLabelIcon ref={ref} {...props} />;
}));

BottleLabelIcon.displayName = 'BottleLabelIcon';

export { BottleLabelIcon };
