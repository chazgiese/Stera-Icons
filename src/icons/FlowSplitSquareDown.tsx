import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlowSplitSquareDownRegular } from './FlowSplitSquareDownRegular';
import { FlowSplitSquareDownRegularDuotone } from './FlowSplitSquareDownRegularDuotone';
import { FlowSplitSquareDownBold } from './FlowSplitSquareDownBold';
import { FlowSplitSquareDownBoldDuotone } from './FlowSplitSquareDownBoldDuotone';
import { FlowSplitSquareDownFill } from './FlowSplitSquareDownFill';
import { FlowSplitSquareDownFillDuotone } from './FlowSplitSquareDownFillDuotone';

export interface FlowSplitSquareDownProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * FlowSplitSquareDown - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { FlowSplitSquareDownRegular } from 'stera-icons/icons/FlowSplitSquareDownRegular';
 */
const FlowSplitSquareDown = memo(forwardRef<SVGSVGElement, FlowSplitSquareDownProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <FlowSplitSquareDownBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <FlowSplitSquareDownBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <FlowSplitSquareDownFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <FlowSplitSquareDownFill ref={ref} {...rest} />;
  if (duotone) return <FlowSplitSquareDownRegularDuotone ref={ref} {...rest} />;
  return <FlowSplitSquareDownRegular ref={ref} {...rest} />;
}));

FlowSplitSquareDown.displayName = 'FlowSplitSquareDown';

// Triple export pattern (lucide-react style)
export { FlowSplitSquareDown, FlowSplitSquareDown as FlowSplitSquareDownIcon, FlowSplitSquareDown as SiFlowSplitSquareDown };
