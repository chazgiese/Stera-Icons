import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalculatorRegularProps = Omit<IconBaseProps, 'children'>;

const CalculatorRegular = memo(
  forwardRef<SVGSVGElement, CalculatorRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="calculator" {...props}>
      <path fill="currentColor" d="M8.75 16.25a1 1 0 1 1 0 2 1 1 0 0 1 0-2M12 16.25a1 1 0 1 1 0 2 1 1 0 0 1 0-2M15.25 13a1 1 0 0 1 1 1v3.25a1 1 0 1 1-2 0V14a1 1 0 0 1 1-1M8.75 13a1 1 0 1 1 0 2 1 1 0 0 1 0-2M12 13a1 1 0 1 1 0 2 1 1 0 0 1 0-2M8.75 9.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2M12 9.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2M15.25 9.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2M15.5 5.75c.41 0 .75.34.75.75v1c0 .41-.34.75-.75.75h-7a.75.75 0 0 1-.75-.75v-1c0-.41.34-.75.75-.75z" />
        <path fill="currentColor" fillRule="evenodd" d="M13.4 2.25q1.44-.01 2.36.05.93.05 1.67.41c.8.41 1.45 1.06 1.86 1.86.25.5.36 1.04.41 1.67q.06.93.05 2.36v6.8q.01 1.44-.05 2.36a4 4 0 0 1-.41 1.67c-.41.8-1.06 1.45-1.86 1.86-.5.25-1.04.36-1.67.41q-.92.06-2.36.05h-2.8q-1.44.01-2.36-.05a4 4 0 0 1-1.67-.41 4.3 4.3 0 0 1-1.86-1.86 4 4 0 0 1-.41-1.67q-.06-.92-.05-2.36V8.6q-.01-1.44.05-2.36c.05-.63.16-1.17.41-1.67.41-.8 1.06-1.45 1.86-1.86.5-.25 1.04-.36 1.67-.41q.93-.06 2.36-.05zm-2.8 1.5c-1 0-1.7 0-2.24.04a3 3 0 0 0-1.1.26q-.8.4-1.21 1.2a3 3 0 0 0-.26 1.11c-.04.55-.04 1.25-.04 2.24v6.8c0 1 0 1.7.04 2.24.05.53.13.86.26 1.1q.4.8 1.2 1.21c.25.13.58.21 1.11.26.55.04 1.25.04 2.24.04h2.8c1 0 1.7 0 2.24-.04a3 3 0 0 0 1.1-.26q.8-.4 1.21-1.2c.13-.25.21-.58.26-1.11.04-.55.04-1.25.04-2.24V8.6c0-1 0-1.7-.04-2.24a3 3 0 0 0-.26-1.1 2.8 2.8 0 0 0-1.2-1.21 3 3 0 0 0-1.11-.26c-.55-.04-1.25-.04-2.24-.04z" clipRule="evenodd" />
    </IconBase>
  ))
);

CalculatorRegular.displayName = 'CalculatorRegular';

// Triple export pattern (lucide-react style)
export { CalculatorRegular, CalculatorRegular as CalculatorRegularIcon, CalculatorRegular as SiCalculatorRegular };
export default CalculatorRegular;
export type { CalculatorRegularProps };
