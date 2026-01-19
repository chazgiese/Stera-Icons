import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CircleDotsRegular } from './CircleDotsRegular';
import { CircleDotsRegularDuotone } from './CircleDotsRegularDuotone';
import { CircleDotsBold } from './CircleDotsBold';
import { CircleDotsBoldDuotone } from './CircleDotsBoldDuotone';
import { CircleDotsFill } from './CircleDotsFill';
import { CircleDotsFillDuotone } from './CircleDotsFillDuotone';

export interface CircleDotsProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CircleDots - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CircleDotsRegular } from 'stera-icons/icons/CircleDotsRegular';
 */
const CircleDots = memo(forwardRef<SVGSVGElement, CircleDotsProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CircleDotsBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CircleDotsBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CircleDotsFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CircleDotsFill ref={ref} {...rest} />;
  if (duotone) return <CircleDotsRegularDuotone ref={ref} {...rest} />;
  return <CircleDotsRegular ref={ref} {...rest} />;
}));

CircleDots.displayName = 'CircleDots';

// Triple export pattern (lucide-react style)
export { CircleDots, CircleDots as CircleDotsIcon, CircleDots as SiCircleDots };
