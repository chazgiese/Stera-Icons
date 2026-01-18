import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MailBadgeRegularProps = Omit<IconBaseProps, 'children'>;

const MailBadgeRegular = memo(
  forwardRef<SVGSVGElement, MailBadgeRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M16.85 3.25q-.3.7-.34 1.5H5q-.2 0-.37.03a1.6 1.6 0 0 0-.68 2.82l6.02 4.81c1.19.95 2.87.95 4.06 0l4.54-3.63q.73.47 1.6.64l-5.2 4.17a4.75 4.75 0 0 1-5.94 0L3.02 8.77q-.15-.1-.27-.24V17c0 1.24 1 2.25 2.25 2.25h14c1.24 0 2.25-1 2.25-2.25V9.5a5 5 0 0 0 1.5-.35V17A3.75 3.75 0 0 1 19 20.75H5A3.75 3.75 0 0 1 1.25 17V7c0-1.9 1.41-3.47 3.24-3.72h.1l.05-.01.16-.02h12.05" />
        <path fill="currentColor" d="M21 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6" />
    </IconBase>
  ))
);

MailBadgeRegular.displayName = 'MailBadgeRegular';

// Triple export pattern (lucide-react style)
export { MailBadgeRegular, MailBadgeRegular as MailBadgeRegularIcon, MailBadgeRegular as SiMailBadgeRegular };
export type { MailBadgeRegularProps };
