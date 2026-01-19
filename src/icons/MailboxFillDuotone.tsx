import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MailboxFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MailboxFillDuotone = memo(
  forwardRef<SVGSVGElement, MailboxFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="mailbox-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M17.5 5a5.5 5.5 0 0 1 5.5 5.5V17a3 3 0 0 1-3 3h-9a1 1 0 0 0 1-1v-8.5A5.5 5.5 0 0 0 6.5 5zm-3 4a1 1 0 1 0 0 2h3v.5a1 1 0 1 0 2 0V10a1 1 0 0 0-1-1z" clipRule="evenodd" opacity={0.4} />
        <path d="M7.25 10a1 1 0 1 1 0 2h-1.5a1 1 0 1 1 0-2z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M6.5 5a5.5 5.5 0 0 1 5.5 5.5V19a1 1 0 0 1-1 1H4a3 3 0 0 1-3-3v-6.5A5.5 5.5 0 0 1 6.5 5m-.75 5a1 1 0 1 0 0 2h1.5a1 1 0 1 0 0-2z" clipRule="evenodd" />
        <path fill="currentColor" d="M18.5 9a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0V11h-3a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

MailboxFillDuotone.displayName = 'MailboxFillDuotone';

// Triple export pattern (lucide-react style)
export { MailboxFillDuotone, MailboxFillDuotone as MailboxFillDuotoneIcon, MailboxFillDuotone as SiMailboxFillDuotone };
export type { MailboxFillDuotoneProps };
