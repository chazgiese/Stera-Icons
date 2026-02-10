import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserSettingsRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const UserSettingsRegularDuotone = memo(
  forwardRef<SVGSVGElement, UserSettingsRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="user-settings-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 3.25a5.25 5.25 0 0 1 3.1 9.5.75.75 0 0 1-.7 1.26q-1.09-.26-2.4-.26c-3.33 0-5.66 1.32-6.67 3.46-.14.3-.2.43-.23.55-.02.1-.03.21 0 .44q.02.12.21.45.23.32.32.38c.29.2.52.22 1.57.22h5.12a.75.75 0 0 1 0 1.5H7.2c-.93 0-1.68.02-2.42-.49-.3-.2-.55-.52-.73-.8a2.53 2.53 0 0 1-.4-2.05q.12-.45.32-.84a7.4 7.4 0 0 1 4.84-3.9A5.24 5.24 0 0 1 12 3.25m0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M19.6 15.1a.75.75 0 0 1 1.3.74l-.43.74q.48.49.68 1.17H22a.75.75 0 0 1 0 1.5h-.85q-.2.68-.68 1.17l.42.74a.75.75 0 0 1-1.3.75l-.42-.74a3 3 0 0 1-1.35 0l-.42.73a.75.75 0 0 1-1.3-.75l.42-.74a3 3 0 0 1-.66-1.16H15a.75.75 0 0 1 0-1.5h.85q.2-.67.67-1.16l-.42-.74a.75.75 0 0 1 1.3-.75l.42.74a3 3 0 0 1 1.35 0zm-1.1 2.15q-.35 0-.63.17a1.25 1.25 0 1 0 .63-.17" clipRule="evenodd" />
    </IconBase>
  ))
);

UserSettingsRegularDuotone.displayName = 'UserSettingsRegularDuotone';

// Triple export pattern (lucide-react style)
export { UserSettingsRegularDuotone, UserSettingsRegularDuotone as UserSettingsRegularDuotoneIcon, UserSettingsRegularDuotone as SiUserSettingsRegularDuotone };
export default UserSettingsRegularDuotone;
export type { UserSettingsRegularDuotoneProps };
