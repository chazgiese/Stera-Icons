import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CandleIcon as RegularCandleIcon } from './candle';
import { CandleIconDuotone as CandleIconDuotone } from './candle-duotone';
import { CandleIconBold as CandleIconBold } from './candle-bold';
import { CandleIconBoldDuotone as CandleIconBoldDuotone } from './candle-bold-duotone';
import { CandleIconFill as CandleIconFill } from './candle-fill';
import { CandleIconFillDuotone as CandleIconFillDuotone } from './candle-fill-duotone';

export interface CandleIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CandleIcon = memo(forwardRef<SVGSVGElement, CandleIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CandleIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CandleIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CandleIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CandleIconFill ref={ref} {...props} />;
  if (duotone) return <CandleIconDuotone ref={ref} {...props} />;
  return <RegularCandleIcon ref={ref} {...props} />;
}));

CandleIcon.displayName = 'CandleIcon';

export { CandleIcon };
