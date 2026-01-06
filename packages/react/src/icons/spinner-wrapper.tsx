import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SpinnerIcon as RegularSpinnerIcon } from './spinner';
import { SpinnerIconDuotone as SpinnerIconDuotone } from './spinner-duotone';
import { SpinnerIconBold as SpinnerIconBold } from './spinner-bold';
import { SpinnerIconBoldDuotone as SpinnerIconBoldDuotone } from './spinner-bold-duotone';
import { SpinnerIconFill as SpinnerIconFill } from './spinner-fill';
import { SpinnerIconFillDuotone as SpinnerIconFillDuotone } from './spinner-fill-duotone';

export interface SpinnerIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const SpinnerIcon = memo(forwardRef<SVGSVGElement, SpinnerIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <SpinnerIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <SpinnerIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <SpinnerIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <SpinnerIconFill ref={ref} {...props} />;
  if (duotone) return <SpinnerIconDuotone ref={ref} {...props} />;
  return <RegularSpinnerIcon ref={ref} {...props} />;
}));

SpinnerIcon.displayName = 'SpinnerIcon';

export { SpinnerIcon };
