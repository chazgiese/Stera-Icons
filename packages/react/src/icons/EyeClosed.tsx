import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { EyeClosedRegular } from './EyeClosedRegular';
import { EyeClosedRegularDuotone } from './EyeClosedRegularDuotone';
import { EyeClosedBold } from './EyeClosedBold';
import { EyeClosedBoldDuotone } from './EyeClosedBoldDuotone';
import { EyeClosedFill } from './EyeClosedFill';
import { EyeClosedFillDuotone } from './EyeClosedFillDuotone';

export interface EyeClosedProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * EyeClosed with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { EyeClosedRegular } from 'stera-icons/EyeClosedRegular';
 */
const EyeClosed = memo(forwardRef<SVGSVGElement, EyeClosedProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <EyeClosedBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <EyeClosedBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <EyeClosedFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <EyeClosedFill ref={ref} {...rest} />;
  if (duotone) return <EyeClosedRegularDuotone ref={ref} {...rest} />;
  return <EyeClosedRegular ref={ref} {...rest} />;
}));

EyeClosed.displayName = 'EyeClosed';

export { EyeClosed };
