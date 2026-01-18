import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CubicGraphRegular } from './CubicGraphRegular';
import { CubicGraphRegularDuotone } from './CubicGraphRegularDuotone';
import { CubicGraphBold } from './CubicGraphBold';
import { CubicGraphBoldDuotone } from './CubicGraphBoldDuotone';
import { CubicGraphFill } from './CubicGraphFill';
import { CubicGraphFillDuotone } from './CubicGraphFillDuotone';

export interface CubicGraphProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CubicGraph - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CubicGraphRegular } from 'stera-icons/CubicGraphRegular';
 */
const CubicGraph = memo(forwardRef<SVGSVGElement, CubicGraphProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CubicGraphBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CubicGraphBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CubicGraphFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CubicGraphFill ref={ref} {...rest} />;
  if (duotone) return <CubicGraphRegularDuotone ref={ref} {...rest} />;
  return <CubicGraphRegular ref={ref} {...rest} />;
}));

CubicGraph.displayName = 'CubicGraph';

// Triple export pattern (lucide-react style)
export { CubicGraph, CubicGraph as CubicGraphIcon, CubicGraph as SiCubicGraph };
