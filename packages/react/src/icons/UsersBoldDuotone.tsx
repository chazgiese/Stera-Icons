import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type UsersBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const UsersBoldDuotone = memo(
  forwardRef<SVGSVGElement, UsersBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M14.8 3a5.5 5.5 0 0 1 5.6 5.4c0 1.7-.81 3.21-2.08 4.2a7.2 7.2 0 0 1 4.36 4.37c.22.61.44 1.16.24 1.96-.08.34-.27.67-.46.92s-.44.53-.75.72c-.74.46-1.54.43-2.43.43h-5.41c.81 0 1.56 0 2.24-.43a3.05 3.05 0 0 0 1.12-1.37h2.05c1.07 0 1.24-.03 1.42-.14q.06-.03.24-.25.15-.24.17-.3a1 1 0 0 0 .01-.32c-.02-.13-.08-.3-.2-.63-.85-2.34-2.99-3.75-6.08-3.76q-.93-.75-2.12-1.2.45-.36.83-.8.6.2 1.25.2a3.67 3.67 0 0 0 3.73-3.6c0-1.99-1.67-3.6-3.73-3.6q-.66 0-1.25.2A6 6 0 0 0 12 3.73 6 6 0 0 1 14.8 3" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M9.2 3a5.5 5.5 0 0 1 5.6 5.4c0 1.7-.81 3.2-2.08 4.2a7.2 7.2 0 0 1 4.36 4.37c.22.61.44 1.16.24 1.96-.08.34-.27.67-.46.92-.18.25-.44.53-.75.72-.74.46-1.54.43-2.43.43H4.72c-.89 0-1.7.03-2.43-.43-.3-.19-.57-.47-.75-.72a3 3 0 0 1-.46-.92c-.2-.8.02-1.35.24-1.96a7.2 7.2 0 0 1 4.36-4.37A5.3 5.3 0 0 1 3.6 8.4 5.5 5.5 0 0 1 9.2 3m0 10.8c-3.11 0-5.27 1.4-6.12 3.76-.12.34-.18.5-.2.63-.02.1-.02.18.01.32q.01.06.17.3.17.22.24.25c.18.11.35.14 1.42.14h8.96c1.07 0 1.24-.03 1.42-.14q.06-.03.24-.25.15-.24.17-.3a1 1 0 0 0 .01-.32c-.02-.13-.08-.3-.2-.63-.85-2.35-3-3.76-6.12-3.76m0-9a3.67 3.67 0 0 0-3.73 3.6c0 1.99 1.67 3.6 3.73 3.6a3.67 3.67 0 0 0 3.73-3.6c0-1.99-1.67-3.6-3.73-3.6" clipRule="evenodd" />
    </IconBase>
  ))
);

UsersBoldDuotone.displayName = 'UsersBoldDuotone';

// Triple export pattern (lucide-react style)
export { UsersBoldDuotone, UsersBoldDuotone as UsersBoldDuotoneIcon, UsersBoldDuotone as SiUsersBoldDuotone };
export type { UsersBoldDuotoneProps };
