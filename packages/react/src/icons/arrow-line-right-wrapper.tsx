import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ArrowLineRightIcon as RegularArrowLineRightIcon } from './arrow-line-right';
import { ArrowLineRightIconBold } from './arrow-line-right-bold';
import { ArrowLineRightIconFilled } from './arrow-line-right-filled';
import { ArrowLineRightIconFilltone } from './arrow-line-right-filltone';
import { ArrowLineRightIconLinetone } from './arrow-line-right-linetone';

export interface ArrowLineRightIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowLineRightIcon = memo(forwardRef<SVGSVGElement, ArrowLineRightIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowLineRightIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowLineRightIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ArrowLineRightIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ArrowLineRightIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularArrowLineRightIcon ref={ref} {...props} />;
  }
}));

ArrowLineRightIcon.displayName = 'ArrowLineRightIcon';

export { ArrowLineRightIcon };
