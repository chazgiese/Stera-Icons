import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlameIcon as RegularFlameIcon } from './flame';
import { FlameIconDuotone as FlameIconDuotone } from './flame-duotone';
import { FlameIconBold as FlameIconBold } from './flame-bold';
import { FlameIconBoldDuotone as FlameIconBoldDuotone } from './flame-bold-duotone';
import { FlameIconFill as FlameIconFill } from './flame-fill';
import { FlameIconFillDuotone as FlameIconFillDuotone } from './flame-fill-duotone';

export interface FlameIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const FlameIcon = memo(forwardRef<SVGSVGElement, FlameIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <FlameIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <FlameIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <FlameIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <FlameIconFill ref={ref} {...props} />;
  if (duotone) return <FlameIconDuotone ref={ref} {...props} />;
  return <RegularFlameIcon ref={ref} {...props} />;
}));

FlameIcon.displayName = 'FlameIcon';

export { FlameIcon };
