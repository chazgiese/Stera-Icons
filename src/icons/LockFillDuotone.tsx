import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LockFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LockFillDuotone = memo(
  forwardRef<SVGSVGElement, LockFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="lock-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M14.2 9q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v.9q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H9.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q4 16.93 4 15.7v-.9q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q8.57 9 9.8 9zM12 13.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" clipRule="evenodd" opacity={.4} />
        <path d="M12 13.5a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5M12 2.5a5 5 0 0 1 5 5v1.65a6 6 0 0 0-.75-.1Q15.72 9 15 9V7.5a3 3 0 1 0-6 0V9q-.72 0-1.25.04-.38.04-.75.11V7.5a5 5 0 0 1 5-5" />
    </IconBase>
  ))
);

LockFillDuotone.displayName = 'LockFillDuotone';

// Triple export pattern (lucide-react style)
export { LockFillDuotone, LockFillDuotone as LockFillDuotoneIcon, LockFillDuotone as SiLockFillDuotone };
export default LockFillDuotone;
export type { LockFillDuotoneProps };
