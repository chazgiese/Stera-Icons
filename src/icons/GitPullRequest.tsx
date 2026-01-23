import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { GitPullRequestRegular } from './GitPullRequestRegular.js';
import { GitPullRequestRegularDuotone } from './GitPullRequestRegularDuotone.js';
import { GitPullRequestBold } from './GitPullRequestBold.js';
import { GitPullRequestBoldDuotone } from './GitPullRequestBoldDuotone.js';
import { GitPullRequestFill } from './GitPullRequestFill.js';
import { GitPullRequestFillDuotone } from './GitPullRequestFillDuotone.js';

export interface GitPullRequestProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * GitPullRequest - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { GitPullRequestRegular } from 'stera-icons/icons/GitPullRequestRegular';
 */
const GitPullRequest = memo(forwardRef<SVGSVGElement, GitPullRequestProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <GitPullRequestBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <GitPullRequestBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <GitPullRequestFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <GitPullRequestFill ref={ref} {...rest} />;
  if (duotone) return <GitPullRequestRegularDuotone ref={ref} {...rest} />;
  return <GitPullRequestRegular ref={ref} {...rest} />;
}));

GitPullRequest.displayName = 'GitPullRequest';

// Triple export pattern (lucide-react style)
export { GitPullRequest, GitPullRequest as GitPullRequestIcon, GitPullRequest as SiGitPullRequest };
export default GitPullRequest;
