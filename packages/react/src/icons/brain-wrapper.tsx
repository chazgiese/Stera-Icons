import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BrainIcon as RegularBrainIcon } from './brain';
import { BrainIconDuotone as BrainIconDuotone } from './brain-duotone';
import { BrainIconBold as BrainIconBold } from './brain-bold';
import { BrainIconBoldDuotone as BrainIconBoldDuotone } from './brain-bold-duotone';
import { BrainIconFill as BrainIconFill } from './brain-fill';
import { BrainIconFillDuotone as BrainIconFillDuotone } from './brain-fill-duotone';

export interface BrainIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const BrainIcon = memo(forwardRef<SVGSVGElement, BrainIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <BrainIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <BrainIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <BrainIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <BrainIconFill ref={ref} {...props} />;
  if (duotone) return <BrainIconDuotone ref={ref} {...props} />;
  return <RegularBrainIcon ref={ref} {...props} />;
}));

BrainIcon.displayName = 'BrainIcon';

export { BrainIcon };
