import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MailBadgeBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MailBadgeBoldDuotone = memo(
  forwardRef<SVGSVGElement, MailBadgeBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M1 6.99q0 .48.39.8L3 9.08V17c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V9.5q1.09-.01 2-.47V17a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4z" opacity={.4} />
        <path fill="currentColor" d="M16.97 3q-.46.91-.47 2H4.99l-.2.01c-.86.09-1.56.72-1.74 1.55l7.08 5.66a3 3 0 0 0 3.74 0l4.48-3.58q.95.7 2.16.83l-5.39 4.31a5 5 0 0 1-6.24 0L1.38 7.8c-.24-.2-.38-.5-.38-.8C1 4.79 2.78 3 4.99 3z" />
        <path fill="currentColor" d="M21 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6" />
    </IconBase>
  ))
);

MailBadgeBoldDuotone.displayName = 'MailBadgeBoldDuotone';

// Triple export pattern (lucide-react style)
export { MailBadgeBoldDuotone, MailBadgeBoldDuotone as MailBadgeBoldDuotoneIcon, MailBadgeBoldDuotone as SiMailBadgeBoldDuotone };
export type { MailBadgeBoldDuotoneProps };
