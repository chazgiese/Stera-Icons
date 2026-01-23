import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { FlowUpArrowRegular } from './FlowUpArrowRegular.js';
import { FlowUpArrowRegularDuotone } from './FlowUpArrowRegularDuotone.js';
import { FlowUpArrowBold } from './FlowUpArrowBold.js';
import { FlowUpArrowBoldDuotone } from './FlowUpArrowBoldDuotone.js';
import { FlowUpArrowFill } from './FlowUpArrowFill.js';
import { FlowUpArrowFillDuotone } from './FlowUpArrowFillDuotone.js';

export interface FlowUpArrowProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * FlowUpArrow - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { FlowUpArrowRegular } from 'stera-icons/icons/FlowUpArrowRegular';
 */
const FlowUpArrow = memo(forwardRef<SVGSVGElement, FlowUpArrowProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <FlowUpArrowBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <FlowUpArrowBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <FlowUpArrowFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <FlowUpArrowFill ref={ref} {...rest} />;
  if (duotone) return <FlowUpArrowRegularDuotone ref={ref} {...rest} />;
  return <FlowUpArrowRegular ref={ref} {...rest} />;
}));

FlowUpArrow.displayName = 'FlowUpArrow';

// Triple export pattern (lucide-react style)
export { FlowUpArrow, FlowUpArrow as FlowUpArrowIcon, FlowUpArrow as SiFlowUpArrow };
export default FlowUpArrow;
