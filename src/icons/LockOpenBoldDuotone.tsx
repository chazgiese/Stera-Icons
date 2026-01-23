import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LockOpenBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const LockOpenBoldDuotone = memo(
  forwardRef<SVGSVGElement, LockOpenBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="lock-open-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15.2 9q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v2.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H8.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q3 18.43 3 17.2v-2.4q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q7.57 9 8.8 9zm-6.4 2c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87c-.08.16-.15.38-.18.82C5 13.36 5 13.94 5 14.8v2.4c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h6.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18a2 2 0 0 0 .87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89v-2.4c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82a2 2 0 0 0-.87-.87 2 2 0 0 0-.82-.18C16.64 11 16.06 11 15.2 11z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 14a2 2 0 1 1 0 4 2 2 0 0 1 0-4M12 1a6 6 0 0 1 4.8 2.4 1 1 0 0 1-1.6 1.2A4 4 0 0 0 8 7v2q-.72 0-1.25.04-.38.04-.75.11V7a6 6 0 0 1 6-6" />
    </IconBase>
  ))
);

LockOpenBoldDuotone.displayName = 'LockOpenBoldDuotone';

// Triple export pattern (lucide-react style)
export { LockOpenBoldDuotone, LockOpenBoldDuotone as LockOpenBoldDuotoneIcon, LockOpenBoldDuotone as SiLockOpenBoldDuotone };
export default LockOpenBoldDuotone;
export type { LockOpenBoldDuotoneProps };
