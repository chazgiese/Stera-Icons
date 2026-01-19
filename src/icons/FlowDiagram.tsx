import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlowDiagramRegular } from './FlowDiagramRegular';
import { FlowDiagramRegularDuotone } from './FlowDiagramRegularDuotone';
import { FlowDiagramBold } from './FlowDiagramBold';
import { FlowDiagramBoldDuotone } from './FlowDiagramBoldDuotone';
import { FlowDiagramFill } from './FlowDiagramFill';
import { FlowDiagramFillDuotone } from './FlowDiagramFillDuotone';

export interface FlowDiagramProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * FlowDiagram - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { FlowDiagramRegular } from 'stera-icons/icons/FlowDiagramRegular';
 */
const FlowDiagram = memo(forwardRef<SVGSVGElement, FlowDiagramProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <FlowDiagramBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <FlowDiagramBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <FlowDiagramFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <FlowDiagramFill ref={ref} {...rest} />;
  if (duotone) return <FlowDiagramRegularDuotone ref={ref} {...rest} />;
  return <FlowDiagramRegular ref={ref} {...rest} />;
}));

FlowDiagram.displayName = 'FlowDiagram';

// Triple export pattern (lucide-react style)
export { FlowDiagram, FlowDiagram as FlowDiagramIcon, FlowDiagram as SiFlowDiagram };
