import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlowSplitUpArrowIcon as FlowSplitUpArrowIconRegular } from './flow-split-up-arrow';
import { FlowSplitUpArrowIconBold } from './flow-split-up-arrow-bold';
import { FlowSplitUpArrowIconFilled } from './flow-split-up-arrow-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface FlowSplitUpArrowIconProps extends IconProps {
  variant?: IconVariant;
}

const FlowSplitUpArrowIcon = memo(forwardRef<SVGSVGElement, FlowSplitUpArrowIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <FlowSplitUpArrowIconFilled ref={ref} {...props} />;
    case 'bold':
      return <FlowSplitUpArrowIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <FlowSplitUpArrowIconRegular ref={ref} {...props} />;
  }
}));

FlowSplitUpArrowIcon.displayName = 'FlowSplitUpArrowIcon';

export { FlowSplitUpArrowIcon };
