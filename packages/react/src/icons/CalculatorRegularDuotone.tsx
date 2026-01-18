import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CalculatorRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CalculatorRegularDuotone = memo(
  forwardRef<SVGSVGElement, CalculatorRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M14.4 1.25q1.44-.01 2.36.05c.63.05 1.17.16 1.67.41.8.41 1.45 1.06 1.86 1.86.25.5.36 1.04.41 1.67q.06.93.05 2.36v8.8q.01 1.44-.05 2.36a4 4 0 0 1-.41 1.67c-.41.8-1.06 1.45-1.86 1.86-.5.25-1.04.36-1.67.41q-.93.06-2.36.05H9.6q-1.44.01-2.36-.05a4 4 0 0 1-1.67-.41 4.3 4.3 0 0 1-1.86-1.86 4 4 0 0 1-.41-1.67q-.06-.92-.05-2.36V7.6q-.01-1.44.05-2.36c.05-.63.16-1.17.41-1.67.41-.8 1.06-1.45 1.86-1.86q.74-.36 1.67-.41.93-.06 2.36-.05zm-4.8 1.5c-1 0-1.7 0-2.24.04a3 3 0 0 0-1.1.26q-.8.4-1.21 1.2a3 3 0 0 0-.26 1.11c-.04.55-.04 1.25-.04 2.24v8.8c0 1 0 1.7.04 2.24.05.53.13.86.26 1.1q.4.8 1.2 1.21c.25.13.58.21 1.11.26.55.04 1.25.04 2.24.04h4.8c1 0 1.7 0 2.24-.04a3 3 0 0 0 1.1-.26q.8-.4 1.21-1.2c.13-.25.21-.58.26-1.11.04-.55.04-1.25.04-2.24V7.6c0-1 0-1.7-.04-2.24a3 3 0 0 0-.26-1.1 2.8 2.8 0 0 0-1.2-1.21 3 3 0 0 0-1.11-.26c-.55-.04-1.25-.04-2.24-.04z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M8 17a1 1 0 1 1 0 2 1 1 0 0 1 0-2M12 17a1 1 0 1 1 0 2 1 1 0 0 1 0-2M16 13.5a1 1 0 0 1 1 1V18a1 1 0 1 1-2 0v-3.5a1 1 0 0 1 1-1M8 13.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2M12 13.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2M8 10a1 1 0 1 1 0 2 1 1 0 0 1 0-2M12 10a1 1 0 1 1 0 2 1 1 0 0 1 0-2M16 10a1 1 0 1 1 0 2 1 1 0 0 1 0-2M16 5a1 1 0 0 1 1 1v1.1a1 1 0 0 1-1 .9H8a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" />
    </IconBase>
  ))
);

CalculatorRegularDuotone.displayName = 'CalculatorRegularDuotone';

export { CalculatorRegularDuotone };
export type { CalculatorRegularDuotoneProps };
