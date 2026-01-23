import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { BubbleRegular } from './BubbleRegular.js';
import { BubbleRegularDuotone } from './BubbleRegularDuotone.js';
import { BubbleBold } from './BubbleBold.js';
import { BubbleBoldDuotone } from './BubbleBoldDuotone.js';
import { BubbleFill } from './BubbleFill.js';
import { BubbleFillDuotone } from './BubbleFillDuotone.js';

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
