import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { CupRegular } from './CupRegular.js';
import { CupRegularDuotone } from './CupRegularDuotone.js';
import { CupBold } from './CupBold.js';
import { CupBoldDuotone } from './CupBoldDuotone.js';
import { CupFill } from './CupFill.js';
import { CupFillDuotone } from './CupFillDuotone.js';

export interface CupProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Cup - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CupRegular } from 'stera-icons/icons/CupRegular';
 */
const Cup = memo(forwardRef<SVGSVGElement, CupProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CupBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CupBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CupFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CupFill ref={ref} {...rest} />;
  if (duotone) return <CupRegularDuotone ref={ref} {...rest} />;
  return <CupRegular ref={ref} {...rest} />;
}));

Cup.displayName = 'Cup';

// Triple export pattern (lucide-react style)
export { Cup, Cup as CupIcon, Cup as SiCup };
export default Cup;
