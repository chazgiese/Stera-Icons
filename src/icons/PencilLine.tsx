import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { PencilLineRegular } from './PencilLineRegular.js';
import { PencilLineRegularDuotone } from './PencilLineRegularDuotone.js';
import { PencilLineBold } from './PencilLineBold.js';
import { PencilLineBoldDuotone } from './PencilLineBoldDuotone.js';
import { PencilLineFill } from './PencilLineFill.js';
import { PencilLineFillDuotone } from './PencilLineFillDuotone.js';

export interface PencilLineProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * PencilLine - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { PencilLineRegular } from 'stera-icons/icons/PencilLineRegular';
 */
const PencilLine = memo(forwardRef<SVGSVGElement, PencilLineProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <PencilLineBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <PencilLineBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <PencilLineFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <PencilLineFill ref={ref} {...rest} />;
  if (duotone) return <PencilLineRegularDuotone ref={ref} {...rest} />;
  return <PencilLineRegular ref={ref} {...rest} />;
}));

PencilLine.displayName = 'PencilLine';

// Triple export pattern (lucide-react style)
export { PencilLine, PencilLine as PencilLineIcon, PencilLine as SiPencilLine };
export default PencilLine;
