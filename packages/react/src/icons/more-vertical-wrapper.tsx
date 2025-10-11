import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MoreVerticalIcon as MoreVerticalIconRegular } from './more-vertical';
import { MoreVerticalIconBold } from './more-vertical-bold';
import { MoreVerticalIconFilled } from './more-vertical-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface MoreVerticalIconProps extends IconProps {
  variant?: IconVariant;
}

const MoreVerticalIcon = memo(forwardRef<SVGSVGElement, MoreVerticalIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <MoreVerticalIconFilled ref={ref} {...props} />;
    case 'bold':
      return <MoreVerticalIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <MoreVerticalIconRegular ref={ref} {...props} />;
  }
}));

MoreVerticalIcon.displayName = 'MoreVerticalIcon';

export { MoreVerticalIcon };
