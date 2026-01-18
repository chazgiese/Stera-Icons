import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlowSplitRightRegular } from './FlowSplitRightRegular';
import { FlowSplitRightRegularDuotone } from './FlowSplitRightRegularDuotone';
import { FlowSplitRightBold } from './FlowSplitRightBold';
import { FlowSplitRightBoldDuotone } from './FlowSplitRightBoldDuotone';
import { FlowSplitRightFill } from './FlowSplitRightFill';
import { FlowSplitRightFillDuotone } from './FlowSplitRightFillDuotone';

export interface FlowSplitRightProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * FlowSplitRight with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { FlowSplitRightRegular } from 'stera-icons/FlowSplitRightRegular';
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

export { FlowSplitRight };
