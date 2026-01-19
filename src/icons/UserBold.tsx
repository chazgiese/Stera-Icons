import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type UserBoldProps = Omit<IconBaseProps, 'children'>;

const UserBold = memo(
  forwardRef<SVGSVGElement, UserBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="user-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 3a5.5 5.5 0 0 1 3.7 9.57c2.05.69 3.66 2 4.55 3.9.12.24.27.55.35.88a2.8 2.8 0 0 1-.44 2.24c-.19.3-.47.65-.8.88-.81.56-1.65.53-2.56.53H7.2c-.9 0-1.75.03-2.56-.53a3 3 0 0 1-.8-.88 2.78 2.78 0 0 1-.43-2.24 7.49 7.49 0 0 1 4.9-4.78A5.49 5.49 0 0 1 11.99 3m0 11c-3.26 0-5.5 1.3-6.44 3.32-.14.3-.19.4-.21.5a1 1 0 0 0 0 .34l.04.11a2 2 0 0 0 .3.47l.08.08c.21.15.36.18 1.43.18h9.6c1.07 0 1.22-.03 1.43-.18l.08-.08a2 2 0 0 0 .3-.47l.04-.1a1 1 0 0 0 0-.35c-.02-.1-.07-.2-.2-.5C17.48 15.29 15.25 14 12 14m0-9a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7" clipRule="evenodd" />
    </IconBase>
  ))
);

UserBold.displayName = 'UserBold';

// Triple export pattern (lucide-react style)
export { UserBold, UserBold as UserBoldIcon, UserBold as SiUserBold };
export type { UserBoldProps };
