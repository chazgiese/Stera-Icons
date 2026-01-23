import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const UserCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, UserCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="user-circle-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 6.25a4.75 4.75 0 0 1 2.91 8.5c1.71.6 3.17 1.72 4.2 3.16q-.48.59-1.07 1.09a7.24 7.24 0 0 0-12.08 0 9 9 0 0 1-1.08-1.1 8.8 8.8 0 0 1 4.2-3.15A4.74 4.74 0 0 1 12 6.25m0 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5" clipRule="evenodd" />
    </IconBase>
  ))
);

UserCircleRegularDuotone.displayName = 'UserCircleRegularDuotone';

// Triple export pattern (lucide-react style)
export { UserCircleRegularDuotone, UserCircleRegularDuotone as UserCircleRegularDuotoneIcon, UserCircleRegularDuotone as SiUserCircleRegularDuotone };
export default UserCircleRegularDuotone;
export type { UserCircleRegularDuotoneProps };
