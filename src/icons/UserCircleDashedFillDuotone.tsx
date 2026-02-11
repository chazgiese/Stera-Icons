import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserCircleDashedFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const UserCircleDashedFillDuotone = memo(
  forwardRef<SVGSVGElement, UserCircleDashedFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="user-circle-dashed-fill-duotone" {...props}>
      <path d="M3.96 16.17a1 1 0 0 1 1.39.27q.11.18.24.35a8 8 0 0 0-.76 1.14l-.13.22v.68q-.56-.6-1.02-1.27a1 1 0 0 1 .28-1.39M18.65 16.44a1 1 0 0 1 1.67 1.12q-.46.67-1.02 1.27v-.68l-.13-.22a8 8 0 0 0-.76-1.14q.13-.18.24-.35M2.19 10.05a1 1 0 0 1 1.96.39 8 8 0 0 0 0 3.12 1 1 0 0 1-1.96.39 10 10 0 0 1 0-3.9M20.63 9.26a1 1 0 0 1 1.18.79 10 10 0 0 1 0 3.9 1 1 0 0 1-1.96-.39 8 8 0 0 0 0-3.12 1 1 0 0 1 .78-1.18M6.44 3.68a1 1 0 0 1 1.12 1.67 8 8 0 0 0-2.21 2.2 1 1 0 0 1-1.67-1.1 10 10 0 0 1 2.76-2.77M16.17 3.96a1 1 0 0 1 1.39-.28q1.65 1.11 2.76 2.76a1 1 0 0 1-1.67 1.12 8 8 0 0 0-2.2-2.21 1 1 0 0 1-.28-1.39M12 2q1 0 1.95.19a1 1 0 0 1-.39 1.96 8 8 0 0 0-3.12 0 1 1 0 0 1-.39-1.96Q11 2.01 12 2" opacity={0.4} />
        <path d="M12 7a4.1 4.1 0 0 1 2.72 7.16 8.2 8.2 0 0 1 4.45 3.77l.13.22v.7l-.3.3a9.97 9.97 0 0 1-14 0l-.3-.3v-.7l.13-.22a8.2 8.2 0 0 1 4.45-3.77A4.09 4.09 0 0 1 12 7" />
    </IconBase>
  ))
);

UserCircleDashedFillDuotone.displayName = 'UserCircleDashedFillDuotone';

// Triple export pattern (lucide-react style)
export { UserCircleDashedFillDuotone, UserCircleDashedFillDuotone as UserCircleDashedFillDuotoneIcon, UserCircleDashedFillDuotone as SiUserCircleDashedFillDuotone };
export default UserCircleDashedFillDuotone;
export type { UserCircleDashedFillDuotoneProps };
