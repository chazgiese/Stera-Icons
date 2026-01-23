import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { FlowSplitSquareRightRegular } from './FlowSplitSquareRightRegular.js';
import { FlowSplitSquareRightRegularDuotone } from './FlowSplitSquareRightRegularDuotone.js';
import { FlowSplitSquareRightBold } from './FlowSplitSquareRightBold.js';
import { FlowSplitSquareRightBoldDuotone } from './FlowSplitSquareRightBoldDuotone.js';
import { FlowSplitSquareRightFill } from './FlowSplitSquareRightFill.js';
import { FlowSplitSquareRightFillDuotone } from './FlowSplitSquareRightFillDuotone.js';

export interface FlowSplitSquareRightProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * FlowSplitSquareRight - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { FlowSplitSquareRightRegular } from 'stera-icons/icons/FlowSplitSquareRightRegular';
 */
const FlowSplitSquareRight = memo(forwardRef<SVGSVGElement, FlowSplitSquareRightProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <FlowSplitSquareRightBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <FlowSplitSquareRightBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <FlowSplitSquareRightFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <FlowSplitSquareRightFill ref={ref} {...rest} />;
  if (duotone) return <FlowSplitSquareRightRegularDuotone ref={ref} {...rest} />;
  return <FlowSplitSquareRightRegular ref={ref} {...rest} />;
}));

FlowSplitSquareRight.displayName = 'FlowSplitSquareRight';

// Triple export pattern (lucide-react style)
export { FlowSplitSquareRight, FlowSplitSquareRight as FlowSplitSquareRightIcon, FlowSplitSquareRight as SiFlowSplitSquareRight };
export default FlowSplitSquareRight;
