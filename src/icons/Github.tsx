import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { GithubRegular } from './GithubRegular.js';
import { GithubRegularDuotone } from './GithubRegularDuotone.js';
import { GithubBold } from './GithubBold.js';
import { GithubBoldDuotone } from './GithubBoldDuotone.js';
import { GithubFill } from './GithubFill.js';
import { GithubFillDuotone } from './GithubFillDuotone.js';

export interface GithubProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Github - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { GithubRegular } from 'stera-icons/icons/GithubRegular';
 */
const Github = memo(forwardRef<SVGSVGElement, GithubProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <GithubBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <GithubBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <GithubFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <GithubFill ref={ref} {...rest} />;
  if (duotone) return <GithubRegularDuotone ref={ref} {...rest} />;
  return <GithubRegular ref={ref} {...rest} />;
}));

Github.displayName = 'Github';

// Triple export pattern (lucide-react style)
export { Github, Github as GithubIcon, Github as SiGithub };
export default Github;
