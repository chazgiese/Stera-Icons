import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MailboxBoldProps = Omit<IconBaseProps, 'children'>;

const MailboxBold = memo(
  forwardRef<SVGSVGElement, MailboxBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M7.25 10a1 1 0 1 1 0 2h-1.5a1 1 0 1 1 0-2zM18 9a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0V11h-3a1 1 0 1 1 0-2z" />
        <path fill="currentColor" fillRule="evenodd" d="M17.5 5a5.5 5.5 0 0 1 5.5 5.5V17a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3v-6.5A5.5 5.5 0 0 1 6.5 5zm-11 2A3.5 3.5 0 0 0 3 10.5V17a1 1 0 0 0 1 1h6v-7.5A3.5 3.5 0 0 0 6.5 7m4.24 0A5.5 5.5 0 0 1 12 10.5V18h8a1 1 0 0 0 1-1v-6.5A3.5 3.5 0 0 0 17.5 7z" clipRule="evenodd" />
    </IconBase>
  ))
);

MailboxBold.displayName = 'MailboxBold';

// Triple export pattern (lucide-react style)
export { MailboxBold, MailboxBold as MailboxBoldIcon, MailboxBold as SiMailboxBold };
export type { MailboxBoldProps };
