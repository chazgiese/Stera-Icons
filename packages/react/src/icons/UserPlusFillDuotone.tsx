import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type UserPlusFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const UserPlusFillDuotone = memo(
  forwardRef<SVGSVGElement, UserPlusFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 3.5a5 5 0 0 1 2.6 9.28q1.1.24 2.03.71a1 1 0 0 0-.13.51v2.5H14a1 1 0 1 0 0 2h2.5v2H7.2c-.95 0-1.61.02-2.28-.44a3 3 0 0 1-.66-.74 2.28 2.28 0 0 1-.37-1.85c.06-.28.19-.53.3-.79.96-2.03 2.81-3.36 5.22-3.9A5 5 0 0 1 12 3.5" opacity={.4} />
        <path fill="currentColor" d="M17.5 13a1 1 0 0 1 1 1v2.5H21a1 1 0 1 1 0 2h-2.5V21a1 1 0 0 1-2 0v-2.5H14a1 1 0 0 1 0-2h2.5V14a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

UserPlusFillDuotone.displayName = 'UserPlusFillDuotone';

export { UserPlusFillDuotone };
export type { UserPlusFillDuotoneProps };
