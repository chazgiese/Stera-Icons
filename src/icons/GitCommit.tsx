import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { GitCommitRegular } from './GitCommitRegular';
import { GitCommitRegularDuotone } from './GitCommitRegularDuotone';
import { GitCommitBold } from './GitCommitBold';
import { GitCommitBoldDuotone } from './GitCommitBoldDuotone';
import { GitCommitFill } from './GitCommitFill';
import { GitCommitFillDuotone } from './GitCommitFillDuotone';

export interface GitCommitProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * GitCommit - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { GitCommitRegular } from 'stera-icons/icons/GitCommitRegular';
 */
const GitCommit = memo(forwardRef<SVGSVGElement, GitCommitProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <GitCommitBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <GitCommitBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <GitCommitFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <GitCommitFill ref={ref} {...rest} />;
  if (duotone) return <GitCommitRegularDuotone ref={ref} {...rest} />;
  return <GitCommitRegular ref={ref} {...rest} />;
}));

GitCommit.displayName = 'GitCommit';

// Triple export pattern (lucide-react style)
export { GitCommit, GitCommit as GitCommitIcon, GitCommit as SiGitCommit };
export default GitCommit;
