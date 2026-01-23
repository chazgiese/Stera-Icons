import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const UserCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, UserCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="user-circle-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 5.5a4.5 4.5 0 0 0-2.36 8.33c-2.18.63-4 2.1-5.08 4.05a1 1 0 0 0-.06.24v.02q0 .21.15.36a10.47 10.47 0 0 0 14.7 0 .5.5 0 0 0 .15-.36v-.02a1 1 0 0 0-.06-.24 8.5 8.5 0 0 0-5.08-4.05A4.5 4.5 0 0 0 12 6.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 6.5a4.5 4.5 0 0 1 2.36 8.33c2.18.63 4 2.1 5.08 4.05a1 1 0 0 1 .06.24v.02a.5.5 0 0 1-.15.36 10.47 10.47 0 0 1-14.7 0 .5.5 0 0 1-.15-.36v-.02a1 1 0 0 1 .06-.24 8.5 8.5 0 0 1 5.08-4.05A4.5 4.5 0 0 1 12 6.5" />
    </IconBase>
  ))
);

UserCircleFillDuotone.displayName = 'UserCircleFillDuotone';

// Triple export pattern (lucide-react style)
export { UserCircleFillDuotone, UserCircleFillDuotone as UserCircleFillDuotoneIcon, UserCircleFillDuotone as SiUserCircleFillDuotone };
export default UserCircleFillDuotone;
export type { UserCircleFillDuotoneProps };
