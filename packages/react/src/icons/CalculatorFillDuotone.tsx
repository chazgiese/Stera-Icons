import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CalculatorFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CalculatorFillDuotone = memo(
  forwardRef<SVGSVGElement, CalculatorFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M14.4 1.5q1.44-.01 2.34.05c.61.05 1.12.15 1.58.39a4 4 0 0 1 1.74 1.74c.24.46.34.97.39 1.58q.06.9.05 2.34v8.8q.01 1.44-.05 2.34a4 4 0 0 1-.39 1.58 4 4 0 0 1-1.74 1.74c-.46.24-.97.34-1.58.39q-.9.06-2.34.05H9.6q-1.44.01-2.34-.05a4 4 0 0 1-1.58-.39 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.39-1.58q-.06-.9-.05-2.34V7.6q-.01-1.44.05-2.34c.05-.61.15-1.12.39-1.58a4 4 0 0 1 1.74-1.74c.46-.24.97-.34 1.58-.39q.9-.06 2.34-.05zM8 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2m4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m4-3.5a1 1 0 0 0-1 1V18a1 1 0 1 0 2 0v-3.5a1 1 0 0 0-1-1m-8 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2M8 10a1 1 0 1 0 0 2 1 1 0 0 0 0-2m4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2M8 5a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-.9V6a1 1 0 0 0-1-1z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M8 17a1 1 0 1 1 0 2 1 1 0 0 1 0-2M12 17a1 1 0 1 1 0 2 1 1 0 0 1 0-2M16 13.5a1 1 0 0 1 1 1V18a1 1 0 1 1-2 0v-3.5a1 1 0 0 1 1-1M8 13.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2M12 13.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2M8 10a1 1 0 1 1 0 2 1 1 0 0 1 0-2M12 10a1 1 0 1 1 0 2 1 1 0 0 1 0-2M16 10a1 1 0 1 1 0 2 1 1 0 0 1 0-2M16 5a1 1 0 0 1 1 1v1.1a1 1 0 0 1-1 .9H8a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" />
    </IconBase>
  ))
);

CalculatorFillDuotone.displayName = 'CalculatorFillDuotone';

// Triple export pattern (lucide-react style)
export { CalculatorFillDuotone, CalculatorFillDuotone as CalculatorFillDuotoneIcon, CalculatorFillDuotone as SiCalculatorFillDuotone };
export type { CalculatorFillDuotoneProps };
