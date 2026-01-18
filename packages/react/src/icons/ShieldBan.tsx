import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ShieldBanRegular } from './ShieldBanRegular';
import { ShieldBanRegularDuotone } from './ShieldBanRegularDuotone';
import { ShieldBanBold } from './ShieldBanBold';
import { ShieldBanBoldDuotone } from './ShieldBanBoldDuotone';
import { ShieldBanFill } from './ShieldBanFill';
import { ShieldBanFillDuotone } from './ShieldBanFillDuotone';

export interface ShieldBanProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ShieldBan with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ShieldBanRegular } from 'stera-icons/ShieldBanRegular';
 */
const ShieldBan = memo(forwardRef<SVGSVGElement, ShieldBanProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ShieldBanBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ShieldBanBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ShieldBanFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ShieldBanFill ref={ref} {...rest} />;
  if (duotone) return <ShieldBanRegularDuotone ref={ref} {...rest} />;
  return <ShieldBanRegular ref={ref} {...rest} />;
}));

ShieldBan.displayName = 'ShieldBan';

export { ShieldBan };
