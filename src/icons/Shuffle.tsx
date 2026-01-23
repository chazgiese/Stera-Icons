import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ShuffleRegular } from './ShuffleRegular.js';
import { ShuffleRegularDuotone } from './ShuffleRegularDuotone.js';
import { ShuffleBold } from './ShuffleBold.js';
import { ShuffleBoldDuotone } from './ShuffleBoldDuotone.js';
import { ShuffleFill } from './ShuffleFill.js';
import { ShuffleFillDuotone } from './ShuffleFillDuotone.js';

export interface ShuffleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Shuffle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ShuffleRegular } from 'stera-icons/icons/ShuffleRegular';
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

// Triple export pattern (lucide-react style)
export { Shuffle, Shuffle as ShuffleIcon, Shuffle as SiShuffle };
export default Shuffle;
