import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { LockRegular } from './LockRegular.js';
import { LockRegularDuotone } from './LockRegularDuotone.js';
import { LockBold } from './LockBold.js';
import { LockBoldDuotone } from './LockBoldDuotone.js';
import { LockFill } from './LockFill.js';
import { LockFillDuotone } from './LockFillDuotone.js';

export interface LockProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Lock - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { LockRegular } from 'stera-icons/icons/LockRegular';
 */
const Lock = memo(forwardRef<SVGSVGElement, LockProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <LockBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <LockBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <LockFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <LockFill ref={ref} {...rest} />;
  if (duotone) return <LockRegularDuotone ref={ref} {...rest} />;
  return <LockRegular ref={ref} {...rest} />;
}));

Lock.displayName = 'Lock';

// Triple export pattern (lucide-react style)
export { Lock, Lock as LockIcon, Lock as SiLock };
export default Lock;
