import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ShuffleRegular } from './ShuffleRegular';
import { ShuffleRegularDuotone } from './ShuffleRegularDuotone';
import { ShuffleBold } from './ShuffleBold';
import { ShuffleBoldDuotone } from './ShuffleBoldDuotone';
import { ShuffleFill } from './ShuffleFill';
import { ShuffleFillDuotone } from './ShuffleFillDuotone';

export interface ShuffleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Shuffle with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ShuffleRegular } from 'stera-icons/ShuffleRegular';
 */
const Shuffle = memo(forwardRef<SVGSVGElement, ShuffleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ShuffleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ShuffleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ShuffleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ShuffleFill ref={ref} {...rest} />;
  if (duotone) return <ShuffleRegularDuotone ref={ref} {...rest} />;
  return <ShuffleRegular ref={ref} {...rest} />;
}));

Shuffle.displayName = 'Shuffle';

export { Shuffle };
