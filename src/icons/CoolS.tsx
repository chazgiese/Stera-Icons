import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { CoolSRegular } from './CoolSRegular.js';
import { CoolSRegularDuotone } from './CoolSRegularDuotone.js';
import { CoolSBold } from './CoolSBold.js';
import { CoolSBoldDuotone } from './CoolSBoldDuotone.js';
import { CoolSFill } from './CoolSFill.js';
import { CoolSFillDuotone } from './CoolSFillDuotone.js';

export interface CoolSProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CoolS - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CoolSRegular } from 'stera-icons/icons/CoolSRegular';
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
export default CoolS;
