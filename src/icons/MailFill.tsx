import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MailFillProps = Omit<IconBaseProps, 'children'>;

const MailFill = memo(
  forwardRef<SVGSVGElement, MailFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="mail-fill" {...props}>
      <path d="M21.84 7.97q.04.74.04 1.83v4.4q.01 1.24-.05 2.04a4 4 0 0 1-.38 1.52 4 4 0 0 1-1.7 1.7q-.68.33-1.5.37-.81.06-2.05.05H7.8q-1.24.01-2.04-.05a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.7-1.7 4 4 0 0 1-.37-1.5q-.06-.82-.04-2.05V9.8q0-1.08.03-1.83l6.45 4.66a5.8 5.8 0 0 0 6.78 0z" />
        <path d="M16.2 4.13q1.24-.01 2.04.04c.56.04 1.05.14 1.52.38q1.06.54 1.63 1.59l-7.02 5.07a4.05 4.05 0 0 1-4.74 0L2.61 6.14c.37-.68.94-1.24 1.63-1.6q.7-.33 1.52-.37.8-.06 2.04-.04z" />
    </IconBase>
  ))
);

MailFill.displayName = 'MailFill';

// Triple export pattern (lucide-react style)
export { MailFill, MailFill as MailFillIcon, MailFill as SiMailFill };
export default MailFill;
export type { MailFillProps };
