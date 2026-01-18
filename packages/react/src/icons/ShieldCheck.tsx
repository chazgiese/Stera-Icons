import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ShieldCheckRegular } from './ShieldCheckRegular';
import { ShieldCheckRegularDuotone } from './ShieldCheckRegularDuotone';
import { ShieldCheckBold } from './ShieldCheckBold';
import { ShieldCheckBoldDuotone } from './ShieldCheckBoldDuotone';
import { ShieldCheckFill } from './ShieldCheckFill';
import { ShieldCheckFillDuotone } from './ShieldCheckFillDuotone';

export interface ShieldCheckProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ShieldCheck with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ShieldCheckRegular } from 'stera-icons/ShieldCheckRegular';
 */
const ShieldCheck = memo(forwardRef<SVGSVGElement, ShieldCheckProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ShieldCheckBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ShieldCheckBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ShieldCheckFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ShieldCheckFill ref={ref} {...rest} />;
  if (duotone) return <ShieldCheckRegularDuotone ref={ref} {...rest} />;
  return <ShieldCheckRegular ref={ref} {...rest} />;
}));

ShieldCheck.displayName = 'ShieldCheck';

export { ShieldCheck };
