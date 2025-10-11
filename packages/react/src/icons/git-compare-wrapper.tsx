import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { GitCompareIcon as GitCompareIconRegular } from './git-compare';
import { GitCompareIconBold } from './git-compare-bold';
import { GitCompareIconFilled } from './git-compare-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <GitCompareIconRegular ref={ref} {...props} />;
  }
}));

GitCompareIcon.displayName = 'GitCompareIcon';

export { GitCompareIcon };
