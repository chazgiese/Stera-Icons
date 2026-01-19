import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type UserCircleDashedFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const UserCircleDashedFillDuotone = memo(
  forwardRef<SVGSVGElement, UserCircleDashedFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="user-circle-dashed-fill-duotone" {...props}>
      <path d="M3.13 16.73a1 1 0 0 1 1.39.27q.17.26.36.5a9 9 0 0 0-.75 1.14 1 1 0 0 0-.13.48v.02q0 .4.28.69-.8-.79-1.43-1.72a1 1 0 0 1 .28-1.38M19.48 17a1 1 0 0 1 1.67 1.11q-.63.94-1.43 1.72a1 1 0 0 0 .28-.69v-.02a1 1 0 0 0-.13-.48q-.33-.6-.75-1.14.2-.24.36-.5M1.2 9.85a1 1 0 0 1 1.97.4 9 9 0 0 0 0 3.5 1 1 0 1 1-1.96.4 11 11 0 0 1 0-4.3M21.62 9.07a1 1 0 0 1 1.17.78 11 11 0 0 1 0 4.3 1 1 0 0 1-1.96-.4 9 9 0 0 0 0-3.5 1 1 0 0 1 .79-1.18M5.89 2.85A1 1 0 1 1 7 4.52 9 9 0 0 0 4.52 7a1 1 0 0 1-1.67-1.11c.8-1.2 1.84-2.23 3.04-3.04M16.73 3.13a1 1 0 0 1 1.38-.28c1.2.8 2.23 1.84 3.04 3.04A1 1 0 1 1 19.48 7 9 9 0 0 0 17 4.52a1 1 0 0 1-.27-1.4M12 1q1.1 0 2.15.2a1 1 0 0 1-.4 1.97 9 9 0 0 0-3.5 0 1 1 0 1 1-.4-1.96Q10.9 1 12 1" opacity={0.4} />
        <path fill="currentColor" d="M12 6.5a4.5 4.5 0 0 1 2.87 7.97 9 9 0 0 1 5 4.17 1 1 0 0 1 .13.48v.02a1 1 0 0 1-.3.72 10.97 10.97 0 0 1-15.4 0 1 1 0 0 1-.3-.72v-.02a1 1 0 0 1 .13-.48 9 9 0 0 1 5-4.17A4.5 4.5 0 0 1 12 6.5" />
    </IconBase>
  ))
);

UserCircleDashedFillDuotone.displayName = 'UserCircleDashedFillDuotone';

// Triple export pattern (lucide-react style)
export { UserCircleDashedFillDuotone, UserCircleDashedFillDuotone as UserCircleDashedFillDuotoneIcon, UserCircleDashedFillDuotone as SiUserCircleDashedFillDuotone };
export type { UserCircleDashedFillDuotoneProps };
