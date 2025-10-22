import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { MoreVIcon as RegularMoreVIcon } from './more-v';
import { MoreVIconBold } from './more-v-bold';
import { MoreVIconFilled } from './more-v-filled';
import { MoreVIconFilltone } from './more-v-filltone';
import { MoreVIconLinetone } from './more-v-linetone';

export interface MoreVIconProps extends IconProps {
  variant?: IconVariant;
}

const MoreVIcon = memo(forwardRef<SVGSVGElement, MoreVIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <MoreVIconFilled ref={ref} {...props} />;
    case 'bold':
      return <MoreVIconBold ref={ref} {...props} />;
    case 'filltone':
      return <MoreVIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <MoreVIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularMoreVIcon ref={ref} {...props} />;
  }
}));

MoreVIcon.displayName = 'MoreVIcon';

export { MoreVIcon };
