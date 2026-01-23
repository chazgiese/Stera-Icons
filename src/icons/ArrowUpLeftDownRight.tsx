import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ArrowUpLeftDownRightRegular } from './ArrowUpLeftDownRightRegular.js';
import { ArrowUpLeftDownRightRegularDuotone } from './ArrowUpLeftDownRightRegularDuotone.js';
import { ArrowUpLeftDownRightBold } from './ArrowUpLeftDownRightBold.js';
import { ArrowUpLeftDownRightBoldDuotone } from './ArrowUpLeftDownRightBoldDuotone.js';
import { ArrowUpLeftDownRightFill } from './ArrowUpLeftDownRightFill.js';
import { ArrowUpLeftDownRightFillDuotone } from './ArrowUpLeftDownRightFillDuotone.js';

export interface ArrowUpLeftDownRightProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowUpLeftDownRight - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowUpLeftDownRightRegular } from 'stera-icons/icons/ArrowUpLeftDownRightRegular';
 */
const ArrowUpLeftDownRight = memo(forwardRef<SVGSVGElement, ArrowUpLeftDownRightProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowUpLeftDownRightBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowUpLeftDownRightBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowUpLeftDownRightFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowUpLeftDownRightFill ref={ref} {...rest} />;
  if (duotone) return <ArrowUpLeftDownRightRegularDuotone ref={ref} {...rest} />;
  return <ArrowUpLeftDownRightRegular ref={ref} {...rest} />;
}));

ArrowUpLeftDownRight.displayName = 'ArrowUpLeftDownRight';

// Triple export pattern (lucide-react style)
export { ArrowUpLeftDownRight, ArrowUpLeftDownRight as ArrowUpLeftDownRightIcon, ArrowUpLeftDownRight as SiArrowUpLeftDownRight };
export default ArrowUpLeftDownRight;
