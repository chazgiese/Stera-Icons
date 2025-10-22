import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { FlowRightArrowIcon as FlowRightArrowIconRegular } from './flow-right-arrow';
import { FlowRightArrowIconBold } from './flow-right-arrow-bold';
import { FlowRightArrowIconFilled } from './flow-right-arrow-filled';
import { FlowRightArrowIconFilltone } from './flow-right-arrow-filltone';
import { FlowRightArrowIconLinetone } from './flow-right-arrow-linetone';

export interface FlowRightArrowIconProps extends IconProps {
  variant?: IconVariant;
}

const FlowRightArrowIcon = memo(forwardRef<SVGSVGElement, FlowRightArrowIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <FlowRightArrowIconFilled ref={ref} {...props} />;
    case 'bold':
      return <FlowRightArrowIconBold ref={ref} {...props} />;
    case 'filltone':
      return <FlowRightArrowIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <FlowRightArrowIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <FlowRightArrowIconRegular ref={ref} {...props} />;
  }
}));

FlowRightArrowIcon.displayName = 'FlowRightArrowIcon';

export { FlowRightArrowIcon };
