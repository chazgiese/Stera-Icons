import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { FlowSplitUpRegular } from './FlowSplitUpRegular.js';
import { FlowSplitUpRegularDuotone } from './FlowSplitUpRegularDuotone.js';
import { FlowSplitUpBold } from './FlowSplitUpBold.js';
import { FlowSplitUpBoldDuotone } from './FlowSplitUpBoldDuotone.js';
import { FlowSplitUpFill } from './FlowSplitUpFill.js';
import { FlowSplitUpFillDuotone } from './FlowSplitUpFillDuotone.js';

export interface FlowSplitUpProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * FlowSplitUp - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { FlowSplitUpRegular } from 'stera-icons/icons/FlowSplitUpRegular';
 */
const FlowSplitUp = memo(forwardRef<SVGSVGElement, FlowSplitUpProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <FlowSplitUpBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <FlowSplitUpBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <FlowSplitUpFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <FlowSplitUpFill ref={ref} {...rest} />;
  if (duotone) return <FlowSplitUpRegularDuotone ref={ref} {...rest} />;
  return <FlowSplitUpRegular ref={ref} {...rest} />;
}));

FlowSplitUp.displayName = 'FlowSplitUp';

// Triple export pattern (lucide-react style)
export { FlowSplitUp, FlowSplitUp as FlowSplitUpIcon, FlowSplitUp as SiFlowSplitUp };
export default FlowSplitUp;
