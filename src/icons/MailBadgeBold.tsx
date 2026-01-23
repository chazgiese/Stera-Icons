import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MailBadgeBoldProps = Omit<IconBaseProps, 'children'>;

const MailBadgeBold = memo(
  forwardRef<SVGSVGElement, MailBadgeBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="mail-badge-bold" {...props}>
      <path fill="currentColor" d="M16.97 3q-.46.91-.47 2H5q-.14 0-.27.02a1.35 1.35 0 0 0-.62 2.39l6.02 4.81a3 3 0 0 0 3.74 0l4.48-3.58q.95.7 2.16.83l-5.39 4.31a5 5 0 0 1-6.24 0L3 9.08V17c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V9.5q1.09-.01 2-.47V17a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V7a4 4 0 0 1 3.46-3.96l.06-.01.25-.02h.1L4.95 3z" />
        <path fill="currentColor" d="M21 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6" />
    </IconBase>
  ))
);

MailBadgeBold.displayName = 'MailBadgeBold';

// Triple export pattern (lucide-react style)
export { MailBadgeBold, MailBadgeBold as MailBadgeBoldIcon, MailBadgeBold as SiMailBadgeBold };
export default MailBadgeBold;
export type { MailBadgeBoldProps };
