import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronLeftRegular } from './ChevronLeftRegular';
import { ChevronLeftRegularDuotone } from './ChevronLeftRegularDuotone';
import { ChevronLeftBold } from './ChevronLeftBold';
import { ChevronLeftBoldDuotone } from './ChevronLeftBoldDuotone';
import { ChevronLeftFill } from './ChevronLeftFill';
import { ChevronLeftFillDuotone } from './ChevronLeftFillDuotone';

export interface ChevronLeftProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronLeft with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronLeftRegular } from 'stera-icons/ChevronLeftRegular';
 */
const ChevronLeft = memo(forwardRef<SVGSVGElement, ChevronLeftProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronLeftBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChevronLeftBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChevronLeftFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChevronLeftFill ref={ref} {...rest} />;
  if (duotone) return <ChevronLeftRegularDuotone ref={ref} {...rest} />;
  return <ChevronLeftRegular ref={ref} {...rest} />;
}));

ChevronLeft.displayName = 'ChevronLeft';

export { ChevronLeft };
