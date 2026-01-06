import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { GitCompareIcon as RegularGitCompareIcon } from './git-compare';
import { GitCompareIconDuotone as GitCompareIconDuotone } from './git-compare-duotone';
import { GitCompareIconBold as GitCompareIconBold } from './git-compare-bold';
import { GitCompareIconBoldDuotone as GitCompareIconBoldDuotone } from './git-compare-bold-duotone';
import { GitCompareIconFill as GitCompareIconFill } from './git-compare-fill';
import { GitCompareIconFillDuotone as GitCompareIconFillDuotone } from './git-compare-fill-duotone';

export interface GitCompareIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const GitCompareIcon = memo(forwardRef<SVGSVGElement, GitCompareIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <GitCompareIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <GitCompareIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <GitCompareIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <GitCompareIconFill ref={ref} {...props} />;
  if (duotone) return <GitCompareIconDuotone ref={ref} {...props} />;
  return <RegularGitCompareIcon ref={ref} {...props} />;
}));

GitCompareIcon.displayName = 'GitCompareIcon';

export { GitCompareIcon };
