import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LassoDashRegular } from './LassoDashRegular';
import { LassoDashRegularDuotone } from './LassoDashRegularDuotone';
import { LassoDashBold } from './LassoDashBold';
import { LassoDashBoldDuotone } from './LassoDashBoldDuotone';
import { LassoDashFill } from './LassoDashFill';
import { LassoDashFillDuotone } from './LassoDashFillDuotone';

export interface LassoDashProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * LassoDash with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { LassoDashRegular } from 'stera-icons/LassoDashRegular';
 */
const LassoDash = memo(forwardRef<SVGSVGElement, LassoDashProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <LassoDashBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <LassoDashBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <LassoDashFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <LassoDashFill ref={ref} {...rest} />;
  if (duotone) return <LassoDashRegularDuotone ref={ref} {...rest} />;
  return <LassoDashRegular ref={ref} {...rest} />;
}));

LassoDash.displayName = 'LassoDash';

export { LassoDash };
