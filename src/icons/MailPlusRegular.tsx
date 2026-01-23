import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MailPlusRegularProps = Omit<IconBaseProps, 'children'>;

const MailPlusRegular = memo(
  forwardRef<SVGSVGElement, MailPlusRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="mail-plus" {...props}>
      <path fill="currentColor" d="M18.5 13.25c.4 0 .75.34.75.75v2.75H22a.75.75 0 0 1 0 1.5h-2.75V21a.75.75 0 0 1-1.5 0v-2.75H15a.75.75 0 0 1 0-1.5h2.75V14c0-.41.33-.75.75-.75" />
        <path fill="currentColor" fillRule="evenodd" d="M19.16 3.25h.04l.16.02h.05l.1.01A3.75 3.75 0 0 1 22.75 7v6a.75.75 0 0 1-1.5 0V8.53q-.12.13-.27.24l-6.01 4.82a4.75 4.75 0 0 1-5.94 0L3.02 8.77q-.15-.1-.27-.24V17c0 1.24 1 2.25 2.25 2.25h8a.75.75 0 0 1 0 1.5H5A3.75 3.75 0 0 1 1.25 17V7c0-1.9 1.41-3.47 3.24-3.72h.1l.05-.01.16-.02h14.35M5 4.75q-.2 0-.37.03a1.6 1.6 0 0 0-.68 2.82l6.02 4.81c1.19.95 2.87.95 4.06 0l6.02-4.8A1.6 1.6 0 0 0 19 4.74z" clipRule="evenodd" />
    </IconBase>
  ))
);

MailPlusRegular.displayName = 'MailPlusRegular';

// Triple export pattern (lucide-react style)
export { MailPlusRegular, MailPlusRegular as MailPlusRegularIcon, MailPlusRegular as SiMailPlusRegular };
export default MailPlusRegular;
export type { MailPlusRegularProps };
