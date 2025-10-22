import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { FlowSplitLeftIcon as FlowSplitLeftIconRegular } from './flow-split-left';
import { FlowSplitLeftIconBold } from './flow-split-left-bold';
import { FlowSplitLeftIconFilled } from './flow-split-left-filled';
import { FlowSplitLeftIconFilltone } from './flow-split-left-filltone';
import { FlowSplitLeftIconLinetone } from './flow-split-left-linetone';

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
    case 'filltone':
      return <FlowSplitLeftIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <FlowSplitLeftIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <FlowSplitLeftIconRegular ref={ref} {...props} />;
  }
}));

FlowSplitLeftIcon.displayName = 'FlowSplitLeftIcon';

export { FlowSplitLeftIcon };
