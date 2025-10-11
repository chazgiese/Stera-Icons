import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlowDownArrowIcon as FlowDownArrowIconRegular } from './flow-down-arrow';
import { FlowDownArrowIconBold } from './flow-down-arrow-bold';
import { FlowDownArrowIconFilled } from './flow-down-arrow-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <FlowDownArrowIconRegular ref={ref} {...props} />;
  }
}));

FlowDownArrowIcon.displayName = 'FlowDownArrowIcon';

export { FlowDownArrowIcon };
