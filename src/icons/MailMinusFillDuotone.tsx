import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MailMinusFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MailMinusFillDuotone = memo(
  forwardRef<SVGSVGElement, MailMinusFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="mail-minus-fill-duotone" {...props}>
      <path d="M16.2 4q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.82 1.91l.02.06.05.1.03.09.03.1.02.06.01.06.06.23.02.08.03.23.01.06v.06l.04.27q.05.82.04 2.05v2.7a1 1 0 1 1-2 0V9.46l-5.07 3.66a5 5 0 0 1-5.86 0L4 9.46v4.74c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04H13a1 1 0 1 1 0 2H7.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q2 15.43 2 14.2V9.8q-.01-1.23.04-2.05l.04-.3v-.07q.08-.63.36-1.2a4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q6.57 4 7.8 4z" opacity={.4} />
        <path d="M21 15a1 1 0 1 1 0 2h-6a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

MailMinusFillDuotone.displayName = 'MailMinusFillDuotone';

// Triple export pattern (lucide-react style)
export { MailMinusFillDuotone, MailMinusFillDuotone as MailMinusFillDuotoneIcon, MailMinusFillDuotone as SiMailMinusFillDuotone };
export default MailMinusFillDuotone;
export type { MailMinusFillDuotoneProps };
