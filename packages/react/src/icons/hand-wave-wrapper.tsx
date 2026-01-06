import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { HandWaveIcon as RegularHandWaveIcon } from './hand-wave';
import { HandWaveIconDuotone as HandWaveIconDuotone } from './hand-wave-duotone';
import { HandWaveIconBold as HandWaveIconBold } from './hand-wave-bold';
import { HandWaveIconBoldDuotone as HandWaveIconBoldDuotone } from './hand-wave-bold-duotone';
import { HandWaveIconFill as HandWaveIconFill } from './hand-wave-fill';
import { HandWaveIconFillDuotone as HandWaveIconFillDuotone } from './hand-wave-fill-duotone';

export interface HandWaveIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const HandWaveIcon = memo(forwardRef<SVGSVGElement, HandWaveIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <HandWaveIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <HandWaveIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <HandWaveIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <HandWaveIconFill ref={ref} {...props} />;
  if (duotone) return <HandWaveIconDuotone ref={ref} {...props} />;
  return <RegularHandWaveIcon ref={ref} {...props} />;
}));

HandWaveIcon.displayName = 'HandWaveIcon';

export { HandWaveIcon };
