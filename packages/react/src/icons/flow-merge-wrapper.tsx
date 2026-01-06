import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlowMergeIcon as RegularFlowMergeIcon } from './flow-merge';
import { FlowMergeIconDuotone as FlowMergeIconDuotone } from './flow-merge-duotone';
import { FlowMergeIconBold as FlowMergeIconBold } from './flow-merge-bold';
import { FlowMergeIconBoldDuotone as FlowMergeIconBoldDuotone } from './flow-merge-bold-duotone';
import { FlowMergeIconFill as FlowMergeIconFill } from './flow-merge-fill';
import { FlowMergeIconFillDuotone as FlowMergeIconFillDuotone } from './flow-merge-fill-duotone';

export interface FlowMergeIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const FlowMergeIcon = memo(forwardRef<SVGSVGElement, FlowMergeIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <FlowMergeIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <FlowMergeIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <FlowMergeIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <FlowMergeIconFill ref={ref} {...props} />;
  if (duotone) return <FlowMergeIconDuotone ref={ref} {...props} />;
  return <RegularFlowMergeIcon ref={ref} {...props} />;
}));

FlowMergeIcon.displayName = 'FlowMergeIcon';

export { FlowMergeIcon };
