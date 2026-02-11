import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LockOpenRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const LockOpenRegularDuotone = memo(
  forwardRef<SVGSVGElement, LockOpenRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="lock-open-duotone" {...props}>
      <path fillRule="evenodd" d="M15.2 9.25q1.24-.01 2.03.04c.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47q.05.8.04 2.03v2.4q.01 1.24-.04 2.03a4 4 0 0 1-.37 1.47c-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.8.05-2.03.04H8.8q-1.24.01-2.03-.04a4 4 0 0 1-1.47-.37 3.8 3.8 0 0 1-1.64-1.64 4 4 0 0 1-.37-1.47q-.05-.8-.04-2.03v-2.4q-.01-1.24.04-2.03c.05-.55.14-1.03.37-1.47.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37q.8-.05 2.03-.04zm-6.4 1.5c-.85 0-1.45 0-1.9.04-.46.04-.72.1-.92.2q-.65.35-.98.99c-.1.2-.17.46-.21.91-.04.46-.04 1.06-.04 1.91v2.4c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.35.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h6.4c.85 0 1.45 0 1.9-.04.46-.04.72-.1.92-.2q.65-.34.98-.99c.1-.2.17-.46.21-.91.04-.46.04-1.06.04-1.91v-2.4c0-.85 0-1.45-.04-1.9a2 2 0 0 0-.2-.92 2.3 2.3 0 0 0-.99-.98 2 2 0 0 0-.91-.21c-.46-.04-1.06-.04-1.91-.04z" clipRule="evenodd" opacity={.4} />
        <path d="M13.5 16a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M12 1.25c1.88 0 3.55.9 4.6 2.3a.75.75 0 1 1-1.2.9A4.24 4.24 0 0 0 7.75 7v2.25a15 15 0 0 0-1.5.1V7A5.75 5.75 0 0 1 12 1.25" />
    </IconBase>
  ))
);

LockOpenRegularDuotone.displayName = 'LockOpenRegularDuotone';

// Triple export pattern (lucide-react style)
export { LockOpenRegularDuotone, LockOpenRegularDuotone as LockOpenRegularDuotoneIcon, LockOpenRegularDuotone as SiLockOpenRegularDuotone };
export default LockOpenRegularDuotone;
export type { LockOpenRegularDuotoneProps };
