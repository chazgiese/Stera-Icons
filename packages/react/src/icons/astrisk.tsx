import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AstriskRegular } from './AstriskRegular';
import { AstriskRegularDuotone } from './AstriskRegularDuotone';
import { AstriskBold } from './AstriskBold';
import { AstriskBoldDuotone } from './AstriskBoldDuotone';
import { AstriskFill } from './AstriskFill';
import { AstriskFillDuotone } from './AstriskFillDuotone';

export interface AstriskProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Astrisk with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { AstriskRegular } from 'stera-icons/AstriskRegular';
 */
const Astrisk = memo(forwardRef<SVGSVGElement, AstriskProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <AstriskBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <AstriskBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <AstriskFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <AstriskFill ref={ref} {...rest} />;
  if (duotone) return <AstriskRegularDuotone ref={ref} {...rest} />;
  return <AstriskRegular ref={ref} {...rest} />;
}));

Astrisk.displayName = 'Astrisk';

export { Astrisk };
