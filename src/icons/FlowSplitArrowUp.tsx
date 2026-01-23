import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { FlowSplitArrowUpRegular } from './FlowSplitArrowUpRegular.js';
import { FlowSplitArrowUpRegularDuotone } from './FlowSplitArrowUpRegularDuotone.js';
import { FlowSplitArrowUpBold } from './FlowSplitArrowUpBold.js';
import { FlowSplitArrowUpBoldDuotone } from './FlowSplitArrowUpBoldDuotone.js';
import { FlowSplitArrowUpFill } from './FlowSplitArrowUpFill.js';
import { FlowSplitArrowUpFillDuotone } from './FlowSplitArrowUpFillDuotone.js';

export interface FlowSplitArrowUpProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * FlowSplitArrowUp - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { FlowSplitArrowUpRegular } from 'stera-icons/icons/FlowSplitArrowUpRegular';
 */
const FlowSplitArrowUp = memo(forwardRef<SVGSVGElement, FlowSplitArrowUpProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <FlowSplitArrowUpBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <FlowSplitArrowUpBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <FlowSplitArrowUpFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <FlowSplitArrowUpFill ref={ref} {...rest} />;
  if (duotone) return <FlowSplitArrowUpRegularDuotone ref={ref} {...rest} />;
  return <FlowSplitArrowUpRegular ref={ref} {...rest} />;
}));

FlowSplitArrowUp.displayName = 'FlowSplitArrowUp';

// Triple export pattern (lucide-react style)
export { FlowSplitArrowUp, FlowSplitArrowUp as FlowSplitArrowUpIcon, FlowSplitArrowUp as SiFlowSplitArrowUp };
export default FlowSplitArrowUp;
