import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UsersBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const UsersBoldDuotone = memo(
  forwardRef<SVGSVGElement, UsersBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="users-bold-duotone" {...props}>
      <path fill="currentColor" d="M15 3a5.5 5.5 0 0 1 3.57 9.68 7 7 0 0 1 3.78 3.8c.11.3.25.61.32.95a2.8 2.8 0 0 1-.48 2.22c-.19.29-.47.62-.8.84-.8.54-1.66.51-2.59.51h-.51a1 1 0 1 1 0-2h.51c1.1 0 1.28-.03 1.48-.17l.02-.02.07-.06a2 2 0 0 0 .33-.53v-.03a1 1 0 0 0 .02-.34 5.16 5.16 0 0 0-4.25-3.72 1.23 1.23 0 0 1-.21-2.36l.24-.1A3.5 3.5 0 0 0 15 5a1 1 0 1 1 0-2" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M9 3a5.5 5.5 0 0 1 3.57 9.68 7 7 0 0 1 3.78 3.8c.11.3.25.61.32.95a2.8 2.8 0 0 1-.48 2.22c-.19.29-.47.62-.8.84-.8.54-1.66.51-2.59.51H5.2c-.93 0-1.79.03-2.6-.5-.32-.23-.6-.56-.8-.85-.19-.3-.4-.68-.47-1.07a3 3 0 0 1 0-1.15q.12-.52.32-.94a7 7 0 0 1 3.78-3.8A5.49 5.49 0 0 1 9 3m0 11c-2.74 0-4.65 1.23-5.5 3.26-.14.33-.2.47-.22.59a1 1 0 0 0 .01.34l.01.03.04.09a2 2 0 0 0 .38.52c.2.14.37.17 1.48.17h7.6c1.11 0 1.28-.03 1.48-.17l.02-.02.07-.06a2 2 0 0 0 .33-.53v-.03a1 1 0 0 0 .02-.34 4 4 0 0 0-.22-.6C13.66 15.24 11.74 14 9 14m0-9a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7" clipRule="evenodd" />
    </IconBase>
  ))
);

UsersBoldDuotone.displayName = 'UsersBoldDuotone';

// Triple export pattern (lucide-react style)
export { UsersBoldDuotone, UsersBoldDuotone as UsersBoldDuotoneIcon, UsersBoldDuotone as SiUsersBoldDuotone };
export default UsersBoldDuotone;
export type { UsersBoldDuotoneProps };
