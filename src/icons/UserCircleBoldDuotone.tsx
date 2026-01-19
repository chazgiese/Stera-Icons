import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type UserCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const UserCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, UserCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="user-circle-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M19.12 17.5a9 9 0 0 1-1.4 1.45 7 7 0 0 0-11.43 0q-.8-.64-1.41-1.45a9 9 0 0 1 3.72-2.84A4.99 4.99 0 0 1 12 6a5 5 0 0 1 3.4 8.66 9 9 0 0 1 3.72 2.84M12 8a3 3 0 1 0 0 6 3 3 0 0 0 0-6" clipRule="evenodd" />
    </IconBase>
  ))
);

UserCircleBoldDuotone.displayName = 'UserCircleBoldDuotone';

// Triple export pattern (lucide-react style)
export { UserCircleBoldDuotone, UserCircleBoldDuotone as UserCircleBoldDuotoneIcon, UserCircleBoldDuotone as SiUserCircleBoldDuotone };
export type { UserCircleBoldDuotoneProps };
