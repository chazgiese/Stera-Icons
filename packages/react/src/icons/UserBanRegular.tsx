import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type UserBanRegularProps = Omit<IconBaseProps, 'children'>;

const UserBanRegular = memo(
  forwardRef<SVGSVGElement, UserBanRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M18.5 14.25a4.25 4.25 0 1 1-3.02 1.26l.02-.02.03-.03a4.2 4.2 0 0 1 2.97-1.21m-2.4 2.9q-.34.6-.35 1.35a2.75 2.75 0 0 0 4.1 2.4zm2.4-1.4q-.73.01-1.34.35l3.74 3.74q.34-.6.35-1.34a2.75 2.75 0 0 0-2.75-2.75" clipRule="evenodd" />
        <path fill="currentColor" fillRule="evenodd" d="M12 3.25a5.25 5.25 0 0 1 3.1 9.5.75.75 0 0 1-.7 1.26q-1.09-.26-2.4-.26c-3.33 0-5.66 1.32-6.67 3.46-.14.3-.2.43-.23.55-.02.1-.03.21 0 .44q.02.12.21.45.23.32.32.38c.29.2.52.22 1.57.22h5.12a.75.75 0 0 1 0 1.5H7.2c-.93 0-1.68.02-2.42-.49-.3-.2-.55-.52-.73-.8a2.53 2.53 0 0 1-.4-2.05q.12-.45.32-.84a7.4 7.4 0 0 1 4.84-3.9A5.24 5.24 0 0 1 12 3.25m0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5" clipRule="evenodd" />
    </IconBase>
  ))
);

UserBanRegular.displayName = 'UserBanRegular';

export { UserBanRegular };
export type { UserBanRegularProps };
