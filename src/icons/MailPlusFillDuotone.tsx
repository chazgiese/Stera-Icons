import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MailPlusFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MailPlusFillDuotone = memo(
  forwardRef<SVGSVGElement, MailPlusFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="mail-plus-fill-duotone" {...props}>
      <path fill="currentColor" d="M19.13 3h.1l.24.03h.07A4 4 0 0 1 23 7v6a1 1 0 1 1-2 0V9.08l-5.88 4.7a5 5 0 0 1-6.24 0L3 9.08V17c0 1.1.9 2 2 2h8a1 1 0 1 1 0 2H5a4 4 0 0 1-4-4V7a4 4 0 0 1 3.46-3.96l.06-.01.25-.02h.1L4.95 3h14.18" opacity={.4} />
        <path fill="currentColor" d="M18.5 13a1 1 0 0 1 1 1v2.5H22a1 1 0 1 1 0 2h-2.5V21a1 1 0 0 1-2 0v-2.5H15a1 1 0 0 1 0-2h2.5V14a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

MailPlusFillDuotone.displayName = 'MailPlusFillDuotone';

// Triple export pattern (lucide-react style)
export { MailPlusFillDuotone, MailPlusFillDuotone as MailPlusFillDuotoneIcon, MailPlusFillDuotone as SiMailPlusFillDuotone };
export default MailPlusFillDuotone;
export type { MailPlusFillDuotoneProps };
