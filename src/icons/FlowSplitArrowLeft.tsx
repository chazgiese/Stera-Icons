import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlowSplitArrowLeftRegular } from './FlowSplitArrowLeftRegular';
import { FlowSplitArrowLeftRegularDuotone } from './FlowSplitArrowLeftRegularDuotone';
import { FlowSplitArrowLeftBold } from './FlowSplitArrowLeftBold';
import { FlowSplitArrowLeftBoldDuotone } from './FlowSplitArrowLeftBoldDuotone';
import { FlowSplitArrowLeftFill } from './FlowSplitArrowLeftFill';
import { FlowSplitArrowLeftFillDuotone } from './FlowSplitArrowLeftFillDuotone';

export interface FlowSplitArrowLeftProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * FlowSplitArrowLeft - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { FlowSplitArrowLeftRegular } from 'stera-icons/icons/FlowSplitArrowLeftRegular';
 */
const FlowSplitArrowLeft = memo(forwardRef<SVGSVGElement, FlowSplitArrowLeftProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <FlowSplitArrowLeftBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <FlowSplitArrowLeftBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <FlowSplitArrowLeftFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <FlowSplitArrowLeftFill ref={ref} {...rest} />;
  if (duotone) return <FlowSplitArrowLeftRegularDuotone ref={ref} {...rest} />;
  return <FlowSplitArrowLeftRegular ref={ref} {...rest} />;
}));

FlowSplitArrowLeft.displayName = 'FlowSplitArrowLeft';

// Triple export pattern (lucide-react style)
export { FlowSplitArrowLeft, FlowSplitArrowLeft as FlowSplitArrowLeftIcon, FlowSplitArrowLeft as SiFlowSplitArrowLeft };
