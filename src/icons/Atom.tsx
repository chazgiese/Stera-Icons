import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { AtomRegular } from './AtomRegular.js';
import { AtomRegularDuotone } from './AtomRegularDuotone.js';
import { AtomBold } from './AtomBold.js';
import { AtomBoldDuotone } from './AtomBoldDuotone.js';
import { AtomFill } from './AtomFill.js';
import { AtomFillDuotone } from './AtomFillDuotone.js';

export interface AtomProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Atom - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { AtomRegular } from 'stera-icons/icons/AtomRegular';
 */
const Atom = memo(forwardRef<SVGSVGElement, AtomProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <AtomBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <AtomBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <AtomFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <AtomFill ref={ref} {...rest} />;
  if (duotone) return <AtomRegularDuotone ref={ref} {...rest} />;
  return <AtomRegular ref={ref} {...rest} />;
}));

Atom.displayName = 'Atom';

// Triple export pattern (lucide-react style)
export { Atom, Atom as AtomIcon, Atom as SiAtom };
export default Atom;
