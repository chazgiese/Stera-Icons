import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MailRegularProps = Omit<IconBaseProps, 'children'>;

const MailRegular = memo(
  forwardRef<SVGSVGElement, MailRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="mail" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M19.16 3.25h.04l.16.02h.05l.1.01A3.75 3.75 0 0 1 22.75 7v10A3.75 3.75 0 0 1 19 20.75H5A3.75 3.75 0 0 1 1.25 17V7c0-1.9 1.41-3.47 3.24-3.72h.1l.05-.01.16-.02h14.35m2.09 5.28q-.12.13-.27.24l-6.01 4.82a4.75 4.75 0 0 1-5.94 0L3.02 8.77q-.15-.1-.27-.24V17c0 1.24 1 2.25 2.25 2.25h14c1.24 0 2.25-1 2.25-2.25zM5 4.75q-.2 0-.37.03a1.6 1.6 0 0 0-.68 2.82l6.02 4.81c1.19.95 2.87.95 4.06 0l6.02-4.8A1.6 1.6 0 0 0 19 4.74z" clipRule="evenodd" />
    </IconBase>
  ))
);

MailRegular.displayName = 'MailRegular';

// Triple export pattern (lucide-react style)
export { MailRegular, MailRegular as MailRegularIcon, MailRegular as SiMailRegular };
export default MailRegular;
export type { MailRegularProps };
