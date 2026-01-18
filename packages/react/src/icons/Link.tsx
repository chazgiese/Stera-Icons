import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LinkRegular } from './LinkRegular';
import { LinkRegularDuotone } from './LinkRegularDuotone';
import { LinkBold } from './LinkBold';
import { LinkBoldDuotone } from './LinkBoldDuotone';
import { LinkFill } from './LinkFill';
import { LinkFillDuotone } from './LinkFillDuotone';

export interface LinkProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Link - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { LinkRegular } from 'stera-icons/LinkRegular';
 */
const Link = memo(forwardRef<SVGSVGElement, LinkProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <LinkBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <LinkBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <LinkFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <LinkFill ref={ref} {...rest} />;
  if (duotone) return <LinkRegularDuotone ref={ref} {...rest} />;
  return <LinkRegular ref={ref} {...rest} />;
}));

Link.displayName = 'Link';

// Triple export pattern (lucide-react style)
export { Link, Link as LinkIcon, Link as SiLink };
