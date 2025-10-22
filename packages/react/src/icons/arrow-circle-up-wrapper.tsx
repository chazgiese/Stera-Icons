import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ArrowCircleUpIcon as RegularArrowCircleUpIcon } from './arrow-circle-up';
import { ArrowCircleUpIconBold } from './arrow-circle-up-bold';
import { ArrowCircleUpIconFilled } from './arrow-circle-up-filled';
import { ArrowCircleUpIconFilltone } from './arrow-circle-up-filltone';
import { ArrowCircleUpIconLinetone } from './arrow-circle-up-linetone';

export interface ArrowCircleUpIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowCircleUpIcon = memo(forwardRef<SVGSVGElement, ArrowCircleUpIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowCircleUpIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowCircleUpIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ArrowCircleUpIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ArrowCircleUpIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularArrowCircleUpIcon ref={ref} {...props} />;
  }
}));

ArrowCircleUpIcon.displayName = 'ArrowCircleUpIcon';

export { ArrowCircleUpIcon };
