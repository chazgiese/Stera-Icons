import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MailMinusBoldProps = Omit<IconBaseProps, 'children'>;

const MailMinusBold = memo(
  forwardRef<SVGSVGElement, MailMinusBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="mail-minus-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M19.13 3h.1l.24.03h.07A4 4 0 0 1 23 7v6a1 1 0 1 1-2 0V9.08l-5.88 4.7a5 5 0 0 1-6.24 0L3 9.08V17c0 1.1.9 2 2 2h8a1 1 0 1 1 0 2H5a4 4 0 0 1-4-4V7a4 4 0 0 1 3.46-3.96l.06-.01.25-.02h.1L4.95 3h14.18M5 5q-.14 0-.27.02a1.35 1.35 0 0 0-.62 2.39l6.02 4.81a3 3 0 0 0 3.74 0l6.02-4.81A1.35 1.35 0 0 0 19 5z" clipRule="evenodd" />
        <path fill="currentColor" d="M22 16.5a1 1 0 1 1 0 2h-7a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

MailMinusBold.displayName = 'MailMinusBold';

// Triple export pattern (lucide-react style)
export { MailMinusBold, MailMinusBold as MailMinusBoldIcon, MailMinusBold as SiMailMinusBold };
export type { MailMinusBoldProps };
