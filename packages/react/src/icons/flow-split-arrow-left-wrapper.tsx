import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { FlowSplitArrowLeftIcon as FlowSplitArrowLeftIconRegular } from './flow-split-arrow-left';
import { FlowSplitArrowLeftIconBold } from './flow-split-arrow-left-bold';
import { FlowSplitArrowLeftIconFilled } from './flow-split-arrow-left-filled';
import { FlowSplitArrowLeftIconFilltone } from './flow-split-arrow-left-filltone';
import { FlowSplitArrowLeftIconLinetone } from './flow-split-arrow-left-linetone';

export interface FlowSplitArrowLeftIconProps extends IconProps {
  variant?: IconVariant;
}

const FlowSplitArrowLeftIcon = memo(forwardRef<SVGSVGElement, FlowSplitArrowLeftIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <FlowSplitArrowLeftIconFilled ref={ref} {...props} />;
    case 'bold':
      return <FlowSplitArrowLeftIconBold ref={ref} {...props} />;
    case 'filltone':
      return <FlowSplitArrowLeftIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <FlowSplitArrowLeftIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <FlowSplitArrowLeftIconRegular ref={ref} {...props} />;
  }
}));

FlowSplitArrowLeftIcon.displayName = 'FlowSplitArrowLeftIcon';

export { FlowSplitArrowLeftIcon };
