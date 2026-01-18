import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MicroscopeRegular } from './MicroscopeRegular';
import { MicroscopeRegularDuotone } from './MicroscopeRegularDuotone';
import { MicroscopeBold } from './MicroscopeBold';
import { MicroscopeBoldDuotone } from './MicroscopeBoldDuotone';
import { MicroscopeFill } from './MicroscopeFill';
import { MicroscopeFillDuotone } from './MicroscopeFillDuotone';

export interface MicroscopeProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Microscope with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { MicroscopeRegular } from 'stera-icons/MicroscopeRegular';
 */
const Microscope = memo(forwardRef<SVGSVGElement, MicroscopeProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MicroscopeBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MicroscopeBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MicroscopeFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MicroscopeFill ref={ref} {...rest} />;
  if (duotone) return <MicroscopeRegularDuotone ref={ref} {...rest} />;
  return <MicroscopeRegular ref={ref} {...rest} />;
}));

Microscope.displayName = 'Microscope';

export { Microscope };
