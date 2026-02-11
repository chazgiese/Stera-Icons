import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserCircleDashedRegularProps = Omit<IconBaseProps, 'children'>;

const UserCircleDashedRegular = memo(
  forwardRef<SVGSVGElement, UserCircleDashedRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="user-circle-dashed" {...props}>
      <path d="M13.61 20.1a.75.75 0 0 1 .3 1.46 10 10 0 0 1-3.81 0 .75.75 0 0 1 .29-1.47 8 8 0 0 0 3.22 0" />
        <path fillRule="evenodd" d="M12 6.75a4.35 4.35 0 0 1 2.77 7.7 8 8 0 0 1 3.64 2.75q.24-.3.45-.62a.75.75 0 1 1 1.25.84 10 10 0 0 1-2.7 2.69.75.75 0 0 1-.83-1.25q.4-.27.76-.57a6.44 6.44 0 0 0-10.68 0q.37.3.76.57a.75.75 0 1 1-.84 1.25 10 10 0 0 1-2.69-2.7.75.75 0 0 1 1.25-.83q.22.32.45.62a8 8 0 0 1 3.63-2.75A4.34 4.34 0 0 1 12 6.75m0 1.5a2.85 2.85 0 1 0 0 5.7 2.85 2.85 0 0 0 0-5.7" clipRule="evenodd" />
        <path d="M2.44 10.1a.75.75 0 0 1 1.47.29 8 8 0 0 0 0 3.22.75.75 0 0 1-1.47.3 10 10 0 0 1 0-3.81M20.68 9.5c.41-.07.8.2.88.6a10 10 0 0 1 0 3.8.75.75 0 0 1-1.47-.29 8 8 0 0 0 0-3.22c-.08-.4.19-.8.6-.88M6.58 3.9a.75.75 0 0 1 .84 1.24 8 8 0 0 0-2.28 2.28.75.75 0 1 1-1.25-.84A10 10 0 0 1 6.6 3.9M16.38 4.1a.75.75 0 0 1 1.04-.2 10 10 0 0 1 2.69 2.68.75.75 0 0 1-1.25.84 8 8 0 0 0-2.28-2.28.75.75 0 0 1-.2-1.04M12 2.25q.98 0 1.9.19a.75.75 0 0 1-.29 1.47 8 8 0 0 0-3.22 0 .75.75 0 0 1-.3-1.47A10 10 0 0 1 12 2.25" />
    </IconBase>
  ))
);

UserCircleDashedRegular.displayName = 'UserCircleDashedRegular';

// Triple export pattern (lucide-react style)
export { UserCircleDashedRegular, UserCircleDashedRegular as UserCircleDashedRegularIcon, UserCircleDashedRegular as SiUserCircleDashedRegular };
export default UserCircleDashedRegular;
export type { UserCircleDashedRegularProps };
