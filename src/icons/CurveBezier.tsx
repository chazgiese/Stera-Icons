import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CurveBezierRegular } from './CurveBezierRegular';
import { CurveBezierRegularDuotone } from './CurveBezierRegularDuotone';
import { CurveBezierBold } from './CurveBezierBold';
import { CurveBezierBoldDuotone } from './CurveBezierBoldDuotone';
import { CurveBezierFill } from './CurveBezierFill';
import { CurveBezierFillDuotone } from './CurveBezierFillDuotone';

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
