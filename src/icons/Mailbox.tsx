import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MailboxRegular } from './MailboxRegular';
import { MailboxRegularDuotone } from './MailboxRegularDuotone';
import { MailboxBold } from './MailboxBold';
import { MailboxBoldDuotone } from './MailboxBoldDuotone';
import { MailboxFill } from './MailboxFill';
import { MailboxFillDuotone } from './MailboxFillDuotone';

export interface MailboxProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Mailbox - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MailboxRegular } from 'stera-icons/icons/MailboxRegular';
 */
const Mailbox = memo(forwardRef<SVGSVGElement, MailboxProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MailboxBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MailboxBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MailboxFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MailboxFill ref={ref} {...rest} />;
  if (duotone) return <MailboxRegularDuotone ref={ref} {...rest} />;
  return <MailboxRegular ref={ref} {...rest} />;
}));

Mailbox.displayName = 'Mailbox';

// Triple export pattern (lucide-react style)
export { Mailbox, Mailbox as MailboxIcon, Mailbox as SiMailbox };
export default Mailbox;
