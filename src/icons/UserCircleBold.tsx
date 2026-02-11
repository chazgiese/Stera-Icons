import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserCircleBoldProps = Omit<IconBaseProps, 'children'>;

const UserCircleBold = memo(
  forwardRef<SVGSVGElement, UserCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="user-circle-bold" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 13.7a6.2 6.2 0 0 0-5 2.54 7.96 7.96 0 0 0 10 0 6.2 6.2 0 0 0-5-2.54M12 4a8 8 0 0 0-6.41 12.79 8 8 0 0 1 3.17-2.42A4.59 4.59 0 0 1 12 6.5a4.6 4.6 0 0 1 3.24 7.86 8 8 0 0 1 3.17 2.43A8 8 0 0 0 12 4m0 4.5a2.6 2.6 0 1 0 0 5.2 2.6 2.6 0 0 0 0-5.2" clipRule="evenodd" />
    </IconBase>
  ))
);

UserCircleBold.displayName = 'UserCircleBold';

// Triple export pattern (lucide-react style)
export { UserCircleBold, UserCircleBold as UserCircleBoldIcon, UserCircleBold as SiUserCircleBold };
export default UserCircleBold;
export type { UserCircleBoldProps };
