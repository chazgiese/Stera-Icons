import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { MailRegular } from './MailRegular.js';
import { MailRegularDuotone } from './MailRegularDuotone.js';
import { MailBold } from './MailBold.js';
import { MailBoldDuotone } from './MailBoldDuotone.js';
import { MailFill } from './MailFill.js';
import { MailFillDuotone } from './MailFillDuotone.js';

export interface MailProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Mail - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MailRegular } from 'stera-icons/icons/MailRegular';
 */
const Mail = memo(forwardRef<SVGSVGElement, MailProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MailBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MailBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MailFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MailFill ref={ref} {...rest} />;
  if (duotone) return <MailRegularDuotone ref={ref} {...rest} />;
  return <MailRegular ref={ref} {...rest} />;
}));

Mail.displayName = 'Mail';

// Triple export pattern (lucide-react style)
export { Mail, Mail as MailIcon, Mail as SiMail };
export default Mail;
