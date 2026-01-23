import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { AlignVerticalBottomRegular } from './AlignVerticalBottomRegular.js';
import { AlignVerticalBottomRegularDuotone } from './AlignVerticalBottomRegularDuotone.js';
import { AlignVerticalBottomBold } from './AlignVerticalBottomBold.js';
import { AlignVerticalBottomBoldDuotone } from './AlignVerticalBottomBoldDuotone.js';
import { AlignVerticalBottomFill } from './AlignVerticalBottomFill.js';
import { AlignVerticalBottomFillDuotone } from './AlignVerticalBottomFillDuotone.js';

export interface AlignVerticalBottomProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * AlignVerticalBottom - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { AlignVerticalBottomRegular } from 'stera-icons/icons/AlignVerticalBottomRegular';
 */
const AlignVerticalBottom = memo(forwardRef<SVGSVGElement, AlignVerticalBottomProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <AlignVerticalBottomBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <AlignVerticalBottomBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <AlignVerticalBottomFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <AlignVerticalBottomFill ref={ref} {...rest} />;
  if (duotone) return <AlignVerticalBottomRegularDuotone ref={ref} {...rest} />;
  return <AlignVerticalBottomRegular ref={ref} {...rest} />;
}));

AlignVerticalBottom.displayName = 'AlignVerticalBottom';

// Triple export pattern (lucide-react style)
export { AlignVerticalBottom, AlignVerticalBottom as AlignVerticalBottomIcon, AlignVerticalBottom as SiAlignVerticalBottom };
export default AlignVerticalBottom;
