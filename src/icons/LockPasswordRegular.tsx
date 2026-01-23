import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LockPasswordRegularProps = Omit<IconBaseProps, 'children'>;

const LockPasswordRegular = memo(
  forwardRef<SVGSVGElement, LockPasswordRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="lock-password" {...props}>
      <path fill="currentColor" d="M8 14.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 14.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M16 14.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1.25A5.75 5.75 0 0 1 17.75 7v2.36q.5.08.95.3c.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47q.05.8.04 2.03v2.4q.01 1.24-.04 2.03a4 4 0 0 1-.37 1.47c-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.8.05-2.03.04H8.8q-1.24.01-2.03-.04a4 4 0 0 1-1.47-.37 3.8 3.8 0 0 1-1.64-1.64 4 4 0 0 1-.37-1.47q-.05-.8-.04-2.03v-2.4q-.01-1.24.04-2.03c.05-.55.14-1.03.37-1.47.36-.7.93-1.28 1.64-1.64q.45-.23.95-.3V7A5.75 5.75 0 0 1 12 1.25m-3.2 9.5c-.85 0-1.45 0-1.9.04-.46.04-.72.1-.92.2q-.65.35-.98.99c-.1.2-.17.46-.21.91-.04.46-.04 1.06-.04 1.91v2.4c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.35.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h6.4c.85 0 1.45 0 1.9-.04.46-.04.72-.1.92-.2q.65-.34.98-.99c.1-.2.17-.46.21-.91.04-.46.04-1.06.04-1.91v-2.4c0-.85 0-1.45-.04-1.9a2 2 0 0 0-.2-.92 2.3 2.3 0 0 0-.99-.98 2 2 0 0 0-.91-.21c-.46-.04-1.06-.04-1.91-.04zm3.2-8A4.25 4.25 0 0 0 7.75 7v2.25h8.5V7c0-2.35-1.9-4.25-4.25-4.25" clipRule="evenodd" />
    </IconBase>
  ))
);

LockPasswordRegular.displayName = 'LockPasswordRegular';

// Triple export pattern (lucide-react style)
export { LockPasswordRegular, LockPasswordRegular as LockPasswordRegularIcon, LockPasswordRegular as SiLockPasswordRegular };
export default LockPasswordRegular;
export type { LockPasswordRegularProps };
