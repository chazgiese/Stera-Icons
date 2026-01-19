import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CurrencyCentRegular } from './CurrencyCentRegular';
import { CurrencyCentRegularDuotone } from './CurrencyCentRegularDuotone';
import { CurrencyCentBold } from './CurrencyCentBold';
import { CurrencyCentBoldDuotone } from './CurrencyCentBoldDuotone';
import { CurrencyCentFill } from './CurrencyCentFill';
import { CurrencyCentFillDuotone } from './CurrencyCentFillDuotone';

export interface CurrencyCentProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CurrencyCent - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CurrencyCentRegular } from 'stera-icons/icons/CurrencyCentRegular';
 */
const CurrencyCent = memo(forwardRef<SVGSVGElement, CurrencyCentProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CurrencyCentBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CurrencyCentBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CurrencyCentFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CurrencyCentFill ref={ref} {...rest} />;
  if (duotone) return <CurrencyCentRegularDuotone ref={ref} {...rest} />;
  return <CurrencyCentRegular ref={ref} {...rest} />;
}));

CurrencyCent.displayName = 'CurrencyCent';

// Triple export pattern (lucide-react style)
export { CurrencyCent, CurrencyCent as CurrencyCentIcon, CurrencyCent as SiCurrencyCent };
export default CurrencyCent;
