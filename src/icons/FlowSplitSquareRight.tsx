import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlowSplitSquareRightRegular } from './FlowSplitSquareRightRegular';
import { FlowSplitSquareRightRegularDuotone } from './FlowSplitSquareRightRegularDuotone';
import { FlowSplitSquareRightBold } from './FlowSplitSquareRightBold';
import { FlowSplitSquareRightBoldDuotone } from './FlowSplitSquareRightBoldDuotone';
import { FlowSplitSquareRightFill } from './FlowSplitSquareRightFill';
import { FlowSplitSquareRightFillDuotone } from './FlowSplitSquareRightFillDuotone';

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
