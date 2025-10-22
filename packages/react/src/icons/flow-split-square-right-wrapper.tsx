import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { FlowSplitSquareRightIcon as FlowSplitSquareRightIconRegular } from './flow-split-square-right';
import { FlowSplitSquareRightIconBold } from './flow-split-square-right-bold';
import { FlowSplitSquareRightIconFilled } from './flow-split-square-right-filled';
import { FlowSplitSquareRightIconFilltone } from './flow-split-square-right-filltone';
import { FlowSplitSquareRightIconLinetone } from './flow-split-square-right-linetone';

export interface FlowSplitSquareRightIconProps extends IconProps {
  variant?: IconVariant;
}

const FlowSplitSquareRightIcon = memo(forwardRef<SVGSVGElement, FlowSplitSquareRightIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <FlowSplitSquareRightIconFilled ref={ref} {...props} />;
    case 'bold':
      return <FlowSplitSquareRightIconBold ref={ref} {...props} />;
    case 'filltone':
      return <FlowSplitSquareRightIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <FlowSplitSquareRightIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <FlowSplitSquareRightIconRegular ref={ref} {...props} />;
  }
}));

FlowSplitSquareRightIcon.displayName = 'FlowSplitSquareRightIcon';

export { FlowSplitSquareRightIcon };
