import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MailXFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MailXFillDuotone = memo(
  forwardRef<SVGSVGElement, MailXFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M19.13 3h.1l.24.03h.07A4 4 0 0 1 23 7v5.5a1 1 0 1 1-2 0V9.08l-5.88 4.7a5 5 0 0 1-6.24 0L3 9.08V17c0 1.1.9 2 2 2h8.5a1 1 0 1 1 0 2H5a4 4 0 0 1-4-4V7a4 4 0 0 1 3.46-3.96l.06-.01.25-.02h.1L4.95 3h14.18" opacity={.4} />
        <path fill="currentColor" d="M21.3 15.3a1 1 0 0 1 1.4 1.4l-1.79 1.8 1.8 1.8a1 1 0 0 1-1.42 1.4l-1.79-1.79-1.8 1.8a1 1 0 0 1-1.4-1.42l1.79-1.8-1.8-1.78a1 1 0 0 1 1.42-1.42l1.79 1.8z" />
    </IconBase>
  ))
);

MailXFillDuotone.displayName = 'MailXFillDuotone';

export { MailXFillDuotone };
export type { MailXFillDuotoneProps };
