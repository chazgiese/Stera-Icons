import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CoffeeMugRegular } from './CoffeeMugRegular';
import { CoffeeMugRegularDuotone } from './CoffeeMugRegularDuotone';
import { CoffeeMugBold } from './CoffeeMugBold';
import { CoffeeMugBoldDuotone } from './CoffeeMugBoldDuotone';
import { CoffeeMugFill } from './CoffeeMugFill';
import { CoffeeMugFillDuotone } from './CoffeeMugFillDuotone';

export interface CoffeeMugProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CoffeeMug - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CoffeeMugRegular } from 'stera-icons/icons/CoffeeMugRegular';
 */
const CoffeeMug = memo(forwardRef<SVGSVGElement, CoffeeMugProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CoffeeMugBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CoffeeMugBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CoffeeMugFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CoffeeMugFill ref={ref} {...rest} />;
  if (duotone) return <CoffeeMugRegularDuotone ref={ref} {...rest} />;
  return <CoffeeMugRegular ref={ref} {...rest} />;
}));

CoffeeMug.displayName = 'CoffeeMug';

// Triple export pattern (lucide-react style)
export { CoffeeMug, CoffeeMug as CoffeeMugIcon, CoffeeMug as SiCoffeeMug };
export default CoffeeMug;
