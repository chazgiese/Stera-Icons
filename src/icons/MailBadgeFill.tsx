import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MailBadgeFillProps = Omit<IconBaseProps, 'children'>;

const MailBadgeFill = memo(
  forwardRef<SVGSVGElement, MailBadgeFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="mail-badge-fill" {...props}>
      <path d="M8.53 12.73a5.9 5.9 0 0 0 6.94 0l3.7-2.67A4.8 4.8 0 0 0 22 10v4.19q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H7.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q2 15.43 2 14.2V9.8q0-1.03.03-1.77z" />
        <path d="M16 4a4.7 4.7 0 0 0 1.26 4.97L14.3 11.1a3.9 3.9 0 0 1-4.6 0L2.56 5.95a4 4 0 0 1 1.62-1.51c.49-.25 1-.35 1.57-.4Q6.57 4 7.8 4zM20.5 2.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6" />
    </IconBase>
  ))
);

MailBadgeFill.displayName = 'MailBadgeFill';

// Triple export pattern (lucide-react style)
export { MailBadgeFill, MailBadgeFill as MailBadgeFillIcon, MailBadgeFill as SiMailBadgeFill };
export default MailBadgeFill;
export type { MailBadgeFillProps };
