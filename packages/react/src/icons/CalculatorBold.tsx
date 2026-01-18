import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CalculatorBoldProps = Omit<IconBaseProps, 'children'>;

const CalculatorBold = memo(
  forwardRef<SVGSVGElement, CalculatorBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M8 17a1 1 0 1 1 0 2 1 1 0 0 1 0-2M12 17a1 1 0 1 1 0 2 1 1 0 0 1 0-2M16 13.5a1 1 0 0 1 1 1V18a1 1 0 1 1-2 0v-3.5a1 1 0 0 1 1-1M8 13.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2M12 13.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2M8 10a1 1 0 1 1 0 2 1 1 0 0 1 0-2M12 10a1 1 0 1 1 0 2 1 1 0 0 1 0-2M16 10a1 1 0 1 1 0 2 1 1 0 0 1 0-2M16 5a1 1 0 0 1 1 1v1.1a1 1 0 0 1-1 .9H8a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" />
        <path fill="currentColor" fillRule="evenodd" d="M14.4 1q1.44-.01 2.38.05a5 5 0 0 1 1.76.44 4.5 4.5 0 0 1 1.97 1.97q.39.8.44 1.76.06.94.05 2.38v8.8q.01 1.44-.05 2.38a5 5 0 0 1-.44 1.76 4.5 4.5 0 0 1-1.97 1.97 5 5 0 0 1-1.76.44q-.94.06-2.38.05H9.6q-1.44.01-2.38-.05a5 5 0 0 1-1.76-.44 4.5 4.5 0 0 1-1.97-1.97 5 5 0 0 1-.44-1.76Q3 17.84 3 16.4V7.6q-.01-1.44.05-2.38a5 5 0 0 1 .44-1.76 4.5 4.5 0 0 1 1.97-1.97 5 5 0 0 1 1.76-.44Q8.16 1 9.6 1zM9.6 3c-1 0-1.68 0-2.22.04-.52.05-.8.13-1.01.23a2.5 2.5 0 0 0-1.1 1.1c-.1.2-.18.5-.23 1.01C5 5.92 5 6.6 5 7.6v8.8c0 1 0 1.68.04 2.22.05.52.13.8.23 1.01q.37.73 1.1 1.1c.2.1.5.18 1.01.23.54.04 1.22.04 2.22.04h4.8c1 0 1.68 0 2.22-.04.52-.05.8-.13 1.01-.23a2.5 2.5 0 0 0 1.1-1.1c.1-.2.18-.5.23-1.01.04-.54.04-1.22.04-2.22V7.6c0-1 0-1.68-.04-2.22-.05-.52-.13-.8-.23-1.01a2.5 2.5 0 0 0-1.1-1.1c-.2-.1-.5-.18-1.01-.23C16.08 3 15.4 3 14.4 3z" clipRule="evenodd" />
    </IconBase>
  ))
);

CalculatorBold.displayName = 'CalculatorBold';

export { CalculatorBold };
export type { CalculatorBoldProps };
