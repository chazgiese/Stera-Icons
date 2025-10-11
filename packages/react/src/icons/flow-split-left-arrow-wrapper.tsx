import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlowSplitLeftArrowIcon as FlowSplitLeftArrowIconRegular } from './flow-split-left-arrow';
import { FlowSplitLeftArrowIconBold } from './flow-split-left-arrow-bold';
import { FlowSplitLeftArrowIconFilled } from './flow-split-left-arrow-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface FlowSplitLeftArrowIconProps extends IconProps {
  variant?: IconVariant;
}

const FlowSplitLeftArrowIcon = memo(forwardRef<SVGSVGElement, FlowSplitLeftArrowIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <FlowSplitLeftArrowIconFilled ref={ref} {...props} />;
    case 'bold':
      return <FlowSplitLeftArrowIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <FlowSplitLeftArrowIconRegular ref={ref} {...props} />;
  }
}));

FlowSplitLeftArrowIcon.displayName = 'FlowSplitLeftArrowIcon';

export { FlowSplitLeftArrowIcon };
