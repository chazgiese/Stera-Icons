import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PanelsLeftBottomRegular } from './PanelsLeftBottomRegular';
import { PanelsLeftBottomRegularDuotone } from './PanelsLeftBottomRegularDuotone';
import { PanelsLeftBottomBold } from './PanelsLeftBottomBold';
import { PanelsLeftBottomBoldDuotone } from './PanelsLeftBottomBoldDuotone';
import { PanelsLeftBottomFill } from './PanelsLeftBottomFill';
import { PanelsLeftBottomFillDuotone } from './PanelsLeftBottomFillDuotone';

export interface PanelsLeftBottomProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * PanelsLeftBottom with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { PanelsLeftBottomRegular } from 'stera-icons/PanelsLeftBottomRegular';
 */
const PanelsLeftBottom = memo(forwardRef<SVGSVGElement, PanelsLeftBottomProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <PanelsLeftBottomBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <PanelsLeftBottomBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <PanelsLeftBottomFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <PanelsLeftBottomFill ref={ref} {...rest} />;
  if (duotone) return <PanelsLeftBottomRegularDuotone ref={ref} {...rest} />;
  return <PanelsLeftBottomRegular ref={ref} {...rest} />;
}));

PanelsLeftBottom.displayName = 'PanelsLeftBottom';

export { PanelsLeftBottom };
