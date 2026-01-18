import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type UserSettingsBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const UserSettingsBoldDuotone = memo(
  forwardRef<SVGSVGElement, UserSettingsBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 3a5.5 5.5 0 0 1 3.45 9.79 1 1 0 0 1-1.1 1.47A10 10 0 0 0 12 14c-3.26 0-5.5 1.3-6.44 3.32-.14.3-.19.4-.21.5a1 1 0 0 0 0 .34l.04.11a2 2 0 0 0 .38.55c.21.15.36.18 1.43.18h5.12a1 1 0 0 1 0 2H7.2c-.9 0-1.75.03-2.56-.53a3 3 0 0 1-.8-.88 2.78 2.78 0 0 1-.43-2.24 7.49 7.49 0 0 1 4.9-4.78A5.49 5.49 0 0 1 11.99 3m0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M19.38 14.97a1 1 0 0 1 1.73 1l-.33.58a3 3 0 0 1 .55.95H22a1 1 0 1 1 0 2h-.67a3 3 0 0 1-.55.95l.33.58a1 1 0 0 1-1.73 1l-.34-.58a3 3 0 0 1-1.1 0l-.33.58a1 1 0 0 1-1.73-1l.34-.59a3 3 0 0 1-.55-.94H15a1 1 0 0 1 0-2h.67a3 3 0 0 1 .55-.94l-.34-.59a1 1 0 0 1 1.73-1l.34.58a3 3 0 0 1 1.1 0zm-.88 2.53a1 1 0 1 0 0 2 1 1 0 0 0 0-2" clipRule="evenodd" />
    </IconBase>
  ))
);

UserSettingsBoldDuotone.displayName = 'UserSettingsBoldDuotone';

export { UserSettingsBoldDuotone };
export type { UserSettingsBoldDuotoneProps };
