import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BellRegular } from './BellRegular';
import { BellRegularDuotone } from './BellRegularDuotone';
import { BellBold } from './BellBold';
import { BellBoldDuotone } from './BellBoldDuotone';
import { BellFill } from './BellFill';
import { BellFillDuotone } from './BellFillDuotone';

export interface BellProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Bell with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { BellRegular } from 'stera-icons/BellRegular';
 */
const Bell = memo(forwardRef<SVGSVGElement, BellProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BellBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BellBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BellFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BellFill ref={ref} {...rest} />;
  if (duotone) return <BellRegularDuotone ref={ref} {...rest} />;
  return <BellRegular ref={ref} {...rest} />;
}));

Bell.displayName = 'Bell';

export { Bell };
