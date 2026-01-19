import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CurrencyDollarFillProps = Omit<IconBaseProps, 'children'>;

const CurrencyDollarFill = memo(
  forwardRef<SVGSVGElement, CurrencyDollarFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="currency-dollar-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 .5c.83 0 1.5.67 1.5 1.5v2.5H17a1.5 1.5 0 0 1 0 3h-3.5v3H15a4.5 4.5 0 1 1 0 9h-1.5V22a1.5 1.5 0 0 1-3 0v-2.5H7a1.5 1.5 0 0 1 0-3h3.5v-3H10a4.5 4.5 0 1 1 0-9h.5V2c0-.83.67-1.5 1.5-1.5m1.5 16H15a1.5 1.5 0 0 0 0-3h-1.5zm-3.5-9a1.5 1.5 0 1 0 0 3h.5v-3z" clipRule="evenodd" />
    </IconBase>
  ))
);

CurrencyDollarFill.displayName = 'CurrencyDollarFill';

// Triple export pattern (lucide-react style)
export { CurrencyDollarFill, CurrencyDollarFill as CurrencyDollarFillIcon, CurrencyDollarFill as SiCurrencyDollarFill };
export default CurrencyDollarFill;
export type { CurrencyDollarFillProps };
