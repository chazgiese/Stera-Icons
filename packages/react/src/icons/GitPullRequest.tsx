import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { GitPullRequestRegular } from './GitPullRequestRegular';
import { GitPullRequestRegularDuotone } from './GitPullRequestRegularDuotone';
import { GitPullRequestBold } from './GitPullRequestBold';
import { GitPullRequestBoldDuotone } from './GitPullRequestBoldDuotone';
import { GitPullRequestFill } from './GitPullRequestFill';
import { GitPullRequestFillDuotone } from './GitPullRequestFillDuotone';

export interface GitPullRequestProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * GitPullRequest - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { GitPullRequestRegular } from 'stera-icons/GitPullRequestRegular';
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
