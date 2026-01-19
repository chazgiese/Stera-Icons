import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AlignVerticalTopRegular } from './AlignVerticalTopRegular';
import { AlignVerticalTopRegularDuotone } from './AlignVerticalTopRegularDuotone';
import { AlignVerticalTopBold } from './AlignVerticalTopBold';
import { AlignVerticalTopBoldDuotone } from './AlignVerticalTopBoldDuotone';
import { AlignVerticalTopFill } from './AlignVerticalTopFill';
import { AlignVerticalTopFillDuotone } from './AlignVerticalTopFillDuotone';

export interface AlignVerticalTopProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * AlignVerticalTop - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { AlignVerticalTopRegular } from 'stera-icons/icons/AlignVerticalTopRegular';
 */
const AlignVerticalTop = memo(forwardRef<SVGSVGElement, AlignVerticalTopProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <AlignVerticalTopBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <AlignVerticalTopBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <AlignVerticalTopFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <AlignVerticalTopFill ref={ref} {...rest} />;
  if (duotone) return <AlignVerticalTopRegularDuotone ref={ref} {...rest} />;
  return <AlignVerticalTopRegular ref={ref} {...rest} />;
}));

AlignVerticalTop.displayName = 'AlignVerticalTop';

// Triple export pattern (lucide-react style)
export { AlignVerticalTop, AlignVerticalTop as AlignVerticalTopIcon, AlignVerticalTop as SiAlignVerticalTop };
