import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MoreVRegular } from './MoreVRegular';
import { MoreVRegularDuotone } from './MoreVRegularDuotone';
import { MoreVBold } from './MoreVBold';
import { MoreVBoldDuotone } from './MoreVBoldDuotone';
import { MoreVFill } from './MoreVFill';
import { MoreVFillDuotone } from './MoreVFillDuotone';

export interface MoreVProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * MoreV with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { MoreVRegular } from 'stera-icons/MoreVRegular';
 */
const MoreV = memo(forwardRef<SVGSVGElement, MoreVProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MoreVBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MoreVBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MoreVFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MoreVFill ref={ref} {...rest} />;
  if (duotone) return <MoreVRegularDuotone ref={ref} {...rest} />;
  return <MoreVRegular ref={ref} {...rest} />;
}));

MoreV.displayName = 'MoreV';

export { MoreV };
