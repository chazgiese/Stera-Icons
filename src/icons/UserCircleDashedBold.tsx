import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserCircleDashedBoldProps = Omit<IconBaseProps, 'children'>;

const UserCircleDashedBold = memo(
  forwardRef<SVGSVGElement, UserCircleDashedBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="user-circle-dashed-bold" {...props}>
      <path d="M13.56 19.85a1 1 0 1 1 .39 1.96 10 10 0 0 1-3.9 0 1 1 0 0 1 .39-1.96 8 8 0 0 0 3.12 0" />
        <path fillRule="evenodd" d="M12 6.5a4.6 4.6 0 0 1 3.24 7.86 8 8 0 0 1 3.17 2.43q.13-.18.24-.35a1 1 0 0 1 1.67 1.12 10 10 0 0 1-2.76 2.76 1 1 0 0 1-1.12-1.67q.3-.2.56-.41a6.2 6.2 0 0 0-10 0l.56.41a1 1 0 0 1-1.12 1.67 10 10 0 0 1-2.76-2.76 1 1 0 0 1 1.67-1.12q.11.17.24.35a8 8 0 0 1 3.17-2.42A4.59 4.59 0 0 1 12 6.5m0 2a2.6 2.6 0 1 0 0 5.2 2.6 2.6 0 0 0 0-5.2" clipRule="evenodd" />
        <path d="M2.19 10.05a1 1 0 0 1 1.96.39 8 8 0 0 0 0 3.12 1 1 0 0 1-1.96.39 10 10 0 0 1 0-3.9M20.63 9.26a1 1 0 0 1 1.18.79 10 10 0 0 1 0 3.9 1 1 0 0 1-1.96-.39 8 8 0 0 0 0-3.12 1 1 0 0 1 .78-1.18M6.44 3.68a1 1 0 0 1 1.12 1.67 8 8 0 0 0-2.21 2.2 1 1 0 0 1-1.67-1.1 10 10 0 0 1 2.76-2.77M16.17 3.96a1 1 0 0 1 1.39-.28q1.65 1.11 2.76 2.76a1 1 0 0 1-1.67 1.12 8 8 0 0 0-2.2-2.21 1 1 0 0 1-.28-1.39M12 2q1 0 1.95.19a1 1 0 0 1-.39 1.96 8 8 0 0 0-3.12 0 1 1 0 0 1-.39-1.96Q11 2.01 12 2" />
    </IconBase>
  ))
);

UserCircleDashedBold.displayName = 'UserCircleDashedBold';

// Triple export pattern (lucide-react style)
export { UserCircleDashedBold, UserCircleDashedBold as UserCircleDashedBoldIcon, UserCircleDashedBold as SiUserCircleDashedBold };
export default UserCircleDashedBold;
export type { UserCircleDashedBoldProps };
