import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LockPasswordFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LockPasswordFillDuotone = memo(
  forwardRef<SVGSVGElement, LockPasswordFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="lock-password-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M14.2 9q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v.9q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H9.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q4 16.93 4 15.7v-.9q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q8.57 9 9.8 9zm-5.7 5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m3.5 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m3.5 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M8.5 14a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 14a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M15.5 14a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 2.5a5 5 0 0 1 5 5v1.65a6 6 0 0 0-.75-.1Q15.72 9 15 9V7.5a3 3 0 1 0-6 0V9q-.72 0-1.25.04-.38.04-.75.11V7.5a5 5 0 0 1 5-5" />
    </IconBase>
  ))
);

LockPasswordFillDuotone.displayName = 'LockPasswordFillDuotone';

// Triple export pattern (lucide-react style)
export { LockPasswordFillDuotone, LockPasswordFillDuotone as LockPasswordFillDuotoneIcon, LockPasswordFillDuotone as SiLockPasswordFillDuotone };
export default LockPasswordFillDuotone;
export type { LockPasswordFillDuotoneProps };
