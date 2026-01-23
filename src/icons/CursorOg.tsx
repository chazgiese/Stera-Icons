import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { CursorOgRegular } from './CursorOgRegular.js';
import { CursorOgRegularDuotone } from './CursorOgRegularDuotone.js';
import { CursorOgBold } from './CursorOgBold.js';
import { CursorOgBoldDuotone } from './CursorOgBoldDuotone.js';
import { CursorOgFill } from './CursorOgFill.js';
import { CursorOgFillDuotone } from './CursorOgFillDuotone.js';

export interface CursorOgProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CursorOg - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CursorOgRegular } from 'stera-icons/icons/CursorOgRegular';
 */
const CursorOg = memo(forwardRef<SVGSVGElement, CursorOgProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CursorOgBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CursorOgBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CursorOgFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CursorOgFill ref={ref} {...rest} />;
  if (duotone) return <CursorOgRegularDuotone ref={ref} {...rest} />;
  return <CursorOgRegular ref={ref} {...rest} />;
}));

CursorOg.displayName = 'CursorOg';

// Triple export pattern (lucide-react style)
export { CursorOg, CursorOg as CursorOgIcon, CursorOg as SiCursorOg };
export default CursorOg;
