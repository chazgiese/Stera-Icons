import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { LockPasswordOpenRegular } from './LockPasswordOpenRegular.js';
import { LockPasswordOpenRegularDuotone } from './LockPasswordOpenRegularDuotone.js';
import { LockPasswordOpenBold } from './LockPasswordOpenBold.js';
import { LockPasswordOpenBoldDuotone } from './LockPasswordOpenBoldDuotone.js';
import { LockPasswordOpenFill } from './LockPasswordOpenFill.js';
import { LockPasswordOpenFillDuotone } from './LockPasswordOpenFillDuotone.js';

export interface LockPasswordOpenProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * LockPasswordOpen - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { LockPasswordOpenRegular } from 'stera-icons/icons/LockPasswordOpenRegular';
 */
const LockPasswordOpen = memo(forwardRef<SVGSVGElement, LockPasswordOpenProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <LockPasswordOpenBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <LockPasswordOpenBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <LockPasswordOpenFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <LockPasswordOpenFill ref={ref} {...rest} />;
  if (duotone) return <LockPasswordOpenRegularDuotone ref={ref} {...rest} />;
  return <LockPasswordOpenRegular ref={ref} {...rest} />;
}));

LockPasswordOpen.displayName = 'LockPasswordOpen';

// Triple export pattern (lucide-react style)
export { LockPasswordOpen, LockPasswordOpen as LockPasswordOpenIcon, LockPasswordOpen as SiLockPasswordOpen };
export default LockPasswordOpen;
