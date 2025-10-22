import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ArrowBigDownIcon as RegularArrowBigDownIcon } from './arrow-big-down';
import { ArrowBigDownIconBold } from './arrow-big-down-bold';
import { ArrowBigDownIconFilled } from './arrow-big-down-filled';
import { ArrowBigDownIconFilltone } from './arrow-big-down-filltone';
import { ArrowBigDownIconLinetone } from './arrow-big-down-linetone';

export interface ArrowBigDownIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowBigDownIcon = memo(forwardRef<SVGSVGElement, ArrowBigDownIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowBigDownIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowBigDownIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ArrowBigDownIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ArrowBigDownIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularArrowBigDownIcon ref={ref} {...props} />;
  }
}));

ArrowBigDownIcon.displayName = 'ArrowBigDownIcon';

export { ArrowBigDownIcon };
