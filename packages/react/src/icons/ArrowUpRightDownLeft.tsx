import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowUpRightDownLeftRegular } from './ArrowUpRightDownLeftRegular';
import { ArrowUpRightDownLeftRegularDuotone } from './ArrowUpRightDownLeftRegularDuotone';
import { ArrowUpRightDownLeftBold } from './ArrowUpRightDownLeftBold';
import { ArrowUpRightDownLeftBoldDuotone } from './ArrowUpRightDownLeftBoldDuotone';
import { ArrowUpRightDownLeftFill } from './ArrowUpRightDownLeftFill';
import { ArrowUpRightDownLeftFillDuotone } from './ArrowUpRightDownLeftFillDuotone';

export interface ArrowUpRightDownLeftProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowUpRightDownLeft with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowUpRightDownLeftRegular } from 'stera-icons/ArrowUpRightDownLeftRegular';
 */
const ArrowUpRightDownLeft = memo(forwardRef<SVGSVGElement, ArrowUpRightDownLeftProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowUpRightDownLeftBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowUpRightDownLeftBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowUpRightDownLeftFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowUpRightDownLeftFill ref={ref} {...rest} />;
  if (duotone) return <ArrowUpRightDownLeftRegularDuotone ref={ref} {...rest} />;
  return <ArrowUpRightDownLeftRegular ref={ref} {...rest} />;
}));

ArrowUpRightDownLeft.displayName = 'ArrowUpRightDownLeft';

export { ArrowUpRightDownLeft };
