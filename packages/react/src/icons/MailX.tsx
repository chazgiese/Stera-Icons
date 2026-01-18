import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MailXRegular } from './MailXRegular';
import { MailXRegularDuotone } from './MailXRegularDuotone';
import { MailXBold } from './MailXBold';
import { MailXBoldDuotone } from './MailXBoldDuotone';
import { MailXFill } from './MailXFill';
import { MailXFillDuotone } from './MailXFillDuotone';

export interface MailXProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * MailX with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { MailXRegular } from 'stera-icons/MailXRegular';
 */
const MailX = memo(forwardRef<SVGSVGElement, MailXProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MailXBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MailXBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MailXFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MailXFill ref={ref} {...rest} />;
  if (duotone) return <MailXRegularDuotone ref={ref} {...rest} />;
  return <MailXRegular ref={ref} {...rest} />;
}));

MailX.displayName = 'MailX';

export { MailX };
