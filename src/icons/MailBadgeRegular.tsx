import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MailBadgeRegularProps = Omit<IconBaseProps, 'children'>;

const MailBadgeRegular = memo(
  forwardRef<SVGSVGElement, MailBadgeRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="mail-badge" {...props}>
      <path d="M15.5 4.25a.75.75 0 0 1 0 1.5H7.8c-.85 0-1.45 0-1.9.04-.46.04-.72.1-.92.2A2.3 2.3 0 0 0 3.9 7.23l6.2 4.48c1.13.82 2.67.82 3.8 0l3.53-2.55a.75.75 0 0 1 .88 1.22l-3.53 2.55a4.75 4.75 0 0 1-5.56 0L3.75 8.97v5.23c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.35.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h8.4c.85 0 1.45 0 1.9-.04.46-.04.72-.1.92-.2q.65-.34.98-.99c.1-.2.17-.46.21-.91.04-.46.04-1.06.04-1.91v-3.7a.75.75 0 0 1 1.5 0v3.7q.01 1.24-.04 2.03a4 4 0 0 1-.37 1.47c-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.8.05-2.03.04H7.8q-1.24.01-2.03-.04a4 4 0 0 1-1.47-.37 3.8 3.8 0 0 1-1.64-1.64 4 4 0 0 1-.37-1.47q-.05-.8-.04-2.03V9.8c0-.98 0-1.75.08-2.35q.07-.63.33-1.15c.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37q.8-.05 2.03-.04z" />
        <path d="M20.5 2.75a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5" />
    </IconBase>
  ))
);

MailBadgeRegular.displayName = 'MailBadgeRegular';

// Triple export pattern (lucide-react style)
export { MailBadgeRegular, MailBadgeRegular as MailBadgeRegularIcon, MailBadgeRegular as SiMailBadgeRegular };
export default MailBadgeRegular;
export type { MailBadgeRegularProps };
