import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LockPasswordBoldProps = Omit<IconBaseProps, 'children'>;

const LockPasswordBold = memo(
  forwardRef<SVGSVGElement, LockPasswordBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="lock-password-bold" {...props}>
      <path fill="currentColor" d="M8 14.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 14.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M16 14.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a6 6 0 0 1 6 6v2.15q.42.09.82.29a4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v2.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H8.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q3 18.43 3 17.2v-2.4q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74q.4-.2.82-.29V7a6 6 0 0 1 6-6M8.8 11c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87c-.08.16-.15.38-.18.82C5 13.36 5 13.94 5 14.8v2.4c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h6.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18a2 2 0 0 0 .87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89v-2.4c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82a2 2 0 0 0-.87-.87 2 2 0 0 0-.82-.18C16.64 11 16.06 11 15.2 11zM12 3a4 4 0 0 0-4 4v2h8V7a4 4 0 0 0-4-4" clipRule="evenodd" />
    </IconBase>
  ))
);

LockPasswordBold.displayName = 'LockPasswordBold';

// Triple export pattern (lucide-react style)
export { LockPasswordBold, LockPasswordBold as LockPasswordBoldIcon, LockPasswordBold as SiLockPasswordBold };
export type { LockPasswordBoldProps };
