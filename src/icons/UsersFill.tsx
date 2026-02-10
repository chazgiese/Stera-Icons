import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UsersFillProps = Omit<IconBaseProps, 'children'>;

const UsersFill = memo(
  forwardRef<SVGSVGElement, UsersFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="users-fill" {...props}>
      <path fill="currentColor" d="M9 3a5.5 5.5 0 0 1 3.57 9.68 7 7 0 0 1 3.78 3.8c.11.3.25.61.32.95a2.8 2.8 0 0 1-.48 2.22c-.19.29-.47.62-.8.84-.8.54-1.66.51-2.59.51H5.2c-.93 0-1.79.03-2.6-.5-.32-.23-.6-.56-.8-.85-.19-.3-.4-.68-.47-1.07a3 3 0 0 1 0-1.15q.12-.52.32-.94a7 7 0 0 1 3.78-3.8A5.49 5.49 0 0 1 9 3" />
        <path fill="currentColor" d="M15 3a5.5 5.5 0 0 1 3.57 9.68 7 7 0 0 1 3.78 3.8c.11.3.25.61.32.95a2.8 2.8 0 0 1-.48 2.22c-.19.29-.47.62-.8.84-.8.54-1.66.51-2.59.51h-.51a1 1 0 1 1 0-2h.51c1.1 0 1.28-.03 1.48-.17l.02-.02.07-.06a2 2 0 0 0 .34-.56 1 1 0 0 0 0-.34 5.16 5.16 0 0 0-4.25-3.72 1.23 1.23 0 0 1-.2-2.36l.24-.1A3.5 3.5 0 0 0 15 5a1 1 0 1 1 0-2" />
    </IconBase>
  ))
);

UsersFill.displayName = 'UsersFill';

// Triple export pattern (lucide-react style)
export { UsersFill, UsersFill as UsersFillIcon, UsersFill as SiUsersFill };
export default UsersFill;
export type { UsersFillProps };
