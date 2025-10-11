import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlowSplitRightArrowIcon as FlowSplitRightArrowIconRegular } from './flow-split-right-arrow';
import { FlowSplitRightArrowIconBold } from './flow-split-right-arrow-bold';
import { FlowSplitRightArrowIconFilled } from './flow-split-right-arrow-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface FlowSplitRightArrowIconProps extends IconProps {
  variant?: IconVariant;
}

const FlowSplitRightArrowIcon = memo(forwardRef<SVGSVGElement, FlowSplitRightArrowIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <FlowSplitRightArrowIconFilled ref={ref} {...props} />;
    case 'bold':
      return <FlowSplitRightArrowIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <FlowSplitRightArrowIconRegular ref={ref} {...props} />;
  }
}));

FlowSplitRightArrowIcon.displayName = 'FlowSplitRightArrowIcon';

export { FlowSplitRightArrowIcon };
