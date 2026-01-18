import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PoundSterlingCircleRegular } from './PoundSterlingCircleRegular';
import { PoundSterlingCircleRegularDuotone } from './PoundSterlingCircleRegularDuotone';
import { PoundSterlingCircleBold } from './PoundSterlingCircleBold';
import { PoundSterlingCircleBoldDuotone } from './PoundSterlingCircleBoldDuotone';
import { PoundSterlingCircleFill } from './PoundSterlingCircleFill';
import { PoundSterlingCircleFillDuotone } from './PoundSterlingCircleFillDuotone';

export interface PoundSterlingCircleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * PoundSterlingCircle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { PoundSterlingCircleRegular } from 'stera-icons/PoundSterlingCircleRegular';
 */
const PoundSterlingCircle = memo(forwardRef<SVGSVGElement, PoundSterlingCircleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <PoundSterlingCircleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <PoundSterlingCircleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <PoundSterlingCircleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <PoundSterlingCircleFill ref={ref} {...rest} />;
  if (duotone) return <PoundSterlingCircleRegularDuotone ref={ref} {...rest} />;
  return <PoundSterlingCircleRegular ref={ref} {...rest} />;
}));

PoundSterlingCircle.displayName = 'PoundSterlingCircle';

// Triple export pattern (lucide-react style)
export { PoundSterlingCircle, PoundSterlingCircle as PoundSterlingCircleIcon, PoundSterlingCircle as SiPoundSterlingCircle };
