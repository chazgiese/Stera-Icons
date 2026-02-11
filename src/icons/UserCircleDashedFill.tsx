import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserCircleDashedFillProps = Omit<IconBaseProps, 'children'>;

const UserCircleDashedFill = memo(
  forwardRef<SVGSVGElement, UserCircleDashedFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="user-circle-dashed-fill" {...props}>
      <path d="M12 7a4.1 4.1 0 0 1 2.72 7.16 8 8 0 0 1 3.69 2.63q.13-.18.24-.35a1 1 0 0 1 1.67 1.12q-.46.67-1.02 1.27v.02l-.3.3-.16.14-.15.14-.17.15-.2.17-.14.11-.45.34-.17.12h-.01a10 10 0 0 1-3.6 1.49l-.15.03a10 10 0 0 1-3.6 0l-.15-.03h-.01a10 10 0 0 1-3.6-1.5l-.17-.11-.2-.15-.25-.19-.14-.1-.2-.18-.17-.15-.15-.14-.16-.15-.3-.3v-.01q-.56-.6-1.02-1.27a1 1 0 0 1 1.67-1.12q.11.17.24.35a8 8 0 0 1 3.69-2.63A4.09 4.09 0 0 1 12 7M2.19 10.05a1 1 0 0 1 1.96.39 8 8 0 0 0 0 3.12 1 1 0 0 1-1.96.39 10 10 0 0 1 0-3.9M20.63 9.26a1 1 0 0 1 1.18.79 10 10 0 0 1 0 3.9 1 1 0 0 1-1.96-.39 8 8 0 0 0 0-3.12 1 1 0 0 1 .78-1.18M6.44 3.68a1 1 0 0 1 1.12 1.67 8 8 0 0 0-2.21 2.2 1 1 0 0 1-1.67-1.1 10 10 0 0 1 2.76-2.77M16.17 3.96a1 1 0 0 1 1.39-.28q1.65 1.11 2.76 2.76a1 1 0 0 1-1.67 1.12 8 8 0 0 0-2.2-2.21 1 1 0 0 1-.28-1.39M12 2q1 0 1.95.19a1 1 0 0 1-.39 1.96 8 8 0 0 0-3.12 0 1 1 0 0 1-.39-1.96Q11 2.01 12 2" />
    </IconBase>
  ))
);

UserCircleDashedFill.displayName = 'UserCircleDashedFill';

// Triple export pattern (lucide-react style)
export { UserCircleDashedFill, UserCircleDashedFill as UserCircleDashedFillIcon, UserCircleDashedFill as SiUserCircleDashedFill };
export default UserCircleDashedFill;
export type { UserCircleDashedFillProps };
