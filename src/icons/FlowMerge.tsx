import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { FlowMergeRegular } from './FlowMergeRegular.js';
import { FlowMergeRegularDuotone } from './FlowMergeRegularDuotone.js';
import { FlowMergeBold } from './FlowMergeBold.js';
import { FlowMergeBoldDuotone } from './FlowMergeBoldDuotone.js';
import { FlowMergeFill } from './FlowMergeFill.js';
import { FlowMergeFillDuotone } from './FlowMergeFillDuotone.js';

export interface FlowMergeProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * FlowMerge - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { FlowMergeRegular } from 'stera-icons/icons/FlowMergeRegular';
 */
const FlowMerge = memo(forwardRef<SVGSVGElement, FlowMergeProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <FlowMergeBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <FlowMergeBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <FlowMergeFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <FlowMergeFill ref={ref} {...rest} />;
  if (duotone) return <FlowMergeRegularDuotone ref={ref} {...rest} />;
  return <FlowMergeRegular ref={ref} {...rest} />;
}));

FlowMerge.displayName = 'FlowMerge';

// Triple export pattern (lucide-react style)
export { FlowMerge, FlowMerge as FlowMergeIcon, FlowMerge as SiFlowMerge };
export default FlowMerge;
