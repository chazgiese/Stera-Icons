import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type UserMinusFillProps = Omit<IconBaseProps, 'children'>;

const UserMinusFill = memo(
  forwardRef<SVGSVGElement, UserMinusFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 3.5a5 5 0 0 1 2.6 9.28 8 8 0 0 1 3.53 1.7q.24.19.25.29a.2.2 0 0 1-.06.17q-.07.08-.4.06H14a2.5 2.5 0 0 0-2.5 2.5v1.4c0 .56 0 .84-.1 1.05a1 1 0 0 1-.45.44c-.21.11-.49.11-1.05.11H7.2c-.95 0-1.61.02-2.28-.44a3 3 0 0 1-.66-.74 2.28 2.28 0 0 1-.37-1.85c.06-.28.19-.53.3-.79.96-2.03 2.81-3.36 5.22-3.9A5 5 0 0 1 12 3.5" />
        <path fill="currentColor" d="M21 16.5a1 1 0 1 1 0 2h-7a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

UserMinusFill.displayName = 'UserMinusFill';

export { UserMinusFill };
export type { UserMinusFillProps };
