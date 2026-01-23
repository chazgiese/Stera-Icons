import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LockOpenFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LockOpenFillDuotone = memo(
  forwardRef<SVGSVGElement, LockOpenFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="lock-open-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15.2 9q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v2.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H8.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q3 18.43 3 17.2v-2.4q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q7.57 9 8.8 9zM12 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 14a2 2 0 1 1 0 4 2 2 0 0 1 0-4M12 1a6 6 0 0 1 4.8 2.4 1 1 0 0 1-1.6 1.2A4 4 0 0 0 8 7v2q-.72 0-1.25.04-.38.04-.75.11V7a6 6 0 0 1 6-6" />
    </IconBase>
  ))
);

LockOpenFillDuotone.displayName = 'LockOpenFillDuotone';

// Triple export pattern (lucide-react style)
export { LockOpenFillDuotone, LockOpenFillDuotone as LockOpenFillDuotoneIcon, LockOpenFillDuotone as SiLockOpenFillDuotone };
export default LockOpenFillDuotone;
export type { LockOpenFillDuotoneProps };
