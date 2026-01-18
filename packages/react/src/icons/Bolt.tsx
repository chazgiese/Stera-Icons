import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BoltRegular } from './BoltRegular';
import { BoltRegularDuotone } from './BoltRegularDuotone';
import { BoltBold } from './BoltBold';
import { BoltBoldDuotone } from './BoltBoldDuotone';
import { BoltFill } from './BoltFill';
import { BoltFillDuotone } from './BoltFillDuotone';

export interface BoltProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Bolt with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { BoltRegular } from 'stera-icons/BoltRegular';
 */
const Bolt = memo(forwardRef<SVGSVGElement, BoltProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BoltBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BoltBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BoltFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BoltFill ref={ref} {...rest} />;
  if (duotone) return <BoltRegularDuotone ref={ref} {...rest} />;
  return <BoltRegular ref={ref} {...rest} />;
}));

Bolt.displayName = 'Bolt';

export { Bolt };
