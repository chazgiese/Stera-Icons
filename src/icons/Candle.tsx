import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CandleRegular } from './CandleRegular';
import { CandleRegularDuotone } from './CandleRegularDuotone';
import { CandleBold } from './CandleBold';
import { CandleBoldDuotone } from './CandleBoldDuotone';
import { CandleFill } from './CandleFill';
import { CandleFillDuotone } from './CandleFillDuotone';

export interface CandleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Candle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CandleRegular } from 'stera-icons/icons/CandleRegular';
 */
const Candle = memo(forwardRef<SVGSVGElement, CandleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CandleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CandleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CandleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CandleFill ref={ref} {...rest} />;
  if (duotone) return <CandleRegularDuotone ref={ref} {...rest} />;
  return <CandleRegular ref={ref} {...rest} />;
}));

Candle.displayName = 'Candle';

// Triple export pattern (lucide-react style)
export { Candle, Candle as CandleIcon, Candle as SiCandle };
export default Candle;
