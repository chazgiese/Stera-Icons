import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CurrencyEuroBoldProps = Omit<IconBaseProps, 'children'>;

const CurrencyEuroBold = memo(
  forwardRef<SVGSVGElement, CurrencyEuroBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="currency-euro-bold" {...props}>
      <path fill="currentColor" d="M18 2a1 1 0 1 1 0 2h-2.5c-2.15 0-3.7.52-4.74 1.65A6.6 6.6 0 0 0 9.26 9H16a1 1 0 1 1 0 2H9.03a20 20 0 0 0 0 2H16a1 1 0 1 1 0 2H9.25c.3 1.54.83 2.62 1.5 3.35C11.8 19.48 13.36 20 15.5 20H18a1 1 0 1 1 0 2h-2.5c-2.45 0-4.65-.6-6.21-2.29A9 9 0 0 1 7.22 15H4a1 1 0 1 1 0-2h3.02a23 23 0 0 1 0-2H4a1 1 0 1 1 0-2h3.22q.47-3 2.07-4.71C10.85 2.6 13.05 2 15.5 2z" />
    </IconBase>
  ))
);

CurrencyEuroBold.displayName = 'CurrencyEuroBold';

// Triple export pattern (lucide-react style)
export { CurrencyEuroBold, CurrencyEuroBold as CurrencyEuroBoldIcon, CurrencyEuroBold as SiCurrencyEuroBold };
export type { CurrencyEuroBoldProps };
