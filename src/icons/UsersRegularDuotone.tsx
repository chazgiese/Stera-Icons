import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UsersRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const UsersRegularDuotone = memo(
  forwardRef<SVGSVGElement, UsersRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="users-duotone" {...props}>
      <path d="M15 3.25a5.25 5.25 0 0 1 3.07 9.5 6.8 6.8 0 0 1 4.05 3.84c.11.28.24.58.3.89a2.5 2.5 0 0 1-.43 2.03c-.19.28-.45.58-.74.78-.73.48-1.5.46-2.45.46h-.51a.75.75 0 0 1 0-1.5h.51c1.09 0 1.34-.02 1.62-.21q.1-.07.32-.36.2-.32.21-.44.06-.29.01-.44c-.03-.15-.1-.31-.23-.64a5.4 5.4 0 0 0-4.22-3.28 1 1 0 0 1-.54-.29c-.5-.54-.23-1.36.38-1.59l.26-.1A3.75 3.75 0 0 0 15 4.74a.75.75 0 0 1 0-1.5" opacity={.4} />
        <path fillRule="evenodd" d="M9 3.25a5.25 5.25 0 0 1 3.07 9.5 6.7 6.7 0 0 1 4.04 3.84q.2.42.32.89a2.5 2.5 0 0 1-.44 2.03c-.19.28-.45.58-.74.78-.73.48-1.5.46-2.45.46H5.2c-.95 0-1.72.02-2.45-.46-.3-.2-.55-.5-.74-.78a2.51 2.51 0 0 1-.44-2.03q.12-.45.32-.9a6.7 6.7 0 0 1 4.04-3.82A5.24 5.24 0 0 1 9 3.25m0 10.5c-2.83 0-4.84 1.27-5.73 3.41-.13.33-.2.49-.23.63-.03.12-.03.24 0 .45q.04.12.22.44.21.3.32.36c.28.19.53.21 1.62.21h7.6c1.09 0 1.34-.02 1.62-.21q.1-.07.32-.36.2-.32.21-.44.06-.28.01-.45c-.03-.14-.1-.3-.23-.63-.89-2.14-2.9-3.41-5.73-3.41m0-9a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5" clipRule="evenodd" />
    </IconBase>
  ))
);

UsersRegularDuotone.displayName = 'UsersRegularDuotone';

// Triple export pattern (lucide-react style)
export { UsersRegularDuotone, UsersRegularDuotone as UsersRegularDuotoneIcon, UsersRegularDuotone as SiUsersRegularDuotone };
export default UsersRegularDuotone;
export type { UsersRegularDuotoneProps };
