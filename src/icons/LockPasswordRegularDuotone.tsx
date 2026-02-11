import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LockPasswordRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const LockPasswordRegularDuotone = memo(
  forwardRef<SVGSVGElement, LockPasswordRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="lock-password-duotone" {...props}>
      <path fillRule="evenodd" d="M14.2 9.25q1.24-.01 2.03.04c.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47q.05.8.04 2.03v.9q.01 1.24-.04 2.03a4 4 0 0 1-.37 1.47c-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.8.05-2.03.04H9.8q-1.24.01-2.03-.04a4 4 0 0 1-1.47-.37 3.8 3.8 0 0 1-1.64-1.64 4 4 0 0 1-.37-1.47q-.05-.8-.04-2.03v-.9q-.01-1.24.04-2.03c.05-.55.14-1.03.37-1.47.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37q.8-.05 2.03-.04zm-4.4 1.5c-.85 0-1.45 0-1.9.04-.46.04-.72.1-.92.2q-.65.35-.98.99c-.1.2-.17.46-.21.91-.04.46-.04 1.06-.04 1.91v.9c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.35.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h4.4c.85 0 1.45 0 1.9-.04.46-.04.72-.1.92-.2q.65-.34.98-.99c.1-.2.17-.46.21-.91.04-.46.04-1.06.04-1.91v-.9c0-.85 0-1.45-.04-1.9a2 2 0 0 0-.2-.92 2.3 2.3 0 0 0-.99-.98 2 2 0 0 0-.91-.21c-.46-.04-1.06-.04-1.91-.04z" clipRule="evenodd" opacity={.4} />
        <path d="M8.5 14.25a1 1 0 1 1 0 2 1 1 0 0 1 0-2M12 14.25a1 1 0 1 1 0 2 1 1 0 0 1 0-2M15.5 14.25a1 1 0 1 1 0 2 1 1 0 0 1 0-2M12 2.75a4.75 4.75 0 0 1 4.75 4.75v1.86l-.52-.07-.98-.04V7.5a3.25 3.25 0 0 0-6.5 0v1.75a15 15 0 0 0-1.5.1V7.5A4.75 4.75 0 0 1 12 2.75" />
    </IconBase>
  ))
);

LockPasswordRegularDuotone.displayName = 'LockPasswordRegularDuotone';

// Triple export pattern (lucide-react style)
export { LockPasswordRegularDuotone, LockPasswordRegularDuotone as LockPasswordRegularDuotoneIcon, LockPasswordRegularDuotone as SiLockPasswordRegularDuotone };
export default LockPasswordRegularDuotone;
export type { LockPasswordRegularDuotoneProps };
