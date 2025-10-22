import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { GitCompareIcon as RegularGitCompareIcon } from './git-compare';
import { GitCompareIconBold } from './git-compare-bold';
import { GitCompareIconFilled } from './git-compare-filled';
import { GitCompareIconFilltone } from './git-compare-filltone';
import { GitCompareIconLinetone } from './git-compare-linetone';

export interface GitCompareIconProps extends IconProps {
  variant?: IconVariant;
}

const GitCompareIcon = memo(forwardRef<SVGSVGElement, GitCompareIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <GitCompareIconFilled ref={ref} {...props} />;
    case 'bold':
      return <GitCompareIconBold ref={ref} {...props} />;
    case 'filltone':
      return <GitCompareIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <GitCompareIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularGitCompareIcon ref={ref} {...props} />;
  }
}));

GitCompareIcon.displayName = 'GitCompareIcon';

export { GitCompareIcon };
