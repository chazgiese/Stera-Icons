import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LockPasswordOpenBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const LockPasswordOpenBoldDuotone = memo(
  forwardRef<SVGSVGElement, LockPasswordOpenBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="lock-password-open-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M14.2 9q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v.9q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H9.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q4 16.93 4 15.7v-.9q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q8.57 9 9.8 9zm-4.4 2c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87c-.08.16-.15.38-.18.82C6 13.36 6 13.94 6 14.8v.9c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h4.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18a2 2 0 0 0 .87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89v-.9c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82a2 2 0 0 0-.87-.87 2 2 0 0 0-.82-.18C15.64 11 15.06 11 14.2 11z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M8.5 14a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 14a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M15.5 14a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 2.5a5 5 0 0 1 3.9 1.88 1 1 0 0 1-1.56 1.25A3 3 0 0 0 9 7.5V9q-.72 0-1.25.04-.38.04-.75.11V7.5a5 5 0 0 1 5-5" />
    </IconBase>
  ))
);

LockPasswordOpenBoldDuotone.displayName = 'LockPasswordOpenBoldDuotone';

// Triple export pattern (lucide-react style)
export { LockPasswordOpenBoldDuotone, LockPasswordOpenBoldDuotone as LockPasswordOpenBoldDuotoneIcon, LockPasswordOpenBoldDuotone as SiLockPasswordOpenBoldDuotone };
export default LockPasswordOpenBoldDuotone;
export type { LockPasswordOpenBoldDuotoneProps };
