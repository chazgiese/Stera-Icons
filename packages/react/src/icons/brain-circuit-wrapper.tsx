import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BrainCircuitIcon as RegularBrainCircuitIcon } from './brain-circuit';
import { BrainCircuitIconDuotone as BrainCircuitIconDuotone } from './brain-circuit-duotone';
import { BrainCircuitIconBold as BrainCircuitIconBold } from './brain-circuit-bold';
import { BrainCircuitIconBoldDuotone as BrainCircuitIconBoldDuotone } from './brain-circuit-bold-duotone';
import { BrainCircuitIconFill as BrainCircuitIconFill } from './brain-circuit-fill';
import { BrainCircuitIconFillDuotone as BrainCircuitIconFillDuotone } from './brain-circuit-fill-duotone';

export interface BrainCircuitIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const BrainCircuitIcon = memo(forwardRef<SVGSVGElement, BrainCircuitIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <BrainCircuitIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <BrainCircuitIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <BrainCircuitIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <BrainCircuitIconFill ref={ref} {...props} />;
  if (duotone) return <BrainCircuitIconDuotone ref={ref} {...props} />;
  return <RegularBrainCircuitIcon ref={ref} {...props} />;
}));

BrainCircuitIcon.displayName = 'BrainCircuitIcon';

export { BrainCircuitIcon };
