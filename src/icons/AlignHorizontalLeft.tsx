import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AlignHorizontalLeftRegular } from './AlignHorizontalLeftRegular';
import { AlignHorizontalLeftRegularDuotone } from './AlignHorizontalLeftRegularDuotone';
import { AlignHorizontalLeftBold } from './AlignHorizontalLeftBold';
import { AlignHorizontalLeftBoldDuotone } from './AlignHorizontalLeftBoldDuotone';
import { AlignHorizontalLeftFill } from './AlignHorizontalLeftFill';
import { AlignHorizontalLeftFillDuotone } from './AlignHorizontalLeftFillDuotone';

export interface AlignHorizontalLeftProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * AlignHorizontalLeft - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { AlignHorizontalLeftRegular } from 'stera-icons/icons/AlignHorizontalLeftRegular';
 */
const AlignHorizontalLeft = memo(forwardRef<SVGSVGElement, AlignHorizontalLeftProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <AlignHorizontalLeftBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <AlignHorizontalLeftBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <AlignHorizontalLeftFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <AlignHorizontalLeftFill ref={ref} {...rest} />;
  if (duotone) return <AlignHorizontalLeftRegularDuotone ref={ref} {...rest} />;
  return <AlignHorizontalLeftRegular ref={ref} {...rest} />;
}));

AlignHorizontalLeft.displayName = 'AlignHorizontalLeft';

// Triple export pattern (lucide-react style)
export { AlignHorizontalLeft, AlignHorizontalLeft as AlignHorizontalLeftIcon, AlignHorizontalLeft as SiAlignHorizontalLeft };
export default AlignHorizontalLeft;
