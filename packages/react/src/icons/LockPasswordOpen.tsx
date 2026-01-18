import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LockPasswordOpenRegular } from './LockPasswordOpenRegular';
import { LockPasswordOpenRegularDuotone } from './LockPasswordOpenRegularDuotone';
import { LockPasswordOpenBold } from './LockPasswordOpenBold';
import { LockPasswordOpenBoldDuotone } from './LockPasswordOpenBoldDuotone';
import { LockPasswordOpenFill } from './LockPasswordOpenFill';
import { LockPasswordOpenFillDuotone } from './LockPasswordOpenFillDuotone';

export interface LockPasswordOpenProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * LockPasswordOpen with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { LockPasswordOpenRegular } from 'stera-icons/LockPasswordOpenRegular';
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

export { LockPasswordOpen };
