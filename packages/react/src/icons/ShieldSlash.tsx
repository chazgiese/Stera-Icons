import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ShieldSlashRegular } from './ShieldSlashRegular';
import { ShieldSlashRegularDuotone } from './ShieldSlashRegularDuotone';
import { ShieldSlashBold } from './ShieldSlashBold';
import { ShieldSlashBoldDuotone } from './ShieldSlashBoldDuotone';
import { ShieldSlashFill } from './ShieldSlashFill';
import { ShieldSlashFillDuotone } from './ShieldSlashFillDuotone';

export interface ShieldSlashProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ShieldSlash with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ShieldSlashRegular } from 'stera-icons/ShieldSlashRegular';
 */
const ShieldSlash = memo(forwardRef<SVGSVGElement, ShieldSlashProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ShieldSlashBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ShieldSlashBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ShieldSlashFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ShieldSlashFill ref={ref} {...rest} />;
  if (duotone) return <ShieldSlashRegularDuotone ref={ref} {...rest} />;
  return <ShieldSlashRegular ref={ref} {...rest} />;
}));

ShieldSlash.displayName = 'ShieldSlash';

export { ShieldSlash };
