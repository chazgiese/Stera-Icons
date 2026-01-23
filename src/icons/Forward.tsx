import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ForwardRegular } from './ForwardRegular.js';
import { ForwardRegularDuotone } from './ForwardRegularDuotone.js';
import { ForwardBold } from './ForwardBold.js';
import { ForwardBoldDuotone } from './ForwardBoldDuotone.js';
import { ForwardFill } from './ForwardFill.js';
import { ForwardFillDuotone } from './ForwardFillDuotone.js';

export interface ForwardProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Forward - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ForwardRegular } from 'stera-icons/icons/ForwardRegular';
 */
const Forward = memo(forwardRef<SVGSVGElement, ForwardProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ForwardBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ForwardBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ForwardFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ForwardFill ref={ref} {...rest} />;
  if (duotone) return <ForwardRegularDuotone ref={ref} {...rest} />;
  return <ForwardRegular ref={ref} {...rest} />;
}));

Forward.displayName = 'Forward';

// Triple export pattern (lucide-react style)
export { Forward, Forward as ForwardIcon, Forward as SiForward };
export default Forward;
