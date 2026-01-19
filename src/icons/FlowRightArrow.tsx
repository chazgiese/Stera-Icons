import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlowRightArrowRegular } from './FlowRightArrowRegular';
import { FlowRightArrowRegularDuotone } from './FlowRightArrowRegularDuotone';
import { FlowRightArrowBold } from './FlowRightArrowBold';
import { FlowRightArrowBoldDuotone } from './FlowRightArrowBoldDuotone';
import { FlowRightArrowFill } from './FlowRightArrowFill';
import { FlowRightArrowFillDuotone } from './FlowRightArrowFillDuotone';

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
