import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { CurveBezierRegular } from './CurveBezierRegular.js';
import { CurveBezierRegularDuotone } from './CurveBezierRegularDuotone.js';
import { CurveBezierBold } from './CurveBezierBold.js';
import { CurveBezierBoldDuotone } from './CurveBezierBoldDuotone.js';
import { CurveBezierFill } from './CurveBezierFill.js';
import { CurveBezierFillDuotone } from './CurveBezierFillDuotone.js';

export interface CurveBezierProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CurveBezier - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CurveBezierRegular } from 'stera-icons/icons/CurveBezierRegular';
 */
const CurveBezier = memo(forwardRef<SVGSVGElement, CurveBezierProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CurveBezierBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CurveBezierBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CurveBezierFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CurveBezierFill ref={ref} {...rest} />;
  if (duotone) return <CurveBezierRegularDuotone ref={ref} {...rest} />;
  return <CurveBezierRegular ref={ref} {...rest} />;
}));

CurveBezier.displayName = 'CurveBezier';

// Triple export pattern (lucide-react style)
export { CurveBezier, CurveBezier as CurveBezierIcon, CurveBezier as SiCurveBezier };
export default CurveBezier;
