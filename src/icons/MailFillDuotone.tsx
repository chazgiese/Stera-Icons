import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MailFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MailFillDuotone = memo(
  forwardRef<SVGSVGElement, MailFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="mail-fill-duotone" {...props}>
      <path d="M2.2 7.48c-.02.3.1.6.36.78l6.59 4.76c1.7 1.23 4 1.23 5.7 0l6.6-4.76a.9.9 0 0 0 .35-.76l.03.26q.06.81.05 2.04v4.4q.01 1.24-.05 2.04a4 4 0 0 1-.38 1.52 4 4 0 0 1-1.7 1.7q-.68.33-1.5.37-.81.06-2.05.05H7.8q-1.24.01-2.04-.05a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.7-1.69 4 4 0 0 1-.37-1.52q-.06-.8-.04-2.04V9.8q-.01-1.23.04-2.04 0-.15.03-.28" opacity={.4} />
        <path d="M16.2 4.13q1.24-.01 2.04.04c.56.04 1.06.14 1.52.38q1.11.57 1.7 1.7.26.55.34 1.19c.04.32-.1.63-.36.82l-6.59 4.76a4.9 4.9 0 0 1-5.7 0l-6.6-4.76a.9.9 0 0 1-.35-.82q.08-.64.35-1.2.57-1.11 1.7-1.7.68-.33 1.5-.37.82-.06 2.05-.04z" />
    </IconBase>
  ))
);

MailFillDuotone.displayName = 'MailFillDuotone';

// Triple export pattern (lucide-react style)
export { MailFillDuotone, MailFillDuotone as MailFillDuotoneIcon, MailFillDuotone as SiMailFillDuotone };
export default MailFillDuotone;
export type { MailFillDuotoneProps };
