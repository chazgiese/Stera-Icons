import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MailMinusFillProps = Omit<IconBaseProps, 'children'>;

const MailMinusFill = memo(
  forwardRef<SVGSVGElement, MailMinusFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="mail-minus-fill" {...props}>
      <path fill="currentColor" d="M19 3a4 4 0 0 1 4 4v6a1 1 0 1 1-2 0V8.76l-.02.01-6.01 4.82a4.75 4.75 0 0 1-5.94 0L3.02 8.77 3 8.76V17c0 1.1.9 2 2 2h8a1 1 0 1 1 0 2H5a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4z" />
        <path fill="currentColor" d="M22 16.5a1 1 0 1 1 0 2h-7a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

MailMinusFill.displayName = 'MailMinusFill';

// Triple export pattern (lucide-react style)
export { MailMinusFill, MailMinusFill as MailMinusFillIcon, MailMinusFill as SiMailMinusFill };
export type { MailMinusFillProps };
