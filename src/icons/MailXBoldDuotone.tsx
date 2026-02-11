import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MailXBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MailXBoldDuotone = memo(
  forwardRef<SVGSVGElement, MailXBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="mail-x-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M16.2 4q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v1.7a1 1 0 1 1-2 0V9.46l-5.07 3.66a5 5 0 0 1-5.86 0L4 9.46v4.74c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h4.7a1 1 0 1 1 0 2H7.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q2 15.43 2 14.2V9.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q6.57 4 7.8 4zM7.8 6c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87l-.02.04 6.04 4.37a3 3 0 0 0 3.52 0l6.04-4.37-.02-.04a2 2 0 0 0-.87-.87 2 2 0 0 0-.82-.18C17.64 6 17.06 6 16.2 6z" clipRule="evenodd" opacity={.4} />
        <path d="M20.3 14.3a1 1 0 0 1 1.4 1.4l-1.79 1.8 1.8 1.8a1 1 0 0 1-1.42 1.4l-1.79-1.79-1.8 1.8a1 1 0 0 1-1.4-1.42l1.79-1.8-1.8-1.78a1 1 0 0 1 1.42-1.42l1.79 1.8z" />
    </IconBase>
  ))
);

MailXBoldDuotone.displayName = 'MailXBoldDuotone';

// Triple export pattern (lucide-react style)
export { MailXBoldDuotone, MailXBoldDuotone as MailXBoldDuotoneIcon, MailXBoldDuotone as SiMailXBoldDuotone };
export default MailXBoldDuotone;
export type { MailXBoldDuotoneProps };
