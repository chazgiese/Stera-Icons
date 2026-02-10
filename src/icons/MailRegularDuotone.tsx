import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MailRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MailRegularDuotone = memo(
  forwardRef<SVGSVGElement, MailRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="mail-duotone" {...props}>
      <path fill="currentColor" d="M2.08 7.42a1 1 0 0 0 .4.94L4 9.46v4.74c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h8.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18a2 2 0 0 0 .87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89V9.46l1.52-1.1a1 1 0 0 0 .4-.92q.1.92.08 2.36v4.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H7.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q2 15.43 2 14.2V9.8c0-.98 0-1.76.08-2.38" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M16.2 4q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74q.29.59.36 1.24a1 1 0 0 1-.4.94l-6.6 4.76a5 5 0 0 1-5.85 0L2.48 8.36a1 1 0 0 1-.4-.94q.07-.65.36-1.24a4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q6.57 4 7.8 4zM7.8 6c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18a2 2 0 0 0-.9.91l6.05 4.37a3 3 0 0 0 3.52 0l6.04-4.37-.02-.04a2 2 0 0 0-.87-.87 2 2 0 0 0-.82-.18C17.64 6 17.06 6 16.2 6z" clipRule="evenodd" />
    </IconBase>
  ))
);

MailRegularDuotone.displayName = 'MailRegularDuotone';

// Triple export pattern (lucide-react style)
export { MailRegularDuotone, MailRegularDuotone as MailRegularDuotoneIcon, MailRegularDuotone as SiMailRegularDuotone };
export default MailRegularDuotone;
export type { MailRegularDuotoneProps };
