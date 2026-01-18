import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CupRegular } from './CupRegular';
import { CupRegularDuotone } from './CupRegularDuotone';
import { CupBold } from './CupBold';
import { CupBoldDuotone } from './CupBoldDuotone';
import { CupFill } from './CupFill';
import { CupFillDuotone } from './CupFillDuotone';

export interface CupProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Cup - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CupRegular } from 'stera-icons/CupRegular';
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
