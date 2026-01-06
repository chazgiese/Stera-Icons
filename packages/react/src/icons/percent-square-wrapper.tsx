import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PercentSquareIcon as RegularPercentSquareIcon } from './percent-square';
import { PercentSquareIconDuotone as PercentSquareIconDuotone } from './percent-square-duotone';
import { PercentSquareIconBold as PercentSquareIconBold } from './percent-square-bold';
import { PercentSquareIconBoldDuotone as PercentSquareIconBoldDuotone } from './percent-square-bold-duotone';
import { PercentSquareIconFill as PercentSquareIconFill } from './percent-square-fill';
import { PercentSquareIconFillDuotone as PercentSquareIconFillDuotone } from './percent-square-fill-duotone';

export interface PercentSquareIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const PercentSquareIcon = memo(forwardRef<SVGSVGElement, PercentSquareIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <PercentSquareIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <PercentSquareIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <PercentSquareIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <PercentSquareIconFill ref={ref} {...props} />;
  if (duotone) return <PercentSquareIconDuotone ref={ref} {...props} />;
  return <RegularPercentSquareIcon ref={ref} {...props} />;
}));

PercentSquareIcon.displayName = 'PercentSquareIcon';

export { PercentSquareIcon };
