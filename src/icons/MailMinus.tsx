import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { MailMinusRegular } from './MailMinusRegular.js';
import { MailMinusRegularDuotone } from './MailMinusRegularDuotone.js';
import { MailMinusBold } from './MailMinusBold.js';
import { MailMinusBoldDuotone } from './MailMinusBoldDuotone.js';
import { MailMinusFill } from './MailMinusFill.js';
import { MailMinusFillDuotone } from './MailMinusFillDuotone.js';

export interface MailMinusProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * MailMinus - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MailMinusRegular } from 'stera-icons/icons/MailMinusRegular';
 */
const MailMinus = memo(forwardRef<SVGSVGElement, MailMinusProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MailMinusBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MailMinusBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MailMinusFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MailMinusFill ref={ref} {...rest} />;
  if (duotone) return <MailMinusRegularDuotone ref={ref} {...rest} />;
  return <MailMinusRegular ref={ref} {...rest} />;
}));

MailMinus.displayName = 'MailMinus';

// Triple export pattern (lucide-react style)
export { MailMinus, MailMinus as MailMinusIcon, MailMinus as SiMailMinus };
export default MailMinus;
