import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type UsersThreeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const UsersThreeFillDuotone = memo(
  forwardRef<SVGSVGElement, UsersThreeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="users-three-fill-duotone" {...props}>
      <path d="M7 3a4.5 4.5 0 0 1 4.07 2.57 6 6 0 0 0-4.31 8.84A7 7 0 0 0 5.03 17h-.97c-.58 0-1.25.03-1.87-.37a2 2 0 0 1-.61-.61c-.15-.2-.3-.48-.37-.79-.17-.69.03-1.17.18-1.59a5.3 5.3 0 0 1 2.48-2.9A4.49 4.49 0 0 1 7 3M17 3a4.5 4.5 0 0 1 3.13 7.73 5.3 5.3 0 0 1 2.48 2.91c.15.42.35.9.18 1.6q-.12.46-.37.78c-.14.2-.35.44-.6.61-.63.4-1.3.37-1.88.37h-.97a7 7 0 0 0-1.73-2.58q.74-1.32.76-2.92a6 6 0 0 0-5.07-5.93A4.5 4.5 0 0 1 17 3" opacity={0.4} />
        <path fill="currentColor" d="M12 7a4.5 4.5 0 0 1 3.12 7.73 5.3 5.3 0 0 1 2.49 2.91c.15.42.35.9.18 1.6q-.12.46-.37.78c-.14.2-.35.44-.6.61-.63.4-1.3.37-1.88.37H9.06c-.58 0-1.25.03-1.87-.37a2 2 0 0 1-.61-.61q-.24-.31-.38-.79c-.16-.69.04-1.17.19-1.59a5.3 5.3 0 0 1 2.48-2.9A4.48 4.48 0 0 1 12 7" />
    </IconBase>
  ))
);

UsersThreeFillDuotone.displayName = 'UsersThreeFillDuotone';

// Triple export pattern (lucide-react style)
export { UsersThreeFillDuotone, UsersThreeFillDuotone as UsersThreeFillDuotoneIcon, UsersThreeFillDuotone as SiUsersThreeFillDuotone };
export type { UsersThreeFillDuotoneProps };
