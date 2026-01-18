import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type UserBanFillProps = Omit<IconBaseProps, 'children'>;

const UserBanFill = memo(
  forwardRef<SVGSVGElement, UserBanFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M18.5 14.25a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5m-2.4 2.9q-.34.6-.35 1.35a2.75 2.75 0 0 0 4.1 2.4zm2.4-1.4q-.74.01-1.34.35l3.74 3.74q.34-.6.35-1.34a2.75 2.75 0 0 0-2.75-2.75" clipRule="evenodd" />
        <path fill="currentColor" d="M12 3.5a5 5 0 0 1 2.6 9.28l.33.08c.27.07.4.1.46.18q.07.1.04.21c-.02.09-.15.18-.4.36a6 6 0 0 0-2.19 6.89H7.2c-.95 0-1.61.02-2.28-.44a3 3 0 0 1-.66-.74 2.28 2.28 0 0 1-.37-1.85c.06-.28.19-.53.3-.79.96-2.03 2.81-3.36 5.22-3.9A5 5 0 0 1 12 3.5" />
    </IconBase>
  ))
);

UserBanFill.displayName = 'UserBanFill';

export { UserBanFill };
export type { UserBanFillProps };
