import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserXBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const UserXBoldDuotone = memo(
  forwardRef<SVGSVGElement, UserXBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="user-x-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M12 3a5.5 5.5 0 0 1 3.45 9.79 1 1 0 0 1-1.1 1.47A10 10 0 0 0 12 14c-3.26 0-5.5 1.3-6.44 3.32-.14.3-.19.4-.21.5a1 1 0 0 0 0 .34l.04.11a2 2 0 0 0 .38.55c.21.15.36.18 1.43.18h5.12a1 1 0 0 1 0 2H7.2c-.9 0-1.75.03-2.56-.53a3 3 0 0 1-.8-.88 2.78 2.78 0 0 1-.43-2.24 7.49 7.49 0 0 1 4.9-4.78A5.49 5.49 0 0 1 11.99 3m0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7" clipRule="evenodd" opacity={.4} />
        <path d="M18.8 15.3a1 1 0 0 1 1.4 1.4L18.92 18l1.3 1.3a1 1 0 0 1-1.42 1.4l-1.29-1.29-1.3 1.3a1 1 0 0 1-1.4-1.42l1.29-1.3-1.3-1.28a1 1 0 0 1 1.42-1.42l1.29 1.3z" />
    </IconBase>
  ))
);

UserXBoldDuotone.displayName = 'UserXBoldDuotone';

// Triple export pattern (lucide-react style)
export { UserXBoldDuotone, UserXBoldDuotone as UserXBoldDuotoneIcon, UserXBoldDuotone as SiUserXBoldDuotone };
export default UserXBoldDuotone;
export type { UserXBoldDuotoneProps };
