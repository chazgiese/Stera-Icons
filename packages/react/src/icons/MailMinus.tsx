import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MailMinusRegular } from './MailMinusRegular';
import { MailMinusRegularDuotone } from './MailMinusRegularDuotone';
import { MailMinusBold } from './MailMinusBold';
import { MailMinusBoldDuotone } from './MailMinusBoldDuotone';
import { MailMinusFill } from './MailMinusFill';
import { MailMinusFillDuotone } from './MailMinusFillDuotone';

export interface MailMinusProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * MailMinus with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { MailMinusRegular } from 'stera-icons/MailMinusRegular';
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

export { MailMinus };
