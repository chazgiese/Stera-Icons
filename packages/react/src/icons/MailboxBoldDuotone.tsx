import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MailboxBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MailboxBoldDuotone = memo(
  forwardRef<SVGSVGElement, MailboxBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.5 5a5.5 5.5 0 0 1 5.5 5.5V17a3 3 0 0 1-3 3h-9a1 1 0 0 0 1-1v-1h8a1 1 0 0 0 1-1v-6.5A3.5 3.5 0 0 0 17.5 7h-6.76c-1-1.22-2.53-2-4.24-2z" />
        <path d="M7.25 10a1 1 0 1 1 0 2h-1.5a1 1 0 1 1 0-2z" />
        <path fill="currentColor" fillRule="evenodd" d="M6.5 5a5.5 5.5 0 0 1 5.5 5.5V19a1 1 0 0 1-1 1H4a3 3 0 0 1-3-3v-6.5A5.5 5.5 0 0 1 6.5 5m0 2A3.5 3.5 0 0 0 3 10.5V17a1 1 0 0 0 1 1h6v-7.5A3.5 3.5 0 0 0 6.5 7" clipRule="evenodd" />
        <path fill="currentColor" d="M18 9a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0V11h-3a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

MailboxBoldDuotone.displayName = 'MailboxBoldDuotone';

export { MailboxBoldDuotone };
export type { MailboxBoldDuotoneProps };
