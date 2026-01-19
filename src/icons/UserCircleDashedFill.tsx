import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type UserCircleDashedFillProps = Omit<IconBaseProps, 'children'>;

const UserCircleDashedFill = memo(
  forwardRef<SVGSVGElement, UserCircleDashedFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="user-circle-dashed-fill" {...props}>
      <path fill="currentColor" d="M12 6.5a4.5 4.5 0 0 1 2.87 7.97 9 9 0 0 1 4.25 3.03q.2-.24.36-.5a1 1 0 0 1 1.67 1.11q-.52.77-1.15 1.43v.02l-.3.3-.18.17-.15.14-.28.24-.13.1-.26.21-.17.13-.26.19-.16.1v.01q-1.78 1.2-3.95 1.64h-.01a11 11 0 0 1-4.3 0h-.01a11 11 0 0 1-3.95-1.64l-.16-.11-.26-.19-.17-.13-.26-.2-.13-.11-.28-.24-.15-.14-.18-.17-.3-.3v-.02q-.63-.66-1.15-1.43A1 1 0 1 1 4.52 17q.17.26.36.5a9 9 0 0 1 4.25-3.03A4.5 4.5 0 0 1 12 6.5M1.2 9.85a1 1 0 0 1 1.97.4 9 9 0 0 0 0 3.5 1 1 0 1 1-1.96.4 11 11 0 0 1 0-4.3M21.62 9.07a1 1 0 0 1 1.17.78 11 11 0 0 1 0 4.3 1 1 0 0 1-1.96-.4 9 9 0 0 0 0-3.5 1 1 0 0 1 .79-1.18M5.89 2.85A1 1 0 1 1 7 4.52 9 9 0 0 0 4.52 7a1 1 0 0 1-1.67-1.11c.8-1.2 1.84-2.23 3.04-3.04M16.73 3.13a1 1 0 0 1 1.38-.28c1.2.8 2.23 1.84 3.04 3.04A1 1 0 1 1 19.48 7 9 9 0 0 0 17 4.52a1 1 0 0 1-.27-1.4M12 1q1.1 0 2.15.2a1 1 0 0 1-.4 1.97 9 9 0 0 0-3.5 0 1 1 0 1 1-.4-1.96Q10.9 1 12 1" />
    </IconBase>
  ))
);

UserCircleDashedFill.displayName = 'UserCircleDashedFill';

// Triple export pattern (lucide-react style)
export { UserCircleDashedFill, UserCircleDashedFill as UserCircleDashedFillIcon, UserCircleDashedFill as SiUserCircleDashedFill };
export type { UserCircleDashedFillProps };
