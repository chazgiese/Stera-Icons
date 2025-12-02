import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { GithubIcon as RegularGithubIcon } from './github';
import { GithubIconBold } from './github-bold';
import { GithubIconFilled } from './github-filled';
import { GithubIconFilltone } from './github-filltone';
import { GithubIconLinetone } from './github-linetone';

export interface GithubIconProps extends IconProps {
  variant?: IconVariant;
}

const GithubIcon = memo(forwardRef<SVGSVGElement, GithubIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <GithubIconFilled ref={ref} {...props} />;
    case 'bold':
      return <GithubIconBold ref={ref} {...props} />;
    case 'filltone':
      return <GithubIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <GithubIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularGithubIcon ref={ref} {...props} />;
  }
}));

GithubIcon.displayName = 'GithubIcon';

export { GithubIcon };
