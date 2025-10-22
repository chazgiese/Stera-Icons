import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { FlowDiagramIcon as RegularFlowDiagramIcon } from './flow-diagram';
import { FlowDiagramIconBold } from './flow-diagram-bold';
import { FlowDiagramIconFilled } from './flow-diagram-filled';
import { FlowDiagramIconFilltone } from './flow-diagram-filltone';
import { FlowDiagramIconLinetone } from './flow-diagram-linetone';

export interface FlowDiagramIconProps extends IconProps {
  variant?: IconVariant;
}

const FlowDiagramIcon = memo(forwardRef<SVGSVGElement, FlowDiagramIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <FlowDiagramIconFilled ref={ref} {...props} />;
    case 'bold':
      return <FlowDiagramIconBold ref={ref} {...props} />;
    case 'filltone':
      return <FlowDiagramIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <FlowDiagramIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularFlowDiagramIcon ref={ref} {...props} />;
  }
}));

FlowDiagramIcon.displayName = 'FlowDiagramIcon';

export { FlowDiagramIcon };
