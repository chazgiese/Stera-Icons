import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PushPinAltRegular } from './PushPinAltRegular';
import { PushPinAltRegularDuotone } from './PushPinAltRegularDuotone';
import { PushPinAltBold } from './PushPinAltBold';
import { PushPinAltBoldDuotone } from './PushPinAltBoldDuotone';
import { PushPinAltFill } from './PushPinAltFill';
import { PushPinAltFillDuotone } from './PushPinAltFillDuotone';

export interface PushPinAltProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * PushPinAlt - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { PushPinAltRegular } from 'stera-icons/PushPinAltRegular';
 */
const PushPinAlt = memo(forwardRef<SVGSVGElement, PushPinAltProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <PushPinAltBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <PushPinAltBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <PushPinAltFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <PushPinAltFill ref={ref} {...rest} />;
  if (duotone) return <PushPinAltRegularDuotone ref={ref} {...rest} />;
  return <PushPinAltRegular ref={ref} {...rest} />;
}));

PushPinAlt.displayName = 'PushPinAlt';

// Triple export pattern (lucide-react style)
export { PushPinAlt, PushPinAlt as PushPinAltIcon, PushPinAlt as SiPushPinAlt };
