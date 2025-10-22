import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { MoreSquareVIcon as RegularMoreSquareVIcon } from './more-square-v';
import { MoreSquareVIconBold } from './more-square-v-bold';
import { MoreSquareVIconFilled } from './more-square-v-filled';
import { MoreSquareVIconFilltone } from './more-square-v-filltone';
import { MoreSquareVIconLinetone } from './more-square-v-linetone';

export interface MoreSquareVIconProps extends IconProps {
  variant?: IconVariant;
}

const MoreSquareVIcon = memo(forwardRef<SVGSVGElement, MoreSquareVIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <MoreSquareVIconFilled ref={ref} {...props} />;
    case 'bold':
      return <MoreSquareVIconBold ref={ref} {...props} />;
    case 'filltone':
      return <MoreSquareVIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <MoreSquareVIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularMoreSquareVIcon ref={ref} {...props} />;
  }
}));

MoreSquareVIcon.displayName = 'MoreSquareVIcon';

export { MoreSquareVIcon };
