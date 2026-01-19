import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AlignHorizontalRightRegular } from './AlignHorizontalRightRegular';
import { AlignHorizontalRightRegularDuotone } from './AlignHorizontalRightRegularDuotone';
import { AlignHorizontalRightBold } from './AlignHorizontalRightBold';
import { AlignHorizontalRightBoldDuotone } from './AlignHorizontalRightBoldDuotone';
import { AlignHorizontalRightFill } from './AlignHorizontalRightFill';
import { AlignHorizontalRightFillDuotone } from './AlignHorizontalRightFillDuotone';

export interface AlignHorizontalRightProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * AlignHorizontalRight - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { AlignHorizontalRightRegular } from 'stera-icons/icons/AlignHorizontalRightRegular';
 */
const AlignHorizontalRight = memo(forwardRef<SVGSVGElement, AlignHorizontalRightProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <AlignHorizontalRightBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <AlignHorizontalRightBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <AlignHorizontalRightFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <AlignHorizontalRightFill ref={ref} {...rest} />;
  if (duotone) return <AlignHorizontalRightRegularDuotone ref={ref} {...rest} />;
  return <AlignHorizontalRightRegular ref={ref} {...rest} />;
}));

AlignHorizontalRight.displayName = 'AlignHorizontalRight';

// Triple export pattern (lucide-react style)
export { AlignHorizontalRight, AlignHorizontalRight as AlignHorizontalRightIcon, AlignHorizontalRight as SiAlignHorizontalRight };
export default AlignHorizontalRight;
