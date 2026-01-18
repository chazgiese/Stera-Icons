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
 * Scribble with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ScribbleRegular } from 'stera-icons/ScribbleRegular';
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

export { Scribble };
