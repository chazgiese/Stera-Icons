import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { GitBranchRegular } from './GitBranchRegular';
import { GitBranchRegularDuotone } from './GitBranchRegularDuotone';
import { GitBranchBold } from './GitBranchBold';
import { GitBranchBoldDuotone } from './GitBranchBoldDuotone';
import { GitBranchFill } from './GitBranchFill';
import { GitBranchFillDuotone } from './GitBranchFillDuotone';

export interface GitBranchProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * GitBranch - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { GitBranchRegular } from 'stera-icons/GitBranchRegular';
 */
const GitBranch = memo(forwardRef<SVGSVGElement, GitBranchProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <GitBranchBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <GitBranchBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <GitBranchFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <GitBranchFill ref={ref} {...rest} />;
  if (duotone) return <GitBranchRegularDuotone ref={ref} {...rest} />;
  return <GitBranchRegular ref={ref} {...rest} />;
}));

GitBranch.displayName = 'GitBranch';

// Triple export pattern (lucide-react style)
export { GitBranch, GitBranch as GitBranchIcon, GitBranch as SiGitBranch };
