import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { GithubIcon as RegularGithubIcon } from './github';
import { GithubIconDuotone as GithubIconDuotone } from './github-duotone';
import { GithubIconBold as GithubIconBold } from './github-bold';
import { GithubIconBoldDuotone as GithubIconBoldDuotone } from './github-bold-duotone';
import { GithubIconFill as GithubIconFill } from './github-fill';
import { GithubIconFillDuotone as GithubIconFillDuotone } from './github-fill-duotone';

export interface GithubIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const GithubIcon = memo(forwardRef<SVGSVGElement, GithubIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <GithubIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <GithubIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <GithubIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <GithubIconFill ref={ref} {...props} />;
  if (duotone) return <GithubIconDuotone ref={ref} {...props} />;
  return <RegularGithubIcon ref={ref} {...props} />;
}));

GithubIcon.displayName = 'GithubIcon';

export { GithubIcon };
