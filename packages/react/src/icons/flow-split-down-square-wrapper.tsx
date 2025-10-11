import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlowSplitDownSquareIcon as FlowSplitDownSquareIconRegular } from './flow-split-down-square';
import { FlowSplitDownSquareIconBold } from './flow-split-down-square-bold';
import { FlowSplitDownSquareIconFilled } from './flow-split-down-square-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface FlowSplitDownSquareIconProps extends IconProps {
  variant?: IconVariant;
}

const FlowSplitDownSquareIcon = memo(forwardRef<SVGSVGElement, FlowSplitDownSquareIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <FlowSplitDownSquareIconFilled ref={ref} {...props} />;
    case 'bold':
      return <FlowSplitDownSquareIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <FlowSplitDownSquareIconRegular ref={ref} {...props} />;
  }
}));

FlowSplitDownSquareIcon.displayName = 'FlowSplitDownSquareIcon';

export { FlowSplitDownSquareIcon };
