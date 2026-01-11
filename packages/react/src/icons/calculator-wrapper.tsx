import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CalculatorIcon as RegularCalculatorIcon } from './calculator';
import { CalculatorIconDuotone as CalculatorIconDuotone } from './calculator-duotone';
import { CalculatorIconBold as CalculatorIconBold } from './calculator-bold';
import { CalculatorIconBoldDuotone as CalculatorIconBoldDuotone } from './calculator-bold-duotone';
import { CalculatorIconFill as CalculatorIconFill } from './calculator-fill';
import { CalculatorIconFillDuotone as CalculatorIconFillDuotone } from './calculator-fill-duotone';

export interface CalculatorIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CalculatorIcon = memo(forwardRef<SVGSVGElement, CalculatorIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CalculatorIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CalculatorIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CalculatorIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CalculatorIconFill ref={ref} {...props} />;
  if (duotone) return <CalculatorIconDuotone ref={ref} {...props} />;
  return <RegularCalculatorIcon ref={ref} {...props} />;
}));

CalculatorIcon.displayName = 'CalculatorIcon';

export { CalculatorIcon };
