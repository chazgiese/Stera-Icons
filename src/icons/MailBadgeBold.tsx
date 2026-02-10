import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MailBadgeBoldProps = Omit<IconBaseProps, 'children'>;

const MailBadgeBold = memo(
  forwardRef<SVGSVGElement, MailBadgeBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="mail-badge-bold" {...props}>
      <path fill="currentColor" d="M15.5 4a1 1 0 1 1 0 2H7.8c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87l-.02.04 6.04 4.37a3 3 0 0 0 3.52 0l3.52-2.55a1 1 0 1 1 1.17 1.62l-3.52 2.55a5 5 0 0 1-5.86 0L4 9.46v4.74c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h8.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18a2 2 0 0 0 .87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89v-3.7a1 1 0 1 1 2 0v3.7q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H7.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q2 15.43 2 14.2V9.8c0-.98 0-1.76.08-2.38a3.7 3.7 0 0 1 2.1-2.98c.49-.25 1-.35 1.57-.4Q6.57 4 7.8 4z" />
        <path fill="currentColor" d="M20.5 2.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6" />
    </IconBase>
  ))
);

MailBadgeBold.displayName = 'MailBadgeBold';

// Triple export pattern (lucide-react style)
export { MailBadgeBold, MailBadgeBold as MailBadgeBoldIcon, MailBadgeBold as SiMailBadgeBold };
export default MailBadgeBold;
export type { MailBadgeBoldProps };
