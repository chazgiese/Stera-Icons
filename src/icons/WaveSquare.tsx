import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { WaveSquareRegular } from './WaveSquareRegular.js';
import { WaveSquareRegularDuotone } from './WaveSquareRegularDuotone.js';
import { WaveSquareBold } from './WaveSquareBold.js';
import { WaveSquareBoldDuotone } from './WaveSquareBoldDuotone.js';
import { WaveSquareFill } from './WaveSquareFill.js';
import { WaveSquareFillDuotone } from './WaveSquareFillDuotone.js';

export interface WaveSquareProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * WaveSquare - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { WaveSquareRegular } from 'stera-icons/icons/WaveSquareRegular';
 */
const WaveSquare = memo(forwardRef<SVGSVGElement, WaveSquareProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <WaveSquareBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <WaveSquareBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <WaveSquareFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <WaveSquareFill ref={ref} {...rest} />;
  if (duotone) return <WaveSquareRegularDuotone ref={ref} {...rest} />;
  return <WaveSquareRegular ref={ref} {...rest} />;
}));

WaveSquare.displayName = 'WaveSquare';

// Triple export pattern (lucide-react style)
export { WaveSquare, WaveSquare as WaveSquareIcon, WaveSquare as SiWaveSquare };
export default WaveSquare;
