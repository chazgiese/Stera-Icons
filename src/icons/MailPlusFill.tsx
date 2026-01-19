import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MailPlusFillProps = Omit<IconBaseProps, 'children'>;

const MailPlusFill = memo(
  forwardRef<SVGSVGElement, MailPlusFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="mail-plus-fill" {...props}>
      <path fill="currentColor" d="M18.5 13a1 1 0 0 1 1 1v2.5H22a1 1 0 1 1 0 2h-2.5V21a1 1 0 0 1-2 0v-2.5H15a1 1 0 0 1 0-2h2.5V14a1 1 0 0 1 1-1" />
        <path fill="currentColor" d="M19 3a4 4 0 0 1 4 4v6a1 1 0 1 1-2 0V8.76l-.02.01-6.01 4.82a4.75 4.75 0 0 1-5.94 0L3.02 8.77 3 8.76V17c0 1.1.9 2 2 2h8a1 1 0 1 1 0 2H5a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4z" />
    </IconBase>
  ))
);

MailPlusFill.displayName = 'MailPlusFill';

// Triple export pattern (lucide-react style)
export { MailPlusFill, MailPlusFill as MailPlusFillIcon, MailPlusFill as SiMailPlusFill };
export type { MailPlusFillProps };
