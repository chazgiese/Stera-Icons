import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserCircleDashedRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const UserCircleDashedRegularDuotone = memo(
  forwardRef<SVGSVGElement, UserCircleDashedRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="user-circle-dashed-duotone" {...props}>
      <path d="M13.61 20.1a.75.75 0 0 1 .3 1.46 10 10 0 0 1-3.81 0 .75.75 0 0 1 .29-1.47 8 8 0 0 0 3.22 0M4.1 16.38a.75.75 0 0 1 1.04.2 8 8 0 0 0 2.28 2.28.75.75 0 1 1-.84 1.25 10 10 0 0 1-2.69-2.7.75.75 0 0 1 .2-1.03M18.86 16.58a.75.75 0 1 1 1.25.84 10 10 0 0 1-2.7 2.69.75.75 0 0 1-.83-1.25 8 8 0 0 0 2.28-2.28M2.44 10.1a.75.75 0 0 1 1.47.29 8 8 0 0 0 0 3.22.75.75 0 0 1-1.47.3 10 10 0 0 1 0-3.81M20.68 9.5c.41-.07.8.2.88.6a10 10 0 0 1 0 3.8.75.75 0 0 1-1.47-.29 8 8 0 0 0 0-3.22c-.08-.4.19-.8.6-.88M6.58 3.9a.75.75 0 0 1 .84 1.24 8 8 0 0 0-2.28 2.28.75.75 0 1 1-1.25-.84A10 10 0 0 1 6.6 3.9M16.38 4.1a.75.75 0 0 1 1.04-.2 10 10 0 0 1 2.69 2.68.75.75 0 0 1-1.25.84 8 8 0 0 0-2.28-2.28.75.75 0 0 1-.2-1.04M12 2.25q.98 0 1.9.19a.75.75 0 0 1-.29 1.47 8 8 0 0 0-3.22 0 .75.75 0 0 1-.3-1.47A10 10 0 0 1 12 2.25" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 6.75a4.35 4.35 0 0 1 2.78 7.7 8 8 0 0 1 3.63 2.75q-.48.6-1.07 1.09a6.44 6.44 0 0 0-10.68 0 8 8 0 0 1-1.07-1.1 8 8 0 0 1 3.63-2.74A4.34 4.34 0 0 1 12 6.75m0 1.5a2.85 2.85 0 0 0-.3 5.69l.3.01.3-.01a2.85 2.85 0 0 0-.3-5.69" clipRule="evenodd" />
    </IconBase>
  ))
);

UserCircleDashedRegularDuotone.displayName = 'UserCircleDashedRegularDuotone';

// Triple export pattern (lucide-react style)
export { UserCircleDashedRegularDuotone, UserCircleDashedRegularDuotone as UserCircleDashedRegularDuotoneIcon, UserCircleDashedRegularDuotone as SiUserCircleDashedRegularDuotone };
export default UserCircleDashedRegularDuotone;
export type { UserCircleDashedRegularDuotoneProps };
