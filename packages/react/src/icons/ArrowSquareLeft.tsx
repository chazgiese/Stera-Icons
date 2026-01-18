import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowSquareLeftRegular } from './ArrowSquareLeftRegular';
import { ArrowSquareLeftRegularDuotone } from './ArrowSquareLeftRegularDuotone';
import { ArrowSquareLeftBold } from './ArrowSquareLeftBold';
import { ArrowSquareLeftBoldDuotone } from './ArrowSquareLeftBoldDuotone';
import { ArrowSquareLeftFill } from './ArrowSquareLeftFill';
import { ArrowSquareLeftFillDuotone } from './ArrowSquareLeftFillDuotone';

export interface ArrowSquareLeftProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowSquareLeft - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowSquareLeftRegular } from 'stera-icons/ArrowSquareLeftRegular';
 */
const ArrowSquareLeft = memo(forwardRef<SVGSVGElement, ArrowSquareLeftProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowSquareLeftBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowSquareLeftBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowSquareLeftFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowSquareLeftFill ref={ref} {...rest} />;
  if (duotone) return <ArrowSquareLeftRegularDuotone ref={ref} {...rest} />;
  return <ArrowSquareLeftRegular ref={ref} {...rest} />;
}));

ArrowSquareLeft.displayName = 'ArrowSquareLeft';

// Triple export pattern (lucide-react style)
export { ArrowSquareLeft, ArrowSquareLeft as ArrowSquareLeftIcon, ArrowSquareLeft as SiArrowSquareLeft };
