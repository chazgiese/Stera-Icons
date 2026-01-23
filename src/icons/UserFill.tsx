import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserFillProps = Omit<IconBaseProps, 'children'>;

const UserFill = memo(
  forwardRef<SVGSVGElement, UserFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="user-fill" {...props}>
      <path fill="currentColor" d="M12 3.5a5 5 0 0 1 2.6 9.28c2.4.54 4.25 1.87 5.2 3.9q.2.38.31.79a2.3 2.3 0 0 1-.37 1.85c-.17.27-.4.56-.66.74-.67.46-1.33.44-2.28.44H7.2c-.95 0-1.61.02-2.28-.44a3 3 0 0 1-.66-.74 2.28 2.28 0 0 1-.37-1.85c.06-.28.19-.53.3-.79.96-2.03 2.81-3.36 5.22-3.9A5 5 0 0 1 12 3.5" />
    </IconBase>
  ))
);

UserFill.displayName = 'UserFill';

// Triple export pattern (lucide-react style)
export { UserFill, UserFill as UserFillIcon, UserFill as SiUserFill };
export default UserFill;
export type { UserFillProps };
