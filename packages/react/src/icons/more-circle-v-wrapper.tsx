import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { MoreCircleVIcon as RegularMoreCircleVIcon } from './more-circle-v';
import { MoreCircleVIconBold } from './more-circle-v-bold';
import { MoreCircleVIconFilled } from './more-circle-v-filled';
import { MoreCircleVIconFilltone } from './more-circle-v-filltone';
import { MoreCircleVIconLinetone } from './more-circle-v-linetone';

export interface MoreCircleVIconProps extends IconProps {
  variant?: IconVariant;
}

const MoreCircleVIcon = memo(forwardRef<SVGSVGElement, MoreCircleVIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <MoreCircleVIconFilled ref={ref} {...props} />;
    case 'bold':
      return <MoreCircleVIconBold ref={ref} {...props} />;
    case 'filltone':
      return <MoreCircleVIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <MoreCircleVIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularMoreCircleVIcon ref={ref} {...props} />;
  }
}));

MoreCircleVIcon.displayName = 'MoreCircleVIcon';

export { MoreCircleVIcon };
