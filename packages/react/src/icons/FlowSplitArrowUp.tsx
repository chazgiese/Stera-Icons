import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlowSplitArrowUpRegular } from './FlowSplitArrowUpRegular';
import { FlowSplitArrowUpRegularDuotone } from './FlowSplitArrowUpRegularDuotone';
import { FlowSplitArrowUpBold } from './FlowSplitArrowUpBold';
import { FlowSplitArrowUpBoldDuotone } from './FlowSplitArrowUpBoldDuotone';
import { FlowSplitArrowUpFill } from './FlowSplitArrowUpFill';
import { FlowSplitArrowUpFillDuotone } from './FlowSplitArrowUpFillDuotone';

export interface FlowSplitArrowUpProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * FlowSplitArrowUp with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { FlowSplitArrowUpRegular } from 'stera-icons/FlowSplitArrowUpRegular';
 */
const FlowSplitArrowUp = memo(forwardRef<SVGSVGElement, FlowSplitArrowUpProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <FlowSplitArrowUpBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <FlowSplitArrowUpBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <FlowSplitArrowUpFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <FlowSplitArrowUpFill ref={ref} {...rest} />;
  if (duotone) return <FlowSplitArrowUpRegularDuotone ref={ref} {...rest} />;
  return <FlowSplitArrowUpRegular ref={ref} {...rest} />;
}));

FlowSplitArrowUp.displayName = 'FlowSplitArrowUp';

export { FlowSplitArrowUp };
