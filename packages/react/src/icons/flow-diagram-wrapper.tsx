import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlowDiagramIcon as FlowDiagramIconRegular } from './flow-diagram';
import { FlowDiagramIconBold } from './flow-diagram-bold';
import { FlowDiagramIconFilled } from './flow-diagram-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <FlowDiagramIconRegular ref={ref} {...props} />;
  }
}));

FlowDiagramIcon.displayName = 'FlowDiagramIcon';

export { FlowDiagramIcon };
