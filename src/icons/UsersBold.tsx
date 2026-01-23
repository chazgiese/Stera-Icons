import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UsersBoldProps = Omit<IconBaseProps, 'children'>;

const UsersBold = memo(
  forwardRef<SVGSVGElement, UsersBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="users-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M14.8 3a5.5 5.5 0 0 1 5.6 5.4c0 1.7-.81 3.2-2.08 4.2a7.2 7.2 0 0 1 4.36 4.37c.22.61.44 1.16.24 1.96-.08.34-.27.67-.46.92-.18.25-.44.53-.75.72-.74.46-1.54.43-2.43.43H4.72c-.89 0-1.7.03-2.43-.43-.3-.19-.57-.47-.75-.72a3 3 0 0 1-.46-.92c-.2-.8.02-1.35.24-1.96a7.2 7.2 0 0 1 4.36-4.37A5.3 5.3 0 0 1 3.6 8.4 5.5 5.5 0 0 1 9.2 3q1.54.01 2.8.72A6 6 0 0 1 14.8 3m.04 10.8q1.52 1.21 2.24 3.17c.22.61.44 1.16.24 1.96q-.03.14-.09.27h2.05c1.07 0 1.24-.03 1.42-.14q.06-.03.24-.25.15-.24.17-.3a1 1 0 0 0 .01-.32c-.02-.13-.08-.3-.2-.63-.85-2.34-2.99-3.75-6.08-3.76m-5.64 0c-3.11 0-5.27 1.4-6.12 3.76-.12.34-.18.5-.2.63-.02.1-.02.18.01.32q.01.06.17.3.17.22.24.25c.18.11.35.14 1.42.14h8.96c1.07 0 1.24-.03 1.42-.14q.06-.03.24-.25.15-.24.17-.3a1 1 0 0 0 .01-.32c-.02-.13-.08-.3-.2-.63-.85-2.35-3-3.76-6.12-3.76m0-9a3.67 3.67 0 0 0-3.73 3.6c0 1.99 1.67 3.6 3.73 3.6a3.67 3.67 0 0 0 3.73-3.6c0-1.99-1.67-3.6-3.73-3.6m5.6 0q-.66 0-1.25.2a5.26 5.26 0 0 1 0 6.8q.6.2 1.25.2a3.67 3.67 0 0 0 3.73-3.6c0-1.99-1.67-3.6-3.73-3.6" clipRule="evenodd" />
    </IconBase>
  ))
);

UsersBold.displayName = 'UsersBold';

// Triple export pattern (lucide-react style)
export { UsersBold, UsersBold as UsersBoldIcon, UsersBold as SiUsersBold };
export default UsersBold;
export type { UsersBoldProps };
