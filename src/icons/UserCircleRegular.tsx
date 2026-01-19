import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type UserCircleRegularProps = Omit<IconBaseProps, 'children'>;

const UserCircleRegular = memo(
  forwardRef<SVGSVGElement, UserCircleRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="user-circle" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 14.5A7.2 7.2 0 0 0 5.96 19a9.2 9.2 0 0 0 12.08 0A7.2 7.2 0 0 0 12 15.75m0-13a9.25 9.25 0 0 0-7.12 15.16 8.8 8.8 0 0 1 4.2-3.16 4.74 4.74 0 1 1 5.83 0c1.71.6 3.17 1.72 4.2 3.16A9.25 9.25 0 0 0 12 2.75m0 5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5" clipRule="evenodd" />
    </IconBase>
  ))
);

UserCircleRegular.displayName = 'UserCircleRegular';

// Triple export pattern (lucide-react style)
export { UserCircleRegular, UserCircleRegular as UserCircleRegularIcon, UserCircleRegular as SiUserCircleRegular };
export default UserCircleRegular;
export type { UserCircleRegularProps };
