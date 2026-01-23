import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { FlowRightArrowRegular } from './FlowRightArrowRegular.js';
import { FlowRightArrowRegularDuotone } from './FlowRightArrowRegularDuotone.js';
import { FlowRightArrowBold } from './FlowRightArrowBold.js';
import { FlowRightArrowBoldDuotone } from './FlowRightArrowBoldDuotone.js';
import { FlowRightArrowFill } from './FlowRightArrowFill.js';
import { FlowRightArrowFillDuotone } from './FlowRightArrowFillDuotone.js';

export interface FlowRightArrowProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * FlowRightArrow - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { FlowRightArrowRegular } from 'stera-icons/icons/FlowRightArrowRegular';
 */
const FlowRightArrow = memo(forwardRef<SVGSVGElement, FlowRightArrowProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <FlowRightArrowBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <FlowRightArrowBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <FlowRightArrowFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <FlowRightArrowFill ref={ref} {...rest} />;
  if (duotone) return <FlowRightArrowRegularDuotone ref={ref} {...rest} />;
  return <FlowRightArrowRegular ref={ref} {...rest} />;
}));

FlowRightArrow.displayName = 'FlowRightArrow';

// Triple export pattern (lucide-react style)
export { FlowRightArrow, FlowRightArrow as FlowRightArrowIcon, FlowRightArrow as SiFlowRightArrow };
export default FlowRightArrow;
