import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TriangleRegular } from './TriangleRegular';
import { TriangleRegularDuotone } from './TriangleRegularDuotone';
import { TriangleBold } from './TriangleBold';
import { TriangleBoldDuotone } from './TriangleBoldDuotone';
import { TriangleFill } from './TriangleFill';
import { TriangleFillDuotone } from './TriangleFillDuotone';

export interface TriangleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Triangle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { TriangleRegular } from 'stera-icons/icons/TriangleRegular';
 */
const Triangle = memo(forwardRef<SVGSVGElement, TriangleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <TriangleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <TriangleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <TriangleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <TriangleFill ref={ref} {...rest} />;
  if (duotone) return <TriangleRegularDuotone ref={ref} {...rest} />;
  return <TriangleRegular ref={ref} {...rest} />;
}));

Triangle.displayName = 'Triangle';

// Triple export pattern (lucide-react style)
export { Triangle, Triangle as TriangleIcon, Triangle as SiTriangle };
