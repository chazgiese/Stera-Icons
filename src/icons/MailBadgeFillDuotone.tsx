import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MailBadgeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MailBadgeFillDuotone = memo(
  forwardRef<SVGSVGElement, MailBadgeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="mail-badge-fill-duotone" {...props}>
      <path d="M2.07 7.48a1 1 0 0 0 .41.88l6.6 4.76a5 5 0 0 0 5.85 0l4.5-3.25A4.5 4.5 0 0 0 22 9.74v4.46q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H7.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q2 15.43 2 14.2V9.8q-.01-1.23.04-2.05z" opacity={.4} />
        <path d="M20.5 2.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6" />
        <path d="M16.26 4a4.5 4.5 0 0 0 3.17 5.87l-4.5 3.25a5 5 0 0 1-5.86 0L2.48 8.36a1 1 0 0 1-.4-.94q.07-.65.36-1.24a4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q6.57 4 7.8 4z" />
    </IconBase>
  ))
);

MailBadgeFillDuotone.displayName = 'MailBadgeFillDuotone';

// Triple export pattern (lucide-react style)
export { MailBadgeFillDuotone, MailBadgeFillDuotone as MailBadgeFillDuotoneIcon, MailBadgeFillDuotone as SiMailBadgeFillDuotone };
export default MailBadgeFillDuotone;
export type { MailBadgeFillDuotoneProps };
