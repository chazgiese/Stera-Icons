import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserCircleBoldProps = Omit<IconBaseProps, 'children'>;

const UserCircleBold = memo(
  forwardRef<SVGSVGElement, UserCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="user-circle-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 15a7 7 0 0 0-5.71 2.95 8.96 8.96 0 0 0 11.42 0A7 7 0 0 0 12 16m0-13a9 9 0 0 0-7.12 14.5 9 9 0 0 1 3.72-2.84A4.99 4.99 0 0 1 12 6a5 5 0 0 1 3.4 8.66 9 9 0 0 1 3.72 2.84A9 9 0 0 0 12 3m0 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6" clipRule="evenodd" />
    </IconBase>
  ))
);

UserCircleBold.displayName = 'UserCircleBold';

// Triple export pattern (lucide-react style)
export { UserCircleBold, UserCircleBold as UserCircleBoldIcon, UserCircleBold as SiUserCircleBold };
export default UserCircleBold;
export type { UserCircleBoldProps };
