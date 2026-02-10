import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LockPasswordFillProps = Omit<IconBaseProps, 'children'>;

const LockPasswordFill = memo(
  forwardRef<SVGSVGElement, LockPasswordFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="lock-password-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2.5a5 5 0 0 1 5 5v1.65q.42.09.82.29a4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v.9q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H9.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q4 16.93 4 15.7v-.9q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74q.4-.2.82-.29V7.5a5 5 0 0 1 5-5M8.5 14a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m3.5 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m3.5 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M12 4.5a3 3 0 0 0-3 3V9h6V7.5a3 3 0 0 0-3-3" clipRule="evenodd" />
    </IconBase>
  ))
);

LockPasswordFill.displayName = 'LockPasswordFill';

// Triple export pattern (lucide-react style)
export { LockPasswordFill, LockPasswordFill as LockPasswordFillIcon, LockPasswordFill as SiLockPasswordFill };
export default LockPasswordFill;
export type { LockPasswordFillProps };
