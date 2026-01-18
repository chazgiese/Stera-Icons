import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlowBranchRegular } from './FlowBranchRegular';
import { FlowBranchRegularDuotone } from './FlowBranchRegularDuotone';
import { FlowBranchBold } from './FlowBranchBold';
import { FlowBranchBoldDuotone } from './FlowBranchBoldDuotone';
import { FlowBranchFill } from './FlowBranchFill';
import { FlowBranchFillDuotone } from './FlowBranchFillDuotone';

export interface FlowBranchProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * FlowBranch with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { FlowBranchRegular } from 'stera-icons/FlowBranchRegular';
 */
const FlowBranch = memo(forwardRef<SVGSVGElement, FlowBranchProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <FlowBranchBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <FlowBranchBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <FlowBranchFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <FlowBranchFill ref={ref} {...rest} />;
  if (duotone) return <FlowBranchRegularDuotone ref={ref} {...rest} />;
  return <FlowBranchRegular ref={ref} {...rest} />;
}));

FlowBranch.displayName = 'FlowBranch';

export { FlowBranch };
