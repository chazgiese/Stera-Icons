import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArchwayRegular } from './ArchwayRegular';
import { ArchwayRegularDuotone } from './ArchwayRegularDuotone';
import { ArchwayBold } from './ArchwayBold';
import { ArchwayBoldDuotone } from './ArchwayBoldDuotone';
import { ArchwayFill } from './ArchwayFill';
import { ArchwayFillDuotone } from './ArchwayFillDuotone';

export interface ArchwayProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Archway - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ArchwayRegular } from 'stera-icons/icons/ArchwayRegular';
 */
const Archway = memo(forwardRef<SVGSVGElement, ArchwayProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArchwayBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArchwayBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArchwayFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArchwayFill ref={ref} {...rest} />;
  if (duotone) return <ArchwayRegularDuotone ref={ref} {...rest} />;
  return <ArchwayRegular ref={ref} {...rest} />;
}));

Archway.displayName = 'Archway';

// Triple export pattern (lucide-react style)
export { Archway, Archway as ArchwayIcon, Archway as SiArchway };
