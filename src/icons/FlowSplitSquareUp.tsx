import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlowSplitSquareUpRegular } from './FlowSplitSquareUpRegular';
import { FlowSplitSquareUpRegularDuotone } from './FlowSplitSquareUpRegularDuotone';
import { FlowSplitSquareUpBold } from './FlowSplitSquareUpBold';
import { FlowSplitSquareUpBoldDuotone } from './FlowSplitSquareUpBoldDuotone';
import { FlowSplitSquareUpFill } from './FlowSplitSquareUpFill';
import { FlowSplitSquareUpFillDuotone } from './FlowSplitSquareUpFillDuotone';

export interface FlowSplitSquareUpProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * FlowSplitSquareUp - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { FlowSplitSquareUpRegular } from 'stera-icons/icons/FlowSplitSquareUpRegular';
 */
const FlowSplitSquareUp = memo(forwardRef<SVGSVGElement, FlowSplitSquareUpProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <FlowSplitSquareUpBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <FlowSplitSquareUpBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <FlowSplitSquareUpFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <FlowSplitSquareUpFill ref={ref} {...rest} />;
  if (duotone) return <FlowSplitSquareUpRegularDuotone ref={ref} {...rest} />;
  return <FlowSplitSquareUpRegular ref={ref} {...rest} />;
}));

FlowSplitSquareUp.displayName = 'FlowSplitSquareUp';

// Triple export pattern (lucide-react style)
export { FlowSplitSquareUp, FlowSplitSquareUp as FlowSplitSquareUpIcon, FlowSplitSquareUp as SiFlowSplitSquareUp };
export default FlowSplitSquareUp;
