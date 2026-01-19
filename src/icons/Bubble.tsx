import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BubbleRegular } from './BubbleRegular';
import { BubbleRegularDuotone } from './BubbleRegularDuotone';
import { BubbleBold } from './BubbleBold';
import { BubbleBoldDuotone } from './BubbleBoldDuotone';
import { BubbleFill } from './BubbleFill';
import { BubbleFillDuotone } from './BubbleFillDuotone';

export interface BubbleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Bubble - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { BubbleRegular } from 'stera-icons/icons/BubbleRegular';
 */
const Bubble = memo(forwardRef<SVGSVGElement, BubbleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BubbleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BubbleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BubbleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BubbleFill ref={ref} {...rest} />;
  if (duotone) return <BubbleRegularDuotone ref={ref} {...rest} />;
  return <BubbleRegular ref={ref} {...rest} />;
}));

Bubble.displayName = 'Bubble';

// Triple export pattern (lucide-react style)
export { Bubble, Bubble as BubbleIcon, Bubble as SiBubble };
export default Bubble;
