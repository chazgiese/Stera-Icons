import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MailBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MailBoldDuotone = memo(
  forwardRef<SVGSVGElement, MailBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="mail-bold-duotone" {...props}>
      <path fill="currentColor" d="M1 6.99q0 .48.39.8L3 9.08V17c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V9.08l1.61-1.29q.38-.32.39-.8V17a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M19.22 3C21.32 3.11 23 4.85 23 7c0 .3-.14.6-.39.8l-7.49 6a5 5 0 0 1-6.24 0l-7.5-6c-.24-.2-.38-.5-.38-.8C1 4.79 2.78 3 4.99 3h14.23M4.78 5.01c-.85.09-1.55.72-1.73 1.55l7.08 5.66a3 3 0 0 0 3.74 0l7.08-5.66A2 2 0 0 0 19.22 5l-.2-.01H4.98z" clipRule="evenodd" />
    </IconBase>
  ))
);

MailBoldDuotone.displayName = 'MailBoldDuotone';

// Triple export pattern (lucide-react style)
export { MailBoldDuotone, MailBoldDuotone as MailBoldDuotoneIcon, MailBoldDuotone as SiMailBoldDuotone };
export type { MailBoldDuotoneProps };
