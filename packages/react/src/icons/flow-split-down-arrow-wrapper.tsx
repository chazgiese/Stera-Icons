import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlowSplitDownArrowIcon as FlowSplitDownArrowIconRegular } from './flow-split-down-arrow';
import { FlowSplitDownArrowIconBold } from './flow-split-down-arrow-bold';
import { FlowSplitDownArrowIconFilled } from './flow-split-down-arrow-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface FlowSplitDownArrowIconProps extends IconProps {
  variant?: IconVariant;
}

const FlowSplitDownArrowIcon = memo(forwardRef<SVGSVGElement, FlowSplitDownArrowIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <FlowSplitDownArrowIconFilled ref={ref} {...props} />;
    case 'bold':
      return <FlowSplitDownArrowIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <FlowSplitDownArrowIconRegular ref={ref} {...props} />;
  }
}));

FlowSplitDownArrowIcon.displayName = 'FlowSplitDownArrowIcon';

export { FlowSplitDownArrowIcon };
