import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { FlowMergeIcon as FlowMergeIconRegular } from './flow-merge';
import { FlowMergeIconBold } from './flow-merge-bold';
import { FlowMergeIconFilled } from './flow-merge-filled';
import { FlowMergeIconFilltone } from './flow-merge-filltone';
import { FlowMergeIconLinetone } from './flow-merge-linetone';

export interface FlowMergeIconProps extends IconProps {
  variant?: IconVariant;
}

const FlowMergeIcon = memo(forwardRef<SVGSVGElement, FlowMergeIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <FlowMergeIconFilled ref={ref} {...props} />;
    case 'bold':
      return <FlowMergeIconBold ref={ref} {...props} />;
    case 'filltone':
      return <FlowMergeIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <FlowMergeIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <FlowMergeIconRegular ref={ref} {...props} />;
  }
}));

FlowMergeIcon.displayName = 'FlowMergeIcon';

export { FlowMergeIcon };
