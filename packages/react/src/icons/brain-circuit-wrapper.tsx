import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { BrainCircuitIcon as RegularBrainCircuitIcon } from './brain-circuit';
import { BrainCircuitIconBold } from './brain-circuit-bold';
import { BrainCircuitIconFilled } from './brain-circuit-filled';
import { BrainCircuitIconFilltone } from './brain-circuit-filltone';
import { BrainCircuitIconLinetone } from './brain-circuit-linetone';

export interface BrainCircuitIconProps extends IconProps {
  variant?: IconVariant;
}

const BrainCircuitIcon = memo(forwardRef<SVGSVGElement, BrainCircuitIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BrainCircuitIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BrainCircuitIconBold ref={ref} {...props} />;
    case 'filltone':
      return <BrainCircuitIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <BrainCircuitIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularBrainCircuitIcon ref={ref} {...props} />;
  }
}));

BrainCircuitIcon.displayName = 'BrainCircuitIcon';

export { BrainCircuitIcon };
