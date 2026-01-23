import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MailFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MailFillDuotone = memo(
  forwardRef<SVGSVGElement, MailFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="mail-fill-duotone" {...props}>
      <path fill="currentColor" d="M1 6.99q0 .48.39.8l7.49 6a5 5 0 0 0 6.24 0l7.5-6q.37-.32.38-.8V17a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4z" opacity={.4} />
        <path fill="currentColor" d="M19.01 3C21.21 3 23 4.78 23 6.99c0 .3-.14.6-.39.8l-7.49 6a5 5 0 0 1-6.24 0l-7.5-6c-.24-.2-.38-.5-.38-.8C1 4.79 2.78 3 4.99 3z" />
    </IconBase>
  ))
);

MailFillDuotone.displayName = 'MailFillDuotone';

// Triple export pattern (lucide-react style)
export { MailFillDuotone, MailFillDuotone as MailFillDuotoneIcon, MailFillDuotone as SiMailFillDuotone };
export default MailFillDuotone;
export type { MailFillDuotoneProps };
