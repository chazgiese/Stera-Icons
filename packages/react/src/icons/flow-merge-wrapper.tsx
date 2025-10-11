import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlowMergeIcon as FlowMergeIconRegular } from './flow-merge';
import { FlowMergeIconBold } from './flow-merge-bold';
import { FlowMergeIconFilled } from './flow-merge-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <FlowMergeIconRegular ref={ref} {...props} />;
  }
}));

FlowMergeIcon.displayName = 'FlowMergeIcon';

export { FlowMergeIcon };
