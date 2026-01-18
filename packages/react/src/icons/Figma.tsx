import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FigmaRegular } from './FigmaRegular';
import { FigmaRegularDuotone } from './FigmaRegularDuotone';
import { FigmaBold } from './FigmaBold';
import { FigmaBoldDuotone } from './FigmaBoldDuotone';
import { FigmaFill } from './FigmaFill';
import { FigmaFillDuotone } from './FigmaFillDuotone';

export interface FigmaProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Figma with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { FigmaRegular } from 'stera-icons/FigmaRegular';
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

export { Figma };
