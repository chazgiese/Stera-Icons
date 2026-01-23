import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { GitMergeRegular } from './GitMergeRegular.js';
import { GitMergeRegularDuotone } from './GitMergeRegularDuotone.js';
import { GitMergeBold } from './GitMergeBold.js';
import { GitMergeBoldDuotone } from './GitMergeBoldDuotone.js';
import { GitMergeFill } from './GitMergeFill.js';
import { GitMergeFillDuotone } from './GitMergeFillDuotone.js';

export interface GitMergeProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * GitMerge - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { GitMergeRegular } from 'stera-icons/icons/GitMergeRegular';
 */
const GitMerge = memo(forwardRef<SVGSVGElement, GitMergeProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <GitMergeBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <GitMergeBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <GitMergeFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <GitMergeFill ref={ref} {...rest} />;
  if (duotone) return <GitMergeRegularDuotone ref={ref} {...rest} />;
  return <GitMergeRegular ref={ref} {...rest} />;
}));

GitMerge.displayName = 'GitMerge';

// Triple export pattern (lucide-react style)
export { GitMerge, GitMerge as GitMergeIcon, GitMerge as SiGitMerge };
export default GitMerge;
