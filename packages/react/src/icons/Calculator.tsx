import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CalculatorRegular } from './CalculatorRegular';
import { CalculatorRegularDuotone } from './CalculatorRegularDuotone';
import { CalculatorBold } from './CalculatorBold';
import { CalculatorBoldDuotone } from './CalculatorBoldDuotone';
import { CalculatorFill } from './CalculatorFill';
import { CalculatorFillDuotone } from './CalculatorFillDuotone';

export interface CalculatorProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Calculator with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { CalculatorRegular } from 'stera-icons/CalculatorRegular';
 */
const Calculator = memo(forwardRef<SVGSVGElement, CalculatorProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CalculatorBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CalculatorBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CalculatorFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CalculatorFill ref={ref} {...rest} />;
  if (duotone) return <CalculatorRegularDuotone ref={ref} {...rest} />;
  return <CalculatorRegular ref={ref} {...rest} />;
}));

Calculator.displayName = 'Calculator';

export { Calculator };
