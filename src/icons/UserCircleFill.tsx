import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserCircleFillProps = Omit<IconBaseProps, 'children'>;

const UserCircleFill = memo(
  forwardRef<SVGSVGElement, UserCircleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="user-circle-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 0 0-6.09 13.19 7.7 7.7 0 0 1 3.85-2.66 4.1 4.1 0 1 1 4.48 0 7.7 7.7 0 0 1 3.85 2.66A8 8 0 0 0 12 4" clipRule="evenodd" />
    </IconBase>
  ))
);

UserCircleFill.displayName = 'UserCircleFill';

// Triple export pattern (lucide-react style)
export { UserCircleFill, UserCircleFill as UserCircleFillIcon, UserCircleFill as SiUserCircleFill };
export default UserCircleFill;
export type { UserCircleFillProps };
