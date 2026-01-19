import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MailBoldProps = Omit<IconBaseProps, 'children'>;

const MailBold = memo(
  forwardRef<SVGSVGElement, MailBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="mail-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M19.13 3h.1l.24.03h.07A4 4 0 0 1 23 7v10a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V7a4 4 0 0 1 3.46-3.96l.06-.01.25-.02h.1L4.95 3h14.18m-4 10.78a5 5 0 0 1-6.25 0L3 9.08V17c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V9.08zM5 5q-.14 0-.27.02a1.35 1.35 0 0 0-.62 2.39l6.02 4.81a3 3 0 0 0 3.74 0l6.02-4.81A1.35 1.35 0 0 0 19 5z" clipRule="evenodd" />
    </IconBase>
  ))
);

MailBold.displayName = 'MailBold';

// Triple export pattern (lucide-react style)
export { MailBold, MailBold as MailBoldIcon, MailBold as SiMailBold };
export default MailBold;
export type { MailBoldProps };
