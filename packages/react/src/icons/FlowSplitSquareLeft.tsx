import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlowSplitSquareLeftRegular } from './FlowSplitSquareLeftRegular';
import { FlowSplitSquareLeftRegularDuotone } from './FlowSplitSquareLeftRegularDuotone';
import { FlowSplitSquareLeftBold } from './FlowSplitSquareLeftBold';
import { FlowSplitSquareLeftBoldDuotone } from './FlowSplitSquareLeftBoldDuotone';
import { FlowSplitSquareLeftFill } from './FlowSplitSquareLeftFill';
import { FlowSplitSquareLeftFillDuotone } from './FlowSplitSquareLeftFillDuotone';

export interface FlowSplitSquareLeftProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * FlowSplitSquareLeft with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { FlowSplitSquareLeftRegular } from 'stera-icons/FlowSplitSquareLeftRegular';
 */
const FlowSplitSquareLeft = memo(forwardRef<SVGSVGElement, FlowSplitSquareLeftProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <FlowSplitSquareLeftBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <FlowSplitSquareLeftBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <FlowSplitSquareLeftFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <FlowSplitSquareLeftFill ref={ref} {...rest} />;
  if (duotone) return <FlowSplitSquareLeftRegularDuotone ref={ref} {...rest} />;
  return <FlowSplitSquareLeftRegular ref={ref} {...rest} />;
}));

FlowSplitSquareLeft.displayName = 'FlowSplitSquareLeft';

export { FlowSplitSquareLeft };
