import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { LinkRegular } from './LinkRegular.js';
import { LinkRegularDuotone } from './LinkRegularDuotone.js';
import { LinkBold } from './LinkBold.js';
import { LinkBoldDuotone } from './LinkBoldDuotone.js';
import { LinkFill } from './LinkFill.js';
import { LinkFillDuotone } from './LinkFillDuotone.js';

export interface LinkProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Link - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { LinkRegular } from 'stera-icons/icons/LinkRegular';
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
export default Link;
