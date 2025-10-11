import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlowRightArrowIcon as FlowRightArrowIconRegular } from './flow-right-arrow';
import { FlowRightArrowIconBold } from './flow-right-arrow-bold';
import { FlowRightArrowIconFilled } from './flow-right-arrow-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <FlowRightArrowIconRegular ref={ref} {...props} />;
  }
}));

FlowRightArrowIcon.displayName = 'FlowRightArrowIcon';

export { FlowRightArrowIcon };
