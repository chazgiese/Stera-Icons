import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MailboxIcon as RegularMailboxIcon } from './mailbox';
import { MailboxIconDuotone as MailboxIconDuotone } from './mailbox-duotone';
import { MailboxIconBold as MailboxIconBold } from './mailbox-bold';
import { MailboxIconBoldDuotone as MailboxIconBoldDuotone } from './mailbox-bold-duotone';
import { MailboxIconFill as MailboxIconFill } from './mailbox-fill';
import { MailboxIconFillDuotone as MailboxIconFillDuotone } from './mailbox-fill-duotone';

export interface MailboxIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const MailboxIcon = memo(forwardRef<SVGSVGElement, MailboxIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <MailboxIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <MailboxIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <MailboxIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <MailboxIconFill ref={ref} {...props} />;
  if (duotone) return <MailboxIconDuotone ref={ref} {...props} />;
  return <RegularMailboxIcon ref={ref} {...props} />;
}));

MailboxIcon.displayName = 'MailboxIcon';

export { MailboxIcon };
