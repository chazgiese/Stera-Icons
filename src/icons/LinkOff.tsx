import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { LinkOffRegular } from './LinkOffRegular.js';
import { LinkOffRegularDuotone } from './LinkOffRegularDuotone.js';
import { LinkOffBold } from './LinkOffBold.js';
import { LinkOffBoldDuotone } from './LinkOffBoldDuotone.js';
import { LinkOffFill } from './LinkOffFill.js';
import { LinkOffFillDuotone } from './LinkOffFillDuotone.js';

export interface LinkOffProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * LinkOff - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { LinkOffRegular } from 'stera-icons/icons/LinkOffRegular';
 */
const LinkOff = memo(forwardRef<SVGSVGElement, LinkOffProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <LinkOffBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <LinkOffBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <LinkOffFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <LinkOffFill ref={ref} {...rest} />;
  if (duotone) return <LinkOffRegularDuotone ref={ref} {...rest} />;
  return <LinkOffRegular ref={ref} {...rest} />;
}));

LinkOff.displayName = 'LinkOff';

// Triple export pattern (lucide-react style)
export { LinkOff, LinkOff as LinkOffIcon, LinkOff as SiLinkOff };
export default LinkOff;
