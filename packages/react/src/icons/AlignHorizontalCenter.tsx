import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AlignHorizontalCenterRegular } from './AlignHorizontalCenterRegular';
import { AlignHorizontalCenterRegularDuotone } from './AlignHorizontalCenterRegularDuotone';
import { AlignHorizontalCenterBold } from './AlignHorizontalCenterBold';
import { AlignHorizontalCenterBoldDuotone } from './AlignHorizontalCenterBoldDuotone';
import { AlignHorizontalCenterFill } from './AlignHorizontalCenterFill';
import { AlignHorizontalCenterFillDuotone } from './AlignHorizontalCenterFillDuotone';

export interface AlignHorizontalCenterProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * AlignHorizontalCenter - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { AlignHorizontalCenterRegular } from 'stera-icons/AlignHorizontalCenterRegular';
 */
const AlignHorizontalCenter = memo(forwardRef<SVGSVGElement, AlignHorizontalCenterProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <AlignHorizontalCenterBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <AlignHorizontalCenterBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <AlignHorizontalCenterFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <AlignHorizontalCenterFill ref={ref} {...rest} />;
  if (duotone) return <AlignHorizontalCenterRegularDuotone ref={ref} {...rest} />;
  return <AlignHorizontalCenterRegular ref={ref} {...rest} />;
}));

AlignHorizontalCenter.displayName = 'AlignHorizontalCenter';

// Triple export pattern (lucide-react style)
export { AlignHorizontalCenter, AlignHorizontalCenter as AlignHorizontalCenterIcon, AlignHorizontalCenter as SiAlignHorizontalCenter };
