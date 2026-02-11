import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MailMinusBoldProps = Omit<IconBaseProps, 'children'>;

const MailMinusBold = memo(
  forwardRef<SVGSVGElement, MailMinusBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="mail-minus-bold" {...props}>
      <path fillRule="evenodd" d="M16.2 4q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v2.7a1 1 0 1 1-2 0V9.46l-5.07 3.66a5 5 0 0 1-5.86 0L4 9.46v4.74c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04H13a1 1 0 1 1 0 2H7.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q2 15.43 2 14.2V9.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q6.57 4 7.8 4zM7.8 6c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87l-.02.04 6.04 4.37a3 3 0 0 0 3.52 0l6.04-4.37-.02-.04a2 2 0 0 0-.87-.87 2 2 0 0 0-.82-.18C17.64 6 17.06 6 16.2 6z" clipRule="evenodd" />
        <path d="M21 15a1 1 0 1 1 0 2h-6a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

MailMinusBold.displayName = 'MailMinusBold';

// Triple export pattern (lucide-react style)
export { MailMinusBold, MailMinusBold as MailMinusBoldIcon, MailMinusBold as SiMailMinusBold };
export default MailMinusBold;
export type { MailMinusBoldProps };
