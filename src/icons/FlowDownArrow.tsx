import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlowDownArrowRegular } from './FlowDownArrowRegular';
import { FlowDownArrowRegularDuotone } from './FlowDownArrowRegularDuotone';
import { FlowDownArrowBold } from './FlowDownArrowBold';
import { FlowDownArrowBoldDuotone } from './FlowDownArrowBoldDuotone';
import { FlowDownArrowFill } from './FlowDownArrowFill';
import { FlowDownArrowFillDuotone } from './FlowDownArrowFillDuotone';

export interface FlowDownArrowProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * FlowDownArrow - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { FlowDownArrowRegular } from 'stera-icons/icons/FlowDownArrowRegular';
 */
const FlowDownArrow = memo(forwardRef<SVGSVGElement, FlowDownArrowProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <FlowDownArrowBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <FlowDownArrowBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <FlowDownArrowFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <FlowDownArrowFill ref={ref} {...rest} />;
  if (duotone) return <FlowDownArrowRegularDuotone ref={ref} {...rest} />;
  return <FlowDownArrowRegular ref={ref} {...rest} />;
}));

FlowDownArrow.displayName = 'FlowDownArrow';

// Triple export pattern (lucide-react style)
export { FlowDownArrow, FlowDownArrow as FlowDownArrowIcon, FlowDownArrow as SiFlowDownArrow };
export default FlowDownArrow;
