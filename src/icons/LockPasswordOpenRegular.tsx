import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LockPasswordOpenRegularProps = Omit<IconBaseProps, 'children'>;

const LockPasswordOpenRegular = memo(
  forwardRef<SVGSVGElement, LockPasswordOpenRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="lock-password-open" {...props}>
      <path fill="currentColor" d="M8.5 14.25a1 1 0 1 1 0 2 1 1 0 0 1 0-2M12 14.25a1 1 0 1 1 0 2 1 1 0 0 1 0-2M15.5 14.25a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
        <path fill="currentColor" fillRule="evenodd" d="M12 2.75c1.5 0 2.84.7 3.7 1.78a.75.75 0 1 1-1.16.94A3.24 3.24 0 0 0 8.75 7.5v1.75h5.45q1.24-.01 2.03.04c.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47q.05.8.04 2.03v.9q.01 1.24-.04 2.03a4 4 0 0 1-.37 1.47c-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.8.05-2.03.04H9.8q-1.24.01-2.03-.04a4 4 0 0 1-1.47-.37 3.8 3.8 0 0 1-1.64-1.64 4 4 0 0 1-.37-1.47q-.05-.8-.04-2.03v-.9q-.01-1.24.04-2.03c.05-.55.14-1.03.37-1.47.36-.7.93-1.28 1.64-1.64q.45-.23.95-.3V7.5A4.75 4.75 0 0 1 12 2.75m-2.2 8c-.85 0-1.45 0-1.9.04-.46.04-.72.1-.92.2q-.65.35-.98.99c-.1.2-.17.46-.21.91-.04.46-.04 1.06-.04 1.91v.9c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.35.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h4.4c.85 0 1.45 0 1.9-.04.46-.04.72-.1.92-.2q.65-.34.98-.99c.1-.2.17-.46.21-.91.04-.46.04-1.06.04-1.91v-.9c0-.85 0-1.45-.04-1.9a2 2 0 0 0-.2-.92 2.3 2.3 0 0 0-.99-.98 2 2 0 0 0-.91-.21c-.46-.04-1.06-.04-1.91-.04z" clipRule="evenodd" />
    </IconBase>
  ))
);

LockPasswordOpenRegular.displayName = 'LockPasswordOpenRegular';

// Triple export pattern (lucide-react style)
export { LockPasswordOpenRegular, LockPasswordOpenRegular as LockPasswordOpenRegularIcon, LockPasswordOpenRegular as SiLockPasswordOpenRegular };
export default LockPasswordOpenRegular;
export type { LockPasswordOpenRegularProps };
