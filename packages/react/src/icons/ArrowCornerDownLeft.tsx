import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowCornerDownLeftRegular } from './ArrowCornerDownLeftRegular';
import { ArrowCornerDownLeftRegularDuotone } from './ArrowCornerDownLeftRegularDuotone';
import { ArrowCornerDownLeftBold } from './ArrowCornerDownLeftBold';
import { ArrowCornerDownLeftBoldDuotone } from './ArrowCornerDownLeftBoldDuotone';
import { ArrowCornerDownLeftFill } from './ArrowCornerDownLeftFill';
import { ArrowCornerDownLeftFillDuotone } from './ArrowCornerDownLeftFillDuotone';

export interface ArrowCornerDownLeftProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowCornerDownLeft with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowCornerDownLeftRegular } from 'stera-icons/ArrowCornerDownLeftRegular';
 */
const ArrowCornerDownLeft = memo(forwardRef<SVGSVGElement, ArrowCornerDownLeftProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowCornerDownLeftBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowCornerDownLeftBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowCornerDownLeftFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowCornerDownLeftFill ref={ref} {...rest} />;
  if (duotone) return <ArrowCornerDownLeftRegularDuotone ref={ref} {...rest} />;
  return <ArrowCornerDownLeftRegular ref={ref} {...rest} />;
}));

ArrowCornerDownLeft.displayName = 'ArrowCornerDownLeft';

export { ArrowCornerDownLeft };
