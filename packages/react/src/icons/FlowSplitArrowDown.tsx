import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlowSplitArrowDownRegular } from './FlowSplitArrowDownRegular';
import { FlowSplitArrowDownRegularDuotone } from './FlowSplitArrowDownRegularDuotone';
import { FlowSplitArrowDownBold } from './FlowSplitArrowDownBold';
import { FlowSplitArrowDownBoldDuotone } from './FlowSplitArrowDownBoldDuotone';
import { FlowSplitArrowDownFill } from './FlowSplitArrowDownFill';
import { FlowSplitArrowDownFillDuotone } from './FlowSplitArrowDownFillDuotone';

export interface FlowSplitArrowDownProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * FlowSplitArrowDown - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { FlowSplitArrowDownRegular } from 'stera-icons/FlowSplitArrowDownRegular';
 */
const FlowSplitArrowDown = memo(forwardRef<SVGSVGElement, FlowSplitArrowDownProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <FlowSplitArrowDownBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <FlowSplitArrowDownBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <FlowSplitArrowDownFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <FlowSplitArrowDownFill ref={ref} {...rest} />;
  if (duotone) return <FlowSplitArrowDownRegularDuotone ref={ref} {...rest} />;
  return <FlowSplitArrowDownRegular ref={ref} {...rest} />;
}));

FlowSplitArrowDown.displayName = 'FlowSplitArrowDown';

// Triple export pattern (lucide-react style)
export { FlowSplitArrowDown, FlowSplitArrowDown as FlowSplitArrowDownIcon, FlowSplitArrowDown as SiFlowSplitArrowDown };
