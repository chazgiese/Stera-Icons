import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { CalculatorRegular } from './CalculatorRegular.js';
import { CalculatorRegularDuotone } from './CalculatorRegularDuotone.js';
import { CalculatorBold } from './CalculatorBold.js';
import { CalculatorBoldDuotone } from './CalculatorBoldDuotone.js';
import { CalculatorFill } from './CalculatorFill.js';
import { CalculatorFillDuotone } from './CalculatorFillDuotone.js';

export interface CalculatorProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Calculator - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CalculatorRegular } from 'stera-icons/icons/CalculatorRegular';
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

// Triple export pattern (lucide-react style)
export { Calculator, Calculator as CalculatorIcon, Calculator as SiCalculator };
export default Calculator;
