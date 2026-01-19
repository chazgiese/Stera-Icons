import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MailBadgeRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MailBadgeRegularDuotone = memo(
  forwardRef<SVGSVGElement, MailBadgeRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="mail-badge-duotone" {...props}>
      <path fill="currentColor" d="M24 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
        <path fill="currentColor" d="M16.85 3.25q-.3.7-.34 1.5H4.99c-1.13 0-2.06.83-2.21 1.91l7.19 5.75c1.19.95 2.87.95 4.06 0l4.54-3.63q.73.47 1.6.64l-5.2 4.17a4.75 4.75 0 0 1-5.94 0l-7.49-6a.8.8 0 0 1-.29-.6 3.74 3.74 0 0 1 3.74-3.74z" />
        <path fill="currentColor" d="M1.25 6.99c0 .23.1.46.3.6l1.2.97V17c0 1.24 1 2.25 2.25 2.25h14c1.24 0 2.25-1 2.25-2.25V9.5a5 5 0 0 0 1.5-.35V17A3.75 3.75 0 0 1 19 20.75H5A3.75 3.75 0 0 1 1.25 17z" opacity={.4} />
    </IconBase>
  ))
);

MailBadgeRegularDuotone.displayName = 'MailBadgeRegularDuotone';

// Triple export pattern (lucide-react style)
export { MailBadgeRegularDuotone, MailBadgeRegularDuotone as MailBadgeRegularDuotoneIcon, MailBadgeRegularDuotone as SiMailBadgeRegularDuotone };
export default MailBadgeRegularDuotone;
export type { MailBadgeRegularDuotoneProps };
