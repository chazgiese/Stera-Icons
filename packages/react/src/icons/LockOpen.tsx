import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LockOpenRegular } from './LockOpenRegular';
import { LockOpenRegularDuotone } from './LockOpenRegularDuotone';
import { LockOpenBold } from './LockOpenBold';
import { LockOpenBoldDuotone } from './LockOpenBoldDuotone';
import { LockOpenFill } from './LockOpenFill';
import { LockOpenFillDuotone } from './LockOpenFillDuotone';

export interface LockOpenProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * LockOpen with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { LockOpenRegular } from 'stera-icons/LockOpenRegular';
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

export { LockOpen };
