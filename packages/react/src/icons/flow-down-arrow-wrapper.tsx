import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { FlowDownArrowIcon as RegularFlowDownArrowIcon } from './flow-down-arrow';
import { FlowDownArrowIconBold } from './flow-down-arrow-bold';
import { FlowDownArrowIconFilled } from './flow-down-arrow-filled';
import { FlowDownArrowIconFilltone } from './flow-down-arrow-filltone';
import { FlowDownArrowIconLinetone } from './flow-down-arrow-linetone';

export interface FlowDownArrowIconProps extends IconProps {
  variant?: IconVariant;
}

const FlowDownArrowIcon = memo(forwardRef<SVGSVGElement, FlowDownArrowIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <FlowDownArrowIconFilled ref={ref} {...props} />;
    case 'bold':
      return <FlowDownArrowIconBold ref={ref} {...props} />;
    case 'filltone':
      return <FlowDownArrowIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <FlowDownArrowIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularFlowDownArrowIcon ref={ref} {...props} />;
  }
}));

FlowDownArrowIcon.displayName = 'FlowDownArrowIcon';

export { FlowDownArrowIcon };
