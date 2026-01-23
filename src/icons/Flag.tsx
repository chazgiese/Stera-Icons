import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { FlagRegular } from './FlagRegular.js';
import { FlagRegularDuotone } from './FlagRegularDuotone.js';
import { FlagBold } from './FlagBold.js';
import { FlagBoldDuotone } from './FlagBoldDuotone.js';
import { FlagFill } from './FlagFill.js';
import { FlagFillDuotone } from './FlagFillDuotone.js';

export interface FlagProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Flag - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { FlagRegular } from 'stera-icons/icons/FlagRegular';
 */
const Flag = memo(forwardRef<SVGSVGElement, FlagProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <FlagBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <FlagBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <FlagFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <FlagFill ref={ref} {...rest} />;
  if (duotone) return <FlagRegularDuotone ref={ref} {...rest} />;
  return <FlagRegular ref={ref} {...rest} />;
}));

Flag.displayName = 'Flag';

// Triple export pattern (lucide-react style)
export { Flag, Flag as FlagIcon, Flag as SiFlag };
export default Flag;
