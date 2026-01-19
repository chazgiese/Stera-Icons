import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type UserRegularProps = Omit<IconBaseProps, 'children'>;

const UserRegular = memo(
  forwardRef<SVGSVGElement, UserRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="user" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 3.25a5.25 5.25 0 0 1 3.19 9.42 7.4 7.4 0 0 1 4.84 3.9q.2.39.32.84a2.5 2.5 0 0 1-.4 2.04c-.18.3-.44.61-.73.81-.74.51-1.5.49-2.42.49H7.2c-.93 0-1.68.02-2.42-.49-.3-.2-.55-.52-.73-.8a2.53 2.53 0 0 1-.4-2.05q.12-.45.32-.84a7.4 7.4 0 0 1 4.84-3.9A5.24 5.24 0 0 1 12 3.25m0 10.5c-3.33 0-5.66 1.32-6.67 3.46-.14.3-.2.43-.23.55-.02.1-.03.21 0 .44q.02.12.21.45.23.32.32.38c.29.2.52.22 1.57.22h9.6c1.05 0 1.28-.02 1.57-.22q.1-.06.32-.38.2-.33.2-.45c.04-.23.03-.35 0-.44a3 3 0 0 0-.22-.55c-1-2.14-3.34-3.46-6.67-3.46m0-9a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5" clipRule="evenodd" />
    </IconBase>
  ))
);

UserRegular.displayName = 'UserRegular';

// Triple export pattern (lucide-react style)
export { UserRegular, UserRegular as UserRegularIcon, UserRegular as SiUserRegular };
export type { UserRegularProps };
