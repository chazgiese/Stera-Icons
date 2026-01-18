import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type UserMinusFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const UserMinusFillDuotone = memo(
  forwardRef<SVGSVGElement, UserMinusFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 3.5a5 5 0 0 1 2.6 9.28c2.32.52 4.13 1.8 5.1 3.72H14a1 1 0 1 0 0 2h6.1a3 3 0 0 1-.36.82c-.17.27-.4.56-.66.74-.67.46-1.33.44-2.28.44H7.2c-.95 0-1.61.02-2.28-.44a3 3 0 0 1-.66-.74 2.28 2.28 0 0 1-.37-1.85c.06-.28.19-.53.3-.79.96-2.03 2.81-3.36 5.22-3.9A5 5 0 0 1 12 3.5" opacity={.4} />
        <path fill="currentColor" d="M21 16.5a1 1 0 1 1 0 2h-7a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

UserMinusFillDuotone.displayName = 'UserMinusFillDuotone';

// Triple export pattern (lucide-react style)
export { UserMinusFillDuotone, UserMinusFillDuotone as UserMinusFillDuotoneIcon, UserMinusFillDuotone as SiUserMinusFillDuotone };
export type { UserMinusFillDuotoneProps };
