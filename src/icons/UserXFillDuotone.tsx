import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type UserXFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const UserXFillDuotone = memo(
  forwardRef<SVGSVGElement, UserXFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="user-x-fill-duotone" {...props}>
      <path fill="currentColor" d="M18.8 15.3a1 1 0 0 1 1.4 1.4L18.92 18l1.3 1.3a1 1 0 0 1-1.42 1.4l-1.29-1.29-1.3 1.3a1 1 0 0 1-1.4-1.42l1.29-1.3-1.3-1.28a1 1 0 0 1 1.42-1.42l1.29 1.3z" />
        <path fill="currentColor" d="M12 3.5a5 5 0 0 1 2.6 9.28 7.7 7.7 0 0 1 4.27 2.45l-.08.06-1.29 1.3-1.3-1.3a1 1 0 0 0-1.4 1.42L16.08 18l-1.3 1.3a1 1 0 0 0-.15 1.2H7.2c-.95 0-1.61.02-2.28-.44a3 3 0 0 1-.66-.74 2.28 2.28 0 0 1-.37-1.85c.06-.28.19-.53.3-.79.96-2.03 2.81-3.36 5.22-3.9A5 5 0 0 1 12 3.5" opacity={.4} />
    </IconBase>
  ))
);

UserXFillDuotone.displayName = 'UserXFillDuotone';

// Triple export pattern (lucide-react style)
export { UserXFillDuotone, UserXFillDuotone as UserXFillDuotoneIcon, UserXFillDuotone as SiUserXFillDuotone };
export default UserXFillDuotone;
export type { UserXFillDuotoneProps };
