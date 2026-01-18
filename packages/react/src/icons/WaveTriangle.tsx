import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { WaveTriangleRegular } from './WaveTriangleRegular';
import { WaveTriangleRegularDuotone } from './WaveTriangleRegularDuotone';
import { WaveTriangleBold } from './WaveTriangleBold';
import { WaveTriangleBoldDuotone } from './WaveTriangleBoldDuotone';
import { WaveTriangleFill } from './WaveTriangleFill';
import { WaveTriangleFillDuotone } from './WaveTriangleFillDuotone';

export interface WaveTriangleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * WaveTriangle with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { WaveTriangleRegular } from 'stera-icons/WaveTriangleRegular';
 */
const WaveTriangle = memo(forwardRef<SVGSVGElement, WaveTriangleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <WaveTriangleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <WaveTriangleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <WaveTriangleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <WaveTriangleFill ref={ref} {...rest} />;
  if (duotone) return <WaveTriangleRegularDuotone ref={ref} {...rest} />;
  return <WaveTriangleRegular ref={ref} {...rest} />;
}));

WaveTriangle.displayName = 'WaveTriangle';

export { WaveTriangle };
