import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserCircleRegularProps = Omit<IconBaseProps, 'children'>;

const UserCircleRegular = memo(
  forwardRef<SVGSVGElement, UserCircleRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="user-circle" {...props}>
      <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 13.2a6.4 6.4 0 0 0-5.34 2.84 8.2 8.2 0 0 0 10.68 0A6.4 6.4 0 0 0 12 15.45m0-11.7a8.25 8.25 0 0 0-6.4 13.44 8 8 0 0 1 3.62-2.74 4.34 4.34 0 1 1 5.55 0 8 8 0 0 1 3.64 2.74A8.25 8.25 0 0 0 12 3.75m0 4.5a2.85 2.85 0 1 0 0 5.7 2.85 2.85 0 0 0 0-5.7" clipRule="evenodd" />
    </IconBase>
  ))
);

UserCircleRegular.displayName = 'UserCircleRegular';

// Triple export pattern (lucide-react style)
export { UserCircleRegular, UserCircleRegular as UserCircleRegularIcon, UserCircleRegular as SiUserCircleRegular };
export default UserCircleRegular;
export type { UserCircleRegularProps };
