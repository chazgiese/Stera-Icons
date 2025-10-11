import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlowSplitLeftIcon as FlowSplitLeftIconRegular } from './flow-split-left';
import { FlowSplitLeftIconBold } from './flow-split-left-bold';
import { FlowSplitLeftIconFilled } from './flow-split-left-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface FlowSplitLeftIconProps extends IconProps {
  variant?: IconVariant;
}

const FlowSplitLeftIcon = memo(forwardRef<SVGSVGElement, FlowSplitLeftIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <FlowSplitLeftIconFilled ref={ref} {...props} />;
    case 'bold':
      return <FlowSplitLeftIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <FlowSplitLeftIconRegular ref={ref} {...props} />;
  }
}));

FlowSplitLeftIcon.displayName = 'FlowSplitLeftIcon';

export { FlowSplitLeftIcon };
