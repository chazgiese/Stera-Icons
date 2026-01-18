import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CapsLockRegular } from './CapsLockRegular';
import { CapsLockRegularDuotone } from './CapsLockRegularDuotone';
import { CapsLockBold } from './CapsLockBold';
import { CapsLockBoldDuotone } from './CapsLockBoldDuotone';
import { CapsLockFill } from './CapsLockFill';
import { CapsLockFillDuotone } from './CapsLockFillDuotone';

export interface CapsLockProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CapsLock with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { CapsLockRegular } from 'stera-icons/CapsLockRegular';
 */
const CapsLock = memo(forwardRef<SVGSVGElement, CapsLockProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CapsLockBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CapsLockBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CapsLockFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CapsLockFill ref={ref} {...rest} />;
  if (duotone) return <CapsLockRegularDuotone ref={ref} {...rest} />;
  return <CapsLockRegular ref={ref} {...rest} />;
}));

CapsLock.displayName = 'CapsLock';

export { CapsLock };
