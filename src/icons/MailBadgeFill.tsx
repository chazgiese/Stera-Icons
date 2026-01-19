import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MailBadgeFillProps = Omit<IconBaseProps, 'children'>;

const MailBadgeFill = memo(
  forwardRef<SVGSVGElement, MailBadgeFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="mail-badge-fill" {...props}>
      <path fill="currentColor" d="m1.38 7.78 7.5 6a5 5 0 0 0 6.24 0l5.39-4.3A4.6 4.6 0 0 0 23 9.02V17a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V7.5z" />
        <path fill="currentColor" d="M16.97 3a4.5 4.5 0 0 0 1.38 5.64l-4.48 3.58a3 3 0 0 1-3.74 0l-7.5-6-.02-.01-.01-.01-1.22-.91A4 4 0 0 1 5 3zM21 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6" />
    </IconBase>
  ))
);

MailBadgeFill.displayName = 'MailBadgeFill';

// Triple export pattern (lucide-react style)
export { MailBadgeFill, MailBadgeFill as MailBadgeFillIcon, MailBadgeFill as SiMailBadgeFill };
export type { MailBadgeFillProps };
