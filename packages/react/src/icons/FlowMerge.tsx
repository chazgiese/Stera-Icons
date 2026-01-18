import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlowMergeRegular } from './FlowMergeRegular';
import { FlowMergeRegularDuotone } from './FlowMergeRegularDuotone';
import { FlowMergeBold } from './FlowMergeBold';
import { FlowMergeBoldDuotone } from './FlowMergeBoldDuotone';
import { FlowMergeFill } from './FlowMergeFill';
import { FlowMergeFillDuotone } from './FlowMergeFillDuotone';

export interface FlowMergeProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * FlowMerge with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { FlowMergeRegular } from 'stera-icons/FlowMergeRegular';
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

export { FlowMerge };
