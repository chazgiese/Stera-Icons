import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { FlowSplitRightRegular } from './FlowSplitRightRegular.js';
import { FlowSplitRightRegularDuotone } from './FlowSplitRightRegularDuotone.js';
import { FlowSplitRightBold } from './FlowSplitRightBold.js';
import { FlowSplitRightBoldDuotone } from './FlowSplitRightBoldDuotone.js';
import { FlowSplitRightFill } from './FlowSplitRightFill.js';
import { FlowSplitRightFillDuotone } from './FlowSplitRightFillDuotone.js';

export interface FlowSplitRightProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * FlowSplitRight - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { FlowSplitRightRegular } from 'stera-icons/icons/FlowSplitRightRegular';
 */
const FlowSplitRight = memo(forwardRef<SVGSVGElement, FlowSplitRightProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <FlowSplitRightBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <FlowSplitRightBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <FlowSplitRightFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <FlowSplitRightFill ref={ref} {...rest} />;
  if (duotone) return <FlowSplitRightRegularDuotone ref={ref} {...rest} />;
  return <FlowSplitRightRegular ref={ref} {...rest} />;
}));

FlowSplitRight.displayName = 'FlowSplitRight';

// Triple export pattern (lucide-react style)
export { FlowSplitRight, FlowSplitRight as FlowSplitRightIcon, FlowSplitRight as SiFlowSplitRight };
export default FlowSplitRight;
