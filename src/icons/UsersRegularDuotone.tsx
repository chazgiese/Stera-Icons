import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type UsersRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const UsersRegularDuotone = memo(
  forwardRef<SVGSVGElement, UsersRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="users-duotone" {...props}>
      <path fill="currentColor" d="M15 2.25a5.75 5.75 0 0 1 3.25 10.5 7.6 7.6 0 0 1 4.96 4.86c.24.68.44 1.22.25 2.03-.08.34-.27.67-.46.94-.18.27-.44.55-.73.73-.72.46-1.5.44-2.47.44H14c.88 0 1.6 0 2.27-.44a3 3 0 0 0 .94-1.06h2.59c1.12 0 1.4-.03 1.66-.2q.12-.07.32-.34.2-.29.22-.42c.08-.33.04-.48-.2-1.19-.96-2.73-3.38-4.35-6.8-4.35h-.24l-.54-.05a8 8 0 0 0-1.97-.95q.54-.39 1-.88a4.23 4.23 0 0 0 6-3.87 4.25 4.25 0 0 0-6-3.87q-.56-.6-1.25-1.04c.87-.53 1.9-.84 3-.84" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M9 2.25a5.75 5.75 0 0 1 3.25 10.5 7.6 7.6 0 0 1 4.96 4.86c.24.68.44 1.22.25 2.03-.08.34-.27.67-.46.94-.18.27-.44.55-.73.73-.72.46-1.5.44-2.47.44H4.2c-.97 0-1.75.02-2.47-.44a3 3 0 0 1-.73-.73c-.2-.27-.38-.6-.46-.94-.2-.8.01-1.35.25-2.03a7.6 7.6 0 0 1 4.96-4.86A5.74 5.74 0 0 1 9 2.25m0 11.5c-3.42 0-5.84 1.62-6.8 4.35-.24.71-.28.86-.2 1.2.02.07.09.23.22.4q.2.28.32.35c.27.17.54.2 1.66.2h9.6c1.12 0 1.4-.03 1.66-.2q.12-.07.32-.34.2-.29.22-.42c.08-.33.04-.48-.2-1.19-.96-2.73-3.38-4.35-6.8-4.35m0-10a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5" clipRule="evenodd" />
    </IconBase>
  ))
);

UsersRegularDuotone.displayName = 'UsersRegularDuotone';

// Triple export pattern (lucide-react style)
export { UsersRegularDuotone, UsersRegularDuotone as UsersRegularDuotoneIcon, UsersRegularDuotone as SiUsersRegularDuotone };
export type { UsersRegularDuotoneProps };
