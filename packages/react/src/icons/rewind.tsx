import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { RewindRegular } from './RewindRegular';
import { RewindRegularDuotone } from './RewindRegularDuotone';
import { RewindBold } from './RewindBold';
import { RewindBoldDuotone } from './RewindBoldDuotone';
import { RewindFill } from './RewindFill';
import { RewindFillDuotone } from './RewindFillDuotone';

export interface RewindProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Rewind with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { RewindRegular } from 'stera-icons/RewindRegular';
 */
const Rewind = memo(forwardRef<SVGSVGElement, RewindProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <RewindBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <RewindBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <RewindFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <RewindFill ref={ref} {...rest} />;
  if (duotone) return <RewindRegularDuotone ref={ref} {...rest} />;
  return <RewindRegular ref={ref} {...rest} />;
}));

Rewind.displayName = 'Rewind';

export { Rewind };
