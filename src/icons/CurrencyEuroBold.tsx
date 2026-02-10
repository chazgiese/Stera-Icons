import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurrencyEuroBoldProps = Omit<IconBaseProps, 'children'>;

const CurrencyEuroBold = memo(
  forwardRef<SVGSVGElement, CurrencyEuroBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="currency-euro-bold" {...props}>
      <path fill="currentColor" d="M17 3a1 1 0 1 1 0 2h-2.25q-2.87-.01-4.2 1.43c-.54.58-.98 1.4-1.25 2.57H15a1 1 0 1 1 0 2H9.03a18 18 0 0 0 0 2H15a1 1 0 1 1 0 2H9.3a5.5 5.5 0 0 0 1.25 2.57Q11.9 19 14.75 19H17a1 1 0 1 1 0 2h-2.25c-2.22 0-4.23-.54-5.66-2.07A7.7 7.7 0 0 1 7.26 15H5a1 1 0 1 1 0-2h2.03a20 20 0 0 1 0-2H5a1 1 0 1 1 0-2h2.26a7.7 7.7 0 0 1 1.83-3.93C10.52 3.54 12.53 3 14.75 3z" />
    </IconBase>
  ))
);

CurrencyEuroBold.displayName = 'CurrencyEuroBold';

// Triple export pattern (lucide-react style)
export { CurrencyEuroBold, CurrencyEuroBold as CurrencyEuroBoldIcon, CurrencyEuroBold as SiCurrencyEuroBold };
export default CurrencyEuroBold;
export type { CurrencyEuroBoldProps };
