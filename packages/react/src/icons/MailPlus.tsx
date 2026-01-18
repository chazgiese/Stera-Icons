import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MailPlusRegular } from './MailPlusRegular';
import { MailPlusRegularDuotone } from './MailPlusRegularDuotone';
import { MailPlusBold } from './MailPlusBold';
import { MailPlusBoldDuotone } from './MailPlusBoldDuotone';
import { MailPlusFill } from './MailPlusFill';
import { MailPlusFillDuotone } from './MailPlusFillDuotone';

export interface MailPlusProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * MailPlus with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { MailPlusRegular } from 'stera-icons/MailPlusRegular';
 */
const MailPlus = memo(forwardRef<SVGSVGElement, MailPlusProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MailPlusBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MailPlusBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MailPlusFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MailPlusFill ref={ref} {...rest} />;
  if (duotone) return <MailPlusRegularDuotone ref={ref} {...rest} />;
  return <MailPlusRegular ref={ref} {...rest} />;
}));

MailPlus.displayName = 'MailPlus';

export { MailPlus };
