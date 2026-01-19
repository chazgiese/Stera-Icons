import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type UserCircleDashedRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const UserCircleDashedRegularDuotone = memo(
  forwardRef<SVGSVGElement, UserCircleDashedRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="user-circle-dashed-duotone" {...props}>
      <path d="M13.8 21.07a.75.75 0 0 1 .3 1.47 11 11 0 0 1-4.2 0 .75.75 0 1 1 .3-1.47 9 9 0 0 0 3.6 0M3.27 16.93a.75.75 0 0 1 1.04.2 9 9 0 0 0 2.55 2.56.75.75 0 1 1-.83 1.25 11 11 0 0 1-2.97-2.97.75.75 0 0 1 .2-1.04M19.7 17.14a.75.75 0 0 1 1.24.83 11 11 0 0 1-2.97 2.97.75.75 0 0 1-.83-1.25 9 9 0 0 0 2.55-2.55M1.46 9.9a.75.75 0 1 1 1.47.3 9 9 0 0 0 0 3.6.75.75 0 0 1-1.47.3 11 11 0 0 1 0-4.2M21.66 9.31c.41-.08.8.19.88.6a11 11 0 0 1 0 4.19.75.75 0 1 1-1.47-.3 9 9 0 0 0 0-3.6c-.08-.41.19-.8.6-.89M6.03 3.06a.75.75 0 0 1 .83 1.25 9 9 0 0 0-2.55 2.55.75.75 0 0 1-1.25-.83 11 11 0 0 1 2.97-2.97M16.93 3.27a.75.75 0 0 1 1.04-.2 11 11 0 0 1 2.97 2.96.75.75 0 0 1-1.25.83 9 9 0 0 0-2.55-2.55.75.75 0 0 1-.2-1.04M12 1.25q1.08 0 2.1.2a.75.75 0 1 1-.3 1.48 9 9 0 0 0-3.6 0 .75.75 0 0 1-.3-1.47q1.02-.21 2.1-.21" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 6.25a4.75 4.75 0 0 1 2.91 8.5c1.71.6 3.17 1.72 4.2 3.16q-.48.58-1.07 1.09a7.24 7.24 0 0 0-12.08 0 9 9 0 0 1-1.08-1.1 8.8 8.8 0 0 1 4.2-3.15A4.74 4.74 0 0 1 12 6.25m0 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5" clipRule="evenodd" />
    </IconBase>
  ))
);

UserCircleDashedRegularDuotone.displayName = 'UserCircleDashedRegularDuotone';

// Triple export pattern (lucide-react style)
export { UserCircleDashedRegularDuotone, UserCircleDashedRegularDuotone as UserCircleDashedRegularDuotoneIcon, UserCircleDashedRegularDuotone as SiUserCircleDashedRegularDuotone };
export type { UserCircleDashedRegularDuotoneProps };
