import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const UserCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, UserCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="user-circle-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M12 6.75a4.35 4.35 0 0 1 2.77 7.7 8 8 0 0 1 3.64 2.74q-.48.6-1.07 1.1a6.44 6.44 0 0 0-10.68 0 8 8 0 0 1-1.07-1.1 8 8 0 0 1 3.63-2.74A4.34 4.34 0 0 1 12 6.75m0 1.5a2.85 2.85 0 1 0 0 5.7 2.85 2.85 0 0 0 0-5.7" clipRule="evenodd" />
    </IconBase>
  ))
);

UserCircleRegularDuotone.displayName = 'UserCircleRegularDuotone';

// Triple export pattern (lucide-react style)
export { UserCircleRegularDuotone, UserCircleRegularDuotone as UserCircleRegularDuotoneIcon, UserCircleRegularDuotone as SiUserCircleRegularDuotone };
export default UserCircleRegularDuotone;
export type { UserCircleRegularDuotoneProps };
