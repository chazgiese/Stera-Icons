import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { GitPullRequestDraftRegular } from './GitPullRequestDraftRegular';
import { GitPullRequestDraftRegularDuotone } from './GitPullRequestDraftRegularDuotone';
import { GitPullRequestDraftBold } from './GitPullRequestDraftBold';
import { GitPullRequestDraftBoldDuotone } from './GitPullRequestDraftBoldDuotone';
import { GitPullRequestDraftFill } from './GitPullRequestDraftFill';
import { GitPullRequestDraftFillDuotone } from './GitPullRequestDraftFillDuotone';

export interface GitPullRequestDraftProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * GitPullRequestDraft - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { GitPullRequestDraftRegular } from 'stera-icons/icons/GitPullRequestDraftRegular';
 */
const GitPullRequestDraft = memo(forwardRef<SVGSVGElement, GitPullRequestDraftProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <GitPullRequestDraftBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <GitPullRequestDraftBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <GitPullRequestDraftFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <GitPullRequestDraftFill ref={ref} {...rest} />;
  if (duotone) return <GitPullRequestDraftRegularDuotone ref={ref} {...rest} />;
  return <GitPullRequestDraftRegular ref={ref} {...rest} />;
}));

GitPullRequestDraft.displayName = 'GitPullRequestDraft';

// Triple export pattern (lucide-react style)
export { GitPullRequestDraft, GitPullRequestDraft as GitPullRequestDraftIcon, GitPullRequestDraft as SiGitPullRequestDraft };
