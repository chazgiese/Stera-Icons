import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { BellRegular } from './BellRegular.js';
import { BellRegularDuotone } from './BellRegularDuotone.js';
import { BellBold } from './BellBold.js';
import { BellBoldDuotone } from './BellBoldDuotone.js';
import { BellFill } from './BellFill.js';
import { BellFillDuotone } from './BellFillDuotone.js';

export interface BellProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Bell - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { BellRegular } from 'stera-icons/icons/BellRegular';
 */
const Bell = memo(forwardRef<SVGSVGElement, BellProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BellBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BellBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BellFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BellFill ref={ref} {...rest} />;
  if (duotone) return <BellRegularDuotone ref={ref} {...rest} />;
  return <BellRegular ref={ref} {...rest} />;
}));

Bell.displayName = 'Bell';

// Triple export pattern (lucide-react style)
export { Bell, Bell as BellIcon, Bell as SiBell };
export default Bell;
