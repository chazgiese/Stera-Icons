import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SpiralIcon as RegularSpiralIcon } from './spiral';
import { SpiralIconDuotone as SpiralIconDuotone } from './spiral-duotone';
import { SpiralIconBold as SpiralIconBold } from './spiral-bold';
import { SpiralIconBoldDuotone as SpiralIconBoldDuotone } from './spiral-bold-duotone';
import { SpiralIconFill as SpiralIconFill } from './spiral-fill';
import { SpiralIconFillDuotone as SpiralIconFillDuotone } from './spiral-fill-duotone';

export interface SpiralIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const SpiralIcon = memo(forwardRef<SVGSVGElement, SpiralIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <SpiralIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <SpiralIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <SpiralIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <SpiralIconFill ref={ref} {...props} />;
  if (duotone) return <SpiralIconDuotone ref={ref} {...props} />;
  return <RegularSpiralIcon ref={ref} {...props} />;
}));

SpiralIcon.displayName = 'SpiralIcon';

export { SpiralIcon };
