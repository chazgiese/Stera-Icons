import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { FigmaRegular } from './FigmaRegular.js';
import { FigmaRegularDuotone } from './FigmaRegularDuotone.js';
import { FigmaBold } from './FigmaBold.js';
import { FigmaBoldDuotone } from './FigmaBoldDuotone.js';
import { FigmaFill } from './FigmaFill.js';
import { FigmaFillDuotone } from './FigmaFillDuotone.js';

export interface FigmaProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Figma - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { FigmaRegular } from 'stera-icons/icons/FigmaRegular';
 */
const Figma = memo(forwardRef<SVGSVGElement, FigmaProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <FigmaBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <FigmaBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <FigmaFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <FigmaFill ref={ref} {...rest} />;
  if (duotone) return <FigmaRegularDuotone ref={ref} {...rest} />;
  return <FigmaRegular ref={ref} {...rest} />;
}));

Figma.displayName = 'Figma';

// Triple export pattern (lucide-react style)
export { Figma, Figma as FigmaIcon, Figma as SiFigma };
export default Figma;
