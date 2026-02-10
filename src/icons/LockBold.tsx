import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LockBoldProps = Omit<IconBaseProps, 'children'>;

const LockBold = memo(
  forwardRef<SVGSVGElement, LockBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="lock-bold" {...props}>
      <path fill="currentColor" d="M12 13.25a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
        <path fill="currentColor" fillRule="evenodd" d="M12 2.5a5 5 0 0 1 5 5v1.65q.42.09.82.29a4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v.9q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H9.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q4 16.93 4 15.7v-.9q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74q.4-.2.82-.29V7.5a5 5 0 0 1 5-5M9.8 11c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87c-.08.16-.15.38-.18.82C6 13.36 6 13.94 6 14.8v.9c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h4.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18a2 2 0 0 0 .87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89v-.9c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82a2 2 0 0 0-.87-.87 2 2 0 0 0-.82-.18C15.64 11 15.06 11 14.2 11zM12 4.5a3 3 0 0 0-3 3V9h6V7.5a3 3 0 0 0-3-3" clipRule="evenodd" />
    </IconBase>
  ))
);

LockBold.displayName = 'LockBold';

// Triple export pattern (lucide-react style)
export { LockBold, LockBold as LockBoldIcon, LockBold as SiLockBold };
export default LockBold;
export type { LockBoldProps };
