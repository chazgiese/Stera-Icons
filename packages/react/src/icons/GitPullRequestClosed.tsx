import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { GitPullRequestClosedRegular } from './GitPullRequestClosedRegular';
import { GitPullRequestClosedRegularDuotone } from './GitPullRequestClosedRegularDuotone';
import { GitPullRequestClosedBold } from './GitPullRequestClosedBold';
import { GitPullRequestClosedBoldDuotone } from './GitPullRequestClosedBoldDuotone';
import { GitPullRequestClosedFill } from './GitPullRequestClosedFill';
import { GitPullRequestClosedFillDuotone } from './GitPullRequestClosedFillDuotone';

export interface GitPullRequestClosedProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * GitPullRequestClosed - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { GitPullRequestClosedRegular } from 'stera-icons/GitPullRequestClosedRegular';
 */
const GitPullRequestClosed = memo(forwardRef<SVGSVGElement, GitPullRequestClosedProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <GitPullRequestClosedBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <GitPullRequestClosedBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <GitPullRequestClosedFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <GitPullRequestClosedFill ref={ref} {...rest} />;
  if (duotone) return <GitPullRequestClosedRegularDuotone ref={ref} {...rest} />;
  return <GitPullRequestClosedRegular ref={ref} {...rest} />;
}));

GitPullRequestClosed.displayName = 'GitPullRequestClosed';

// Triple export pattern (lucide-react style)
export { GitPullRequestClosed, GitPullRequestClosed as GitPullRequestClosedIcon, GitPullRequestClosed as SiGitPullRequestClosed };
