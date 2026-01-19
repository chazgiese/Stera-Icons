import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type UserCircleDashedBoldProps = Omit<IconBaseProps, 'children'>;

const UserCircleDashedBold = memo(
  forwardRef<SVGSVGElement, UserCircleDashedBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="user-circle-dashed-bold" {...props}>
      <path fill="currentColor" d="M13.76 20.83a1 1 0 1 1 .39 1.96 11 11 0 0 1-4.3 0 1 1 0 0 1 .4-1.96 9 9 0 0 0 3.5 0" />
        <path fill="currentColor" fillRule="evenodd" d="M12 6a5 5 0 0 1 3.4 8.66 9 9 0 0 1 3.72 2.84q.2-.24.36-.5a1 1 0 0 1 1.67 1.11q-1.22 1.81-3.04 3.04A1 1 0 1 1 17 19.48q.37-.24.71-.53a7 7 0 0 0-11.42 0q.33.3.71.53a1 1 0 0 1-1.11 1.67q-1.81-1.22-3.04-3.04A1 1 0 1 1 4.52 17q.17.26.36.5a9 9 0 0 1 3.72-2.84A4.99 4.99 0 0 1 12 6m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6" clipRule="evenodd" />
        <path fill="currentColor" d="M1.2 9.85a1 1 0 0 1 1.97.4 9 9 0 0 0 0 3.5 1 1 0 1 1-1.96.4 11 11 0 0 1 0-4.3M21.62 9.07a1 1 0 0 1 1.17.78 11 11 0 0 1 0 4.3 1 1 0 0 1-1.96-.4 9 9 0 0 0 0-3.5 1 1 0 0 1 .79-1.18M5.89 2.85A1 1 0 1 1 7 4.52 9 9 0 0 0 4.52 7a1 1 0 0 1-1.67-1.11c.8-1.2 1.84-2.23 3.04-3.04M16.73 3.13a1 1 0 0 1 1.38-.28c1.2.8 2.23 1.84 3.04 3.04A1 1 0 1 1 19.48 7 9 9 0 0 0 17 4.52a1 1 0 0 1-.27-1.4M12 1q1.1 0 2.15.2a1 1 0 0 1-.4 1.97 9 9 0 0 0-3.5 0 1 1 0 1 1-.4-1.96Q10.9 1 12 1" />
    </IconBase>
  ))
);

UserCircleDashedBold.displayName = 'UserCircleDashedBold';

// Triple export pattern (lucide-react style)
export { UserCircleDashedBold, UserCircleDashedBold as UserCircleDashedBoldIcon, UserCircleDashedBold as SiUserCircleDashedBold };
export type { UserCircleDashedBoldProps };
