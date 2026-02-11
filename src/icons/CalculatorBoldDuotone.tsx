import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalculatorBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CalculatorBoldDuotone = memo(
  forwardRef<SVGSVGElement, CalculatorBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="calculator-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M13.4 2q1.44-.01 2.38.05a5 5 0 0 1 1.76.44 4.5 4.5 0 0 1 1.97 1.97q.39.8.44 1.76.06.94.05 2.38v6.8q.01 1.44-.05 2.38a5 5 0 0 1-.44 1.76 4.5 4.5 0 0 1-1.97 1.97 5 5 0 0 1-1.76.44q-.94.06-2.38.05h-2.8q-1.44.01-2.38-.05a5 5 0 0 1-1.76-.44 4.5 4.5 0 0 1-1.97-1.97 5 5 0 0 1-.44-1.76Q4 16.84 4 15.4V8.6q-.01-1.44.05-2.38a5 5 0 0 1 .44-1.76 4.5 4.5 0 0 1 1.97-1.97 5 5 0 0 1 1.76-.44Q9.16 2 10.6 2zm-2.8 2c-1 0-1.68 0-2.22.04-.52.05-.8.13-1.01.23a2.5 2.5 0 0 0-1.1 1.1c-.1.2-.18.5-.23 1.01C6 6.92 6 7.6 6 8.6v6.8c0 1 0 1.68.04 2.22.05.52.13.8.23 1.01q.37.73 1.1 1.1c.2.1.5.18 1.01.23.54.04 1.22.04 2.22.04h2.8c1 0 1.68 0 2.22-.04.52-.05.8-.13 1.01-.23a2.5 2.5 0 0 0 1.1-1.1c.1-.2.18-.5.23-1.01.04-.54.04-1.22.04-2.22V8.6c0-1 0-1.68-.04-2.22-.05-.52-.13-.8-.23-1.01a2.5 2.5 0 0 0-1.1-1.1c-.2-.1-.5-.18-1.01-.23C15.08 4 14.4 4 13.4 4z" clipRule="evenodd" opacity={.4} />
        <path d="M8.75 16.25a1 1 0 1 1 0 2 1 1 0 0 1 0-2M12 16.25a1 1 0 1 1 0 2 1 1 0 0 1 0-2M15.25 13a1 1 0 0 1 1 1v3.25a1 1 0 1 1-2 0V14a1 1 0 0 1 1-1M8.75 13a1 1 0 1 1 0 2 1 1 0 0 1 0-2M12 13a1 1 0 1 1 0 2 1 1 0 0 1 0-2M8.75 9.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2M12 9.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2M15.25 9.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2M15.5 5.75c.41 0 .75.34.75.75v1c0 .41-.34.75-.75.75h-7a.75.75 0 0 1-.75-.75v-1c0-.41.34-.75.75-.75z" />
    </IconBase>
  ))
);

CalculatorBoldDuotone.displayName = 'CalculatorBoldDuotone';

// Triple export pattern (lucide-react style)
export { CalculatorBoldDuotone, CalculatorBoldDuotone as CalculatorBoldDuotoneIcon, CalculatorBoldDuotone as SiCalculatorBoldDuotone };
export default CalculatorBoldDuotone;
export type { CalculatorBoldDuotoneProps };
