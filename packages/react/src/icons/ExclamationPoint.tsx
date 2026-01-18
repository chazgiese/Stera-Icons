import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ExclamationPointRegular } from './ExclamationPointRegular';
import { ExclamationPointRegularDuotone } from './ExclamationPointRegularDuotone';
import { ExclamationPointBold } from './ExclamationPointBold';
import { ExclamationPointBoldDuotone } from './ExclamationPointBoldDuotone';
import { ExclamationPointFill } from './ExclamationPointFill';
import { ExclamationPointFillDuotone } from './ExclamationPointFillDuotone';

export interface ExclamationPointProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ExclamationPoint with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ExclamationPointRegular } from 'stera-icons/ExclamationPointRegular';
 */
const ExclamationPoint = memo(forwardRef<SVGSVGElement, ExclamationPointProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ExclamationPointBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ExclamationPointBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ExclamationPointFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ExclamationPointFill ref={ref} {...rest} />;
  if (duotone) return <ExclamationPointRegularDuotone ref={ref} {...rest} />;
  return <ExclamationPointRegular ref={ref} {...rest} />;
}));

ExclamationPoint.displayName = 'ExclamationPoint';

export { ExclamationPoint };
