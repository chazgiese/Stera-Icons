import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BrightnessMediumRegular } from './BrightnessMediumRegular';
import { BrightnessMediumRegularDuotone } from './BrightnessMediumRegularDuotone';
import { BrightnessMediumBold } from './BrightnessMediumBold';
import { BrightnessMediumBoldDuotone } from './BrightnessMediumBoldDuotone';
import { BrightnessMediumFill } from './BrightnessMediumFill';
import { BrightnessMediumFillDuotone } from './BrightnessMediumFillDuotone';

export interface BrightnessMediumProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * BrightnessMedium with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { BrightnessMediumRegular } from 'stera-icons/BrightnessMediumRegular';
 */
const BrightnessMedium = memo(forwardRef<SVGSVGElement, BrightnessMediumProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BrightnessMediumBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BrightnessMediumBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BrightnessMediumFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BrightnessMediumFill ref={ref} {...rest} />;
  if (duotone) return <BrightnessMediumRegularDuotone ref={ref} {...rest} />;
  return <BrightnessMediumRegular ref={ref} {...rest} />;
}));

BrightnessMedium.displayName = 'BrightnessMedium';

export { BrightnessMedium };
