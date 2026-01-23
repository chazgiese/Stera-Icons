import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { GitCompareRegular } from './GitCompareRegular.js';
import { GitCompareRegularDuotone } from './GitCompareRegularDuotone.js';
import { GitCompareBold } from './GitCompareBold.js';
import { GitCompareBoldDuotone } from './GitCompareBoldDuotone.js';
import { GitCompareFill } from './GitCompareFill.js';
import { GitCompareFillDuotone } from './GitCompareFillDuotone.js';

export interface GitCompareProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * GitCompare - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { GitCompareRegular } from 'stera-icons/icons/GitCompareRegular';
 */
const GitCompare = memo(forwardRef<SVGSVGElement, GitCompareProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <GitCompareBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <GitCompareBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <GitCompareFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <GitCompareFill ref={ref} {...rest} />;
  if (duotone) return <GitCompareRegularDuotone ref={ref} {...rest} />;
  return <GitCompareRegular ref={ref} {...rest} />;
}));

GitCompare.displayName = 'GitCompare';

// Triple export pattern (lucide-react style)
export { GitCompare, GitCompare as GitCompareIcon, GitCompare as SiGitCompare };
export default GitCompare;
