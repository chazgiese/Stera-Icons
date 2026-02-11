import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LockFillProps = Omit<IconBaseProps, 'children'>;

const LockFill = memo(
  forwardRef<SVGSVGElement, LockFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="lock-fill" {...props}>
      <path fillRule="evenodd" d="M12 2.5a5 5 0 0 1 5 5v1.65q.42.09.82.29a4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v.9q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H9.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q4 16.93 4 15.7v-.9q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74q.4-.2.82-.29V7.5a5 5 0 0 1 5-5m0 11a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m0-9a3 3 0 0 0-3 3V9h6V7.5a3 3 0 0 0-3-3" clipRule="evenodd" />
    </IconBase>
  ))
);

LockFill.displayName = 'LockFill';

// Triple export pattern (lucide-react style)
export { LockFill, LockFill as LockFillIcon, LockFill as SiLockFill };
export default LockFill;
export type { LockFillProps };
