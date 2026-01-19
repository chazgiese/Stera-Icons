import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type UserBanBoldProps = Omit<IconBaseProps, 'children'>;

const UserBanBold = memo(
  forwardRef<SVGSVGElement, UserBanBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="user-ban-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M18.5 14.25a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5m-2.4 2.9q-.34.6-.35 1.35a2.75 2.75 0 0 0 4.1 2.4zm2.4-1.4q-.74.01-1.34.35l3.74 3.74q.34-.6.35-1.34a2.75 2.75 0 0 0-2.75-2.75" clipRule="evenodd" />
        <path fill="currentColor" fillRule="evenodd" d="M12 3a5.5 5.5 0 0 1 3.45 9.79 1 1 0 0 1-1.1 1.47A10 10 0 0 0 12 14c-3.26 0-5.5 1.3-6.44 3.32-.14.3-.19.4-.21.5a1 1 0 0 0 0 .34l.04.11a2 2 0 0 0 .38.55c.21.15.36.18 1.43.18h5.12a1 1 0 0 1 0 2H7.2c-.9 0-1.75.03-2.56-.53a3 3 0 0 1-.8-.88 2.78 2.78 0 0 1-.43-2.24 7.49 7.49 0 0 1 4.9-4.78A5.49 5.49 0 0 1 11.99 3m0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7" clipRule="evenodd" />
    </IconBase>
  ))
);

UserBanBold.displayName = 'UserBanBold';

// Triple export pattern (lucide-react style)
export { UserBanBold, UserBanBold as UserBanBoldIcon, UserBanBold as SiUserBanBold };
export type { UserBanBoldProps };
