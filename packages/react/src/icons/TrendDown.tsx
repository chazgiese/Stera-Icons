import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TrendDownRegular } from './TrendDownRegular';
import { TrendDownRegularDuotone } from './TrendDownRegularDuotone';
import { TrendDownBold } from './TrendDownBold';
import { TrendDownBoldDuotone } from './TrendDownBoldDuotone';
import { TrendDownFill } from './TrendDownFill';
import { TrendDownFillDuotone } from './TrendDownFillDuotone';

export interface TrendDownProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * TrendDown with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { TrendDownRegular } from 'stera-icons/TrendDownRegular';
 */
const TrendDown = memo(forwardRef<SVGSVGElement, TrendDownProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <TrendDownBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <TrendDownBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <TrendDownFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <TrendDownFill ref={ref} {...rest} />;
  if (duotone) return <TrendDownRegularDuotone ref={ref} {...rest} />;
  return <TrendDownRegular ref={ref} {...rest} />;
}));

TrendDown.displayName = 'TrendDown';

export { TrendDown };
