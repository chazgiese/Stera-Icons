import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { LockOpenRegular } from './LockOpenRegular.js';
import { LockOpenRegularDuotone } from './LockOpenRegularDuotone.js';
import { LockOpenBold } from './LockOpenBold.js';
import { LockOpenBoldDuotone } from './LockOpenBoldDuotone.js';
import { LockOpenFill } from './LockOpenFill.js';
import { LockOpenFillDuotone } from './LockOpenFillDuotone.js';

export interface LockOpenProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * LockOpen - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { LockOpenRegular } from 'stera-icons/icons/LockOpenRegular';
 */
const LockOpen = memo(forwardRef<SVGSVGElement, LockOpenProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <LockOpenBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <LockOpenBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <LockOpenFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <LockOpenFill ref={ref} {...rest} />;
  if (duotone) return <LockOpenRegularDuotone ref={ref} {...rest} />;
  return <LockOpenRegular ref={ref} {...rest} />;
}));

LockOpen.displayName = 'LockOpen';

// Triple export pattern (lucide-react style)
export { LockOpen, LockOpen as LockOpenIcon, LockOpen as SiLockOpen };
export default LockOpen;
