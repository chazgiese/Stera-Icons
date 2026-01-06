import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlowDiagramIcon as RegularFlowDiagramIcon } from './flow-diagram';
import { FlowDiagramIconDuotone as FlowDiagramIconDuotone } from './flow-diagram-duotone';
import { FlowDiagramIconBold as FlowDiagramIconBold } from './flow-diagram-bold';
import { FlowDiagramIconBoldDuotone as FlowDiagramIconBoldDuotone } from './flow-diagram-bold-duotone';
import { FlowDiagramIconFill as FlowDiagramIconFill } from './flow-diagram-fill';
import { FlowDiagramIconFillDuotone as FlowDiagramIconFillDuotone } from './flow-diagram-fill-duotone';

export interface FlowDiagramIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const FlowDiagramIcon = memo(forwardRef<SVGSVGElement, FlowDiagramIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <FlowDiagramIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <FlowDiagramIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <FlowDiagramIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <FlowDiagramIconFill ref={ref} {...props} />;
  if (duotone) return <FlowDiagramIconDuotone ref={ref} {...props} />;
  return <RegularFlowDiagramIcon ref={ref} {...props} />;
}));

FlowDiagramIcon.displayName = 'FlowDiagramIcon';

export { FlowDiagramIcon };
