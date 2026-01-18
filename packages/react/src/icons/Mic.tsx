import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MicRegular } from './MicRegular';
import { MicRegularDuotone } from './MicRegularDuotone';
import { MicBold } from './MicBold';
import { MicBoldDuotone } from './MicBoldDuotone';
import { MicFill } from './MicFill';
import { MicFillDuotone } from './MicFillDuotone';

export interface MicProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Mic with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { MicRegular } from 'stera-icons/MicRegular';
 */
const Mic = memo(forwardRef<SVGSVGElement, MicProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MicBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MicBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MicFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MicFill ref={ref} {...rest} />;
  if (duotone) return <MicRegularDuotone ref={ref} {...rest} />;
  return <MicRegular ref={ref} {...rest} />;
}));

Mic.displayName = 'Mic';

export { Mic };
