import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CubeDashRegular } from './CubeDashRegular';
import { CubeDashRegularDuotone } from './CubeDashRegularDuotone';
import { CubeDashBold } from './CubeDashBold';
import { CubeDashBoldDuotone } from './CubeDashBoldDuotone';
import { CubeDashFill } from './CubeDashFill';
import { CubeDashFillDuotone } from './CubeDashFillDuotone';

export interface CubeDashProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CubeDash with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { CubeDashRegular } from 'stera-icons/CubeDashRegular';
 */
const CubeDash = memo(forwardRef<SVGSVGElement, CubeDashProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CubeDashBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CubeDashBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CubeDashFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CubeDashFill ref={ref} {...rest} />;
  if (duotone) return <CubeDashRegularDuotone ref={ref} {...rest} />;
  return <CubeDashRegular ref={ref} {...rest} />;
}));

CubeDash.displayName = 'CubeDash';

export { CubeDash };
