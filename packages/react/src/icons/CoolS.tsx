import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CoolSRegular } from './CoolSRegular';
import { CoolSRegularDuotone } from './CoolSRegularDuotone';
import { CoolSBold } from './CoolSBold';
import { CoolSBoldDuotone } from './CoolSBoldDuotone';
import { CoolSFill } from './CoolSFill';
import { CoolSFillDuotone } from './CoolSFillDuotone';

export interface CoolSProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CoolS - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CoolSRegular } from 'stera-icons/CoolSRegular';
 */
const CoolS = memo(forwardRef<SVGSVGElement, CoolSProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CoolSBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CoolSBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CoolSFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CoolSFill ref={ref} {...rest} />;
  if (duotone) return <CoolSRegularDuotone ref={ref} {...rest} />;
  return <CoolSRegular ref={ref} {...rest} />;
}));

CoolS.displayName = 'CoolS';

// Triple export pattern (lucide-react style)
export { CoolS, CoolS as CoolSIcon, CoolS as SiCoolS };
