import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlowSplitDownRegular } from './FlowSplitDownRegular';
import { FlowSplitDownRegularDuotone } from './FlowSplitDownRegularDuotone';
import { FlowSplitDownBold } from './FlowSplitDownBold';
import { FlowSplitDownBoldDuotone } from './FlowSplitDownBoldDuotone';
import { FlowSplitDownFill } from './FlowSplitDownFill';
import { FlowSplitDownFillDuotone } from './FlowSplitDownFillDuotone';

export interface FlowSplitDownProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * FlowSplitDown - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { FlowSplitDownRegular } from 'stera-icons/icons/FlowSplitDownRegular';
 */
const FlowSplitDown = memo(forwardRef<SVGSVGElement, FlowSplitDownProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <FlowSplitDownBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <FlowSplitDownBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <FlowSplitDownFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <FlowSplitDownFill ref={ref} {...rest} />;
  if (duotone) return <FlowSplitDownRegularDuotone ref={ref} {...rest} />;
  return <FlowSplitDownRegular ref={ref} {...rest} />;
}));

FlowSplitDown.displayName = 'FlowSplitDown';

// Triple export pattern (lucide-react style)
export { FlowSplitDown, FlowSplitDown as FlowSplitDownIcon, FlowSplitDown as SiFlowSplitDown };
