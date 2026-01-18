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
 * FlowSplitDown with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { FlowSplitDownRegular } from 'stera-icons/FlowSplitDownRegular';
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

export { FlowSplitDown };
