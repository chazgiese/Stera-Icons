import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChevronInwardRegular } from './ChevronInwardRegular.js';
import { ChevronInwardRegularDuotone } from './ChevronInwardRegularDuotone.js';
import { ChevronInwardBold } from './ChevronInwardBold.js';
import { ChevronInwardBoldDuotone } from './ChevronInwardBoldDuotone.js';
import { ChevronInwardFill } from './ChevronInwardFill.js';
import { ChevronInwardFillDuotone } from './ChevronInwardFillDuotone.js';

export interface ChevronInwardProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronInward - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronInwardRegular } from 'stera-icons/icons/ChevronInwardRegular';
 */
const ChevronInward = memo(forwardRef<SVGSVGElement, ChevronInwardProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronInwardBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChevronInwardBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChevronInwardFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChevronInwardFill ref={ref} {...rest} />;
  if (duotone) return <ChevronInwardRegularDuotone ref={ref} {...rest} />;
  return <ChevronInwardRegular ref={ref} {...rest} />;
}));

ChevronInward.displayName = 'ChevronInward';

// Triple export pattern (lucide-react style)
export { ChevronInward, ChevronInward as ChevronInwardIcon, ChevronInward as SiChevronInward };
export default ChevronInward;
