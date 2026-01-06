import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PercentCircleIcon as RegularPercentCircleIcon } from './percent-circle';
import { PercentCircleIconDuotone as PercentCircleIconDuotone } from './percent-circle-duotone';
import { PercentCircleIconBold as PercentCircleIconBold } from './percent-circle-bold';
import { PercentCircleIconBoldDuotone as PercentCircleIconBoldDuotone } from './percent-circle-bold-duotone';
import { PercentCircleIconFill as PercentCircleIconFill } from './percent-circle-fill';
import { PercentCircleIconFillDuotone as PercentCircleIconFillDuotone } from './percent-circle-fill-duotone';

export interface PercentCircleIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const PercentCircleIcon = memo(forwardRef<SVGSVGElement, PercentCircleIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <PercentCircleIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <PercentCircleIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <PercentCircleIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <PercentCircleIconFill ref={ref} {...props} />;
  if (duotone) return <PercentCircleIconDuotone ref={ref} {...props} />;
  return <RegularPercentCircleIcon ref={ref} {...props} />;
}));

PercentCircleIcon.displayName = 'PercentCircleIcon';

export { PercentCircleIcon };
