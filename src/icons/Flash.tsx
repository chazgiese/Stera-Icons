import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlashRegular } from './FlashRegular';
import { FlashRegularDuotone } from './FlashRegularDuotone';
import { FlashBold } from './FlashBold';
import { FlashBoldDuotone } from './FlashBoldDuotone';
import { FlashFill } from './FlashFill';
import { FlashFillDuotone } from './FlashFillDuotone';

export interface FlashProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Flash - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { FlashRegular } from 'stera-icons/icons/FlashRegular';
 */
const Flash = memo(forwardRef<SVGSVGElement, FlashProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <FlashBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <FlashBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <FlashFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <FlashFill ref={ref} {...rest} />;
  if (duotone) return <FlashRegularDuotone ref={ref} {...rest} />;
  return <FlashRegular ref={ref} {...rest} />;
}));

Flash.displayName = 'Flash';

// Triple export pattern (lucide-react style)
export { Flash, Flash as FlashIcon, Flash as SiFlash };
export default Flash;
