import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const UserCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, UserCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="user-circle-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 6.5a4.6 4.6 0 0 1 3.24 7.86 8 8 0 0 1 3.17 2.43q-.61.82-1.4 1.45a6.2 6.2 0 0 0-10.01 0q-.8-.64-1.41-1.45a8 8 0 0 1 3.17-2.42A4.59 4.59 0 0 1 12 6.5m0 2a2.6 2.6 0 1 0 0 5.2 2.6 2.6 0 0 0 0-5.2" clipRule="evenodd" />
    </IconBase>
  ))
);

UserCircleBoldDuotone.displayName = 'UserCircleBoldDuotone';

// Triple export pattern (lucide-react style)
export { UserCircleBoldDuotone, UserCircleBoldDuotone as UserCircleBoldDuotoneIcon, UserCircleBoldDuotone as SiUserCircleBoldDuotone };
export default UserCircleBoldDuotone;
export type { UserCircleBoldDuotoneProps };
