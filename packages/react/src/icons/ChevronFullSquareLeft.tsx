import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronFullSquareLeftRegular } from './ChevronFullSquareLeftRegular';
import { ChevronFullSquareLeftRegularDuotone } from './ChevronFullSquareLeftRegularDuotone';
import { ChevronFullSquareLeftBold } from './ChevronFullSquareLeftBold';
import { ChevronFullSquareLeftBoldDuotone } from './ChevronFullSquareLeftBoldDuotone';
import { ChevronFullSquareLeftFill } from './ChevronFullSquareLeftFill';
import { ChevronFullSquareLeftFillDuotone } from './ChevronFullSquareLeftFillDuotone';

export interface ChevronFullSquareLeftProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronFullSquareLeft with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronFullSquareLeftRegular } from 'stera-icons/ChevronFullSquareLeftRegular';
 */
const ChevronFullSquareLeft = memo(forwardRef<SVGSVGElement, ChevronFullSquareLeftProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronFullSquareLeftBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChevronFullSquareLeftBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChevronFullSquareLeftFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChevronFullSquareLeftFill ref={ref} {...rest} />;
  if (duotone) return <ChevronFullSquareLeftRegularDuotone ref={ref} {...rest} />;
  return <ChevronFullSquareLeftRegular ref={ref} {...rest} />;
}));

ChevronFullSquareLeft.displayName = 'ChevronFullSquareLeft';

export { ChevronFullSquareLeft };
