import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlowSplitRightSquareIcon as FlowSplitRightSquareIconRegular } from './flow-split-right-square';
import { FlowSplitRightSquareIconBold } from './flow-split-right-square-bold';
import { FlowSplitRightSquareIconFilled } from './flow-split-right-square-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface FlowSplitRightSquareIconProps extends IconProps {
  variant?: IconVariant;
}

const FlowSplitRightSquareIcon = memo(forwardRef<SVGSVGElement, FlowSplitRightSquareIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <FlowSplitRightSquareIconFilled ref={ref} {...props} />;
    case 'bold':
      return <FlowSplitRightSquareIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <FlowSplitRightSquareIconRegular ref={ref} {...props} />;
  }
}));

FlowSplitRightSquareIcon.displayName = 'FlowSplitRightSquareIcon';

export { FlowSplitRightSquareIcon };
