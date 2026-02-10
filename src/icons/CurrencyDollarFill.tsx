import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurrencyDollarFillProps = Omit<IconBaseProps, 'children'>;

const CurrencyDollarFill = memo(
  forwardRef<SVGSVGElement, CurrencyDollarFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="currency-dollar-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.5c.83 0 1.5.67 1.5 1.5v2h2.75a1.5 1.5 0 0 1 0 3H13.5v2.5h1a4.25 4.25 0 0 1 0 8.5h-1v2a1.5 1.5 0 0 1-3 0v-2H7.25a1.5 1.5 0 0 1 0-3h3.25v-2.5h-.75a4.25 4.25 0 0 1 0-8.5h.75V3c0-.83.67-1.5 1.5-1.5M13.5 16h1a1.25 1.25 0 1 0 0-2.5h-1zM9.75 8a1.25 1.25 0 0 0 0 2.5h.75V8z" clipRule="evenodd" />
    </IconBase>
  ))
);

CurrencyDollarFill.displayName = 'CurrencyDollarFill';

// Triple export pattern (lucide-react style)
export { CurrencyDollarFill, CurrencyDollarFill as CurrencyDollarFillIcon, CurrencyDollarFill as SiCurrencyDollarFill };
export default CurrencyDollarFill;
export type { CurrencyDollarFillProps };
