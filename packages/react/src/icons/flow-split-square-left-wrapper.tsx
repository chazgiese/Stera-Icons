import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { FlowSplitSquareLeftIcon as FlowSplitSquareLeftIconRegular } from './flow-split-square-left';
import { FlowSplitSquareLeftIconBold } from './flow-split-square-left-bold';
import { FlowSplitSquareLeftIconFilled } from './flow-split-square-left-filled';
import { FlowSplitSquareLeftIconFilltone } from './flow-split-square-left-filltone';
import { FlowSplitSquareLeftIconLinetone } from './flow-split-square-left-linetone';

export interface FlowSplitSquareLeftIconProps extends IconProps {
  variant?: IconVariant;
}

const FlowSplitSquareLeftIcon = memo(forwardRef<SVGSVGElement, FlowSplitSquareLeftIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <FlowSplitSquareLeftIconFilled ref={ref} {...props} />;
    case 'bold':
      return <FlowSplitSquareLeftIconBold ref={ref} {...props} />;
    case 'filltone':
      return <FlowSplitSquareLeftIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <FlowSplitSquareLeftIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <FlowSplitSquareLeftIconRegular ref={ref} {...props} />;
  }
}));

FlowSplitSquareLeftIcon.displayName = 'FlowSplitSquareLeftIcon';

export { FlowSplitSquareLeftIcon };
