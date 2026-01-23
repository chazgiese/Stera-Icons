import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserSettingsFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const UserSettingsFillDuotone = memo(
  forwardRef<SVGSVGElement, UserSettingsFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="user-settings-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M19.38 14.97a1 1 0 0 1 1.73 1l-.33.58a3 3 0 0 1 .55.95H22a1 1 0 1 1 0 2h-.67a3 3 0 0 1-.55.95l.33.58a1 1 0 0 1-1.73 1l-.34-.58a3 3 0 0 1-1.1 0l-.33.58a1 1 0 0 1-1.73-1l.34-.59a3 3 0 0 1-.55-.94H15a1 1 0 0 1 0-2h.67a3 3 0 0 1 .55-.94l-.34-.59a1 1 0 0 1 1.73-1l.34.58a3 3 0 0 1 1.1 0zm-.88 2.53a1 1 0 1 0 0 2 1 1 0 0 0 0-2" clipRule="evenodd" />
        <path fill="currentColor" d="M12 3.5a5 5 0 0 1 2.6 9.28 7.6 7.6 0 0 1 4.48 2.7l-.04.07a3 3 0 0 0-1.1 0l-.33-.58a1 1 0 0 0-1.73 1l.34.59a3 3 0 0 0-.55.94H15a1 1 0 1 0 0 2h.67a3 3 0 0 0 .55.94l-.04.06H7.2c-.95 0-1.61.02-2.28-.44a3 3 0 0 1-.66-.74 2.28 2.28 0 0 1-.37-1.85c.06-.28.19-.53.3-.79.96-2.03 2.81-3.36 5.22-3.9A5 5 0 0 1 12 3.5" opacity={.4} />
    </IconBase>
  ))
);

UserSettingsFillDuotone.displayName = 'UserSettingsFillDuotone';

// Triple export pattern (lucide-react style)
export { UserSettingsFillDuotone, UserSettingsFillDuotone as UserSettingsFillDuotoneIcon, UserSettingsFillDuotone as SiUserSettingsFillDuotone };
export default UserSettingsFillDuotone;
export type { UserSettingsFillDuotoneProps };
