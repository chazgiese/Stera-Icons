import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { WaveSineRegular } from './WaveSineRegular';
import { WaveSineRegularDuotone } from './WaveSineRegularDuotone';
import { WaveSineBold } from './WaveSineBold';
import { WaveSineBoldDuotone } from './WaveSineBoldDuotone';
import { WaveSineFill } from './WaveSineFill';
import { WaveSineFillDuotone } from './WaveSineFillDuotone';

export interface WaveSineProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * WaveSine - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { WaveSineRegular } from 'stera-icons/WaveSineRegular';
 */
const WaveSine = memo(forwardRef<SVGSVGElement, WaveSineProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <WaveSineBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <WaveSineBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <WaveSineFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <WaveSineFill ref={ref} {...rest} />;
  if (duotone) return <WaveSineRegularDuotone ref={ref} {...rest} />;
  return <WaveSineRegular ref={ref} {...rest} />;
}));

WaveSine.displayName = 'WaveSine';

// Triple export pattern (lucide-react style)
export { WaveSine, WaveSine as WaveSineIcon, WaveSine as SiWaveSine };
