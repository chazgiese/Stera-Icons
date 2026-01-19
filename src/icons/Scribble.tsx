import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ScribbleRegular } from './ScribbleRegular';
import { ScribbleRegularDuotone } from './ScribbleRegularDuotone';
import { ScribbleBold } from './ScribbleBold';
import { ScribbleBoldDuotone } from './ScribbleBoldDuotone';
import { ScribbleFill } from './ScribbleFill';
import { ScribbleFillDuotone } from './ScribbleFillDuotone';

export interface ScribbleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Scribble - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ScribbleRegular } from 'stera-icons/icons/ScribbleRegular';
 */
const Scribble = memo(forwardRef<SVGSVGElement, ScribbleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ScribbleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ScribbleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ScribbleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ScribbleFill ref={ref} {...rest} />;
  if (duotone) return <ScribbleRegularDuotone ref={ref} {...rest} />;
  return <ScribbleRegular ref={ref} {...rest} />;
}));

Scribble.displayName = 'Scribble';

// Triple export pattern (lucide-react style)
export { Scribble, Scribble as ScribbleIcon, Scribble as SiScribble };
