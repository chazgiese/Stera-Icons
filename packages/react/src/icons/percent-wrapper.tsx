import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PercentIcon as RegularPercentIcon } from './percent';
import { PercentIconDuotone as PercentIconDuotone } from './percent-duotone';
import { PercentIconBold as PercentIconBold } from './percent-bold';
import { PercentIconBoldDuotone as PercentIconBoldDuotone } from './percent-bold-duotone';
import { PercentIconFill as PercentIconFill } from './percent-fill';
import { PercentIconFillDuotone as PercentIconFillDuotone } from './percent-fill-duotone';

export interface PercentIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const PercentIcon = memo(forwardRef<SVGSVGElement, PercentIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <PercentIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <PercentIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <PercentIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <PercentIconFill ref={ref} {...props} />;
  if (duotone) return <PercentIconDuotone ref={ref} {...props} />;
  return <RegularPercentIcon ref={ref} {...props} />;
}));

PercentIcon.displayName = 'PercentIcon';

export { PercentIcon };
