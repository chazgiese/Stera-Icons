import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const UserCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, UserCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="user-circle-fill-duotone" {...props}>
      <path fill="currentColor" d="M12 2.1a9.9 9.9 0 0 1 7.31 16.57 8.5 8.5 0 0 0-5.39-3.95 4.1 4.1 0 1 0-3.85 0 8.5 8.5 0 0 0-5.38 3.95A9.9 9.9 0 0 1 12 2.1" opacity={.4} />
        <path fill="currentColor" d="M12 7a4.1 4.1 0 0 1 1.92 7.72 8.5 8.5 0 0 1 5.4 3.95 9.87 9.87 0 0 1-14.63 0 8.5 8.5 0 0 1 5.38-3.95A4.1 4.1 0 0 1 12 7" />
    </IconBase>
  ))
);

UserCircleFillDuotone.displayName = 'UserCircleFillDuotone';

// Triple export pattern (lucide-react style)
export { UserCircleFillDuotone, UserCircleFillDuotone as UserCircleFillDuotoneIcon, UserCircleFillDuotone as SiUserCircleFillDuotone };
export default UserCircleFillDuotone;
export type { UserCircleFillDuotoneProps };
