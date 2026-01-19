import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LockPasswordFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LockPasswordFillDuotone = memo(
  forwardRef<SVGSVGElement, LockPasswordFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="lock-password-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15.2 9q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v2.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H8.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q3 18.43 3 17.2v-2.4q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q7.57 9 8.8 9zM8 14.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m4 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m4 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M8 14.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 14.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M16 14.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a6 6 0 0 1 6 6v2.15a6 6 0 0 0-.75-.1Q16.72 9 16 9V7a4 4 0 0 0-8 0v2q-.72 0-1.25.04-.38.04-.75.11V7a6 6 0 0 1 6-6" clipRule="evenodd" />
    </IconBase>
  ))
);

LockPasswordFillDuotone.displayName = 'LockPasswordFillDuotone';

// Triple export pattern (lucide-react style)
export { LockPasswordFillDuotone, LockPasswordFillDuotone as LockPasswordFillDuotoneIcon, LockPasswordFillDuotone as SiLockPasswordFillDuotone };
export default LockPasswordFillDuotone;
export type { LockPasswordFillDuotoneProps };
