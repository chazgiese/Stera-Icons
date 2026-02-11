import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalculatorFillProps = Omit<IconBaseProps, 'children'>;

const CalculatorFill = memo(
  forwardRef<SVGSVGElement, CalculatorFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="calculator-fill" {...props}>
      <path fillRule="evenodd" d="M13.4 2.5q1.44-.01 2.34.05c.61.05 1.12.15 1.58.39a4 4 0 0 1 1.74 1.74c.24.46.34.97.39 1.58q.06.9.05 2.34v6.8q.01 1.44-.05 2.34a4 4 0 0 1-.39 1.58 4 4 0 0 1-1.74 1.74c-.46.24-.97.34-1.58.39q-.9.06-2.34.05h-2.8q-1.44.01-2.34-.05a4 4 0 0 1-1.58-.39 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.39-1.58q-.06-.9-.05-2.34V8.6q-.01-1.44.05-2.34c.05-.61.15-1.12.39-1.58a4 4 0 0 1 1.74-1.74c.46-.24.97-.34 1.58-.39q.9-.06 2.34-.05zM8.75 16.25a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3.25 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2M15.25 13a1 1 0 0 0-1 1v3.25a1 1 0 1 0 2 0V14a1 1 0 0 0-1-1m-6.5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2M12 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2M8.75 9.75a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3.25 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3.25 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-6.75-4a.75.75 0 0 0-.75.75v1c0 .41.34.75.75.75h7c.41 0 .75-.34.75-.75v-1a.75.75 0 0 0-.75-.75z" clipRule="evenodd" />
    </IconBase>
  ))
);

CalculatorFill.displayName = 'CalculatorFill';

// Triple export pattern (lucide-react style)
export { CalculatorFill, CalculatorFill as CalculatorFillIcon, CalculatorFill as SiCalculatorFill };
export default CalculatorFill;
export type { CalculatorFillProps };
