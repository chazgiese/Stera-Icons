import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { FlowSplitLeftRegular } from './FlowSplitLeftRegular.js';
import { FlowSplitLeftRegularDuotone } from './FlowSplitLeftRegularDuotone.js';
import { FlowSplitLeftBold } from './FlowSplitLeftBold.js';
import { FlowSplitLeftBoldDuotone } from './FlowSplitLeftBoldDuotone.js';
import { FlowSplitLeftFill } from './FlowSplitLeftFill.js';
import { FlowSplitLeftFillDuotone } from './FlowSplitLeftFillDuotone.js';

export interface FlowSplitLeftProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * FlowSplitLeft - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { FlowSplitLeftRegular } from 'stera-icons/icons/FlowSplitLeftRegular';
 */
const FlowSplitLeft = memo(forwardRef<SVGSVGElement, FlowSplitLeftProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <FlowSplitLeftBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <FlowSplitLeftBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <FlowSplitLeftFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <FlowSplitLeftFill ref={ref} {...rest} />;
  if (duotone) return <FlowSplitLeftRegularDuotone ref={ref} {...rest} />;
  return <FlowSplitLeftRegular ref={ref} {...rest} />;
}));

FlowSplitLeft.displayName = 'FlowSplitLeft';

// Triple export pattern (lucide-react style)
export { FlowSplitLeft, FlowSplitLeft as FlowSplitLeftIcon, FlowSplitLeft as SiFlowSplitLeft };
export default FlowSplitLeft;
