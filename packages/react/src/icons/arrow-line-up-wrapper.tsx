import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ArrowLineUpIcon as RegularArrowLineUpIcon } from './arrow-line-up';
import { ArrowLineUpIconBold } from './arrow-line-up-bold';
import { ArrowLineUpIconFilled } from './arrow-line-up-filled';
import { ArrowLineUpIconFilltone } from './arrow-line-up-filltone';
import { ArrowLineUpIconLinetone } from './arrow-line-up-linetone';

export interface ArrowLineUpIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowLineUpIcon = memo(forwardRef<SVGSVGElement, ArrowLineUpIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowLineUpIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowLineUpIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ArrowLineUpIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ArrowLineUpIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularArrowLineUpIcon ref={ref} {...props} />;
  }
}));

ArrowLineUpIcon.displayName = 'ArrowLineUpIcon';

export { ArrowLineUpIcon };
