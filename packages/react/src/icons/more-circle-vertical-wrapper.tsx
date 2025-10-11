import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MoreCircleVerticalIcon as MoreCircleVerticalIconRegular } from './more-circle-vertical';
import { MoreCircleVerticalIconBold } from './more-circle-vertical-bold';
import { MoreCircleVerticalIconFilled } from './more-circle-vertical-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface MoreCircleVerticalIconProps extends IconProps {
  variant?: IconVariant;
}

const MoreCircleVerticalIcon = memo(forwardRef<SVGSVGElement, MoreCircleVerticalIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <MoreCircleVerticalIconFilled ref={ref} {...props} />;
    case 'bold':
      return <MoreCircleVerticalIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <MoreCircleVerticalIconRegular ref={ref} {...props} />;
  }
}));

MoreCircleVerticalIcon.displayName = 'MoreCircleVerticalIcon';

export { MoreCircleVerticalIcon };
