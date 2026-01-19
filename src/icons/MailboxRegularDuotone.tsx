import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MailboxRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MailboxRegularDuotone = memo(
  forwardRef<SVGSVGElement, MailboxRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="mailbox-duotone" {...props}>
      <path d="M17.5 5.25c2.9 0 5.25 2.35 5.25 5.25V17A2.75 2.75 0 0 1 20 19.75h-9c.41 0 .75-.34.75-.75v-.75H20c.69 0 1.25-.56 1.25-1.25v-6.5a3.75 3.75 0 0 0-3.75-3.75h-7.33a5.2 5.2 0 0 0-3.67-1.5zM7.25 10.25a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1 0-1.5z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M6.5 5.25c2.9 0 5.25 2.35 5.25 5.25V19c0 .41-.34.75-.75.75H4A2.75 2.75 0 0 1 1.25 17v-6.5c0-2.9 2.35-5.25 5.25-5.25m0 1.5a3.75 3.75 0 0 0-3.75 3.75V17c0 .69.56 1.25 1.25 1.25h6.25V10.5A3.75 3.75 0 0 0 6.5 6.75" clipRule="evenodd" />
        <path fill="currentColor" d="M18 9.25c.41 0 .75.34.75.75v1.5a.75.75 0 0 1-1.5 0v-.75H14a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

MailboxRegularDuotone.displayName = 'MailboxRegularDuotone';

// Triple export pattern (lucide-react style)
export { MailboxRegularDuotone, MailboxRegularDuotone as MailboxRegularDuotoneIcon, MailboxRegularDuotone as SiMailboxRegularDuotone };
export default MailboxRegularDuotone;
export type { MailboxRegularDuotoneProps };
