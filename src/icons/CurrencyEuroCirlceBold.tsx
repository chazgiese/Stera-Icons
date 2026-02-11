import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurrencyEuroCirlceBoldProps = Omit<IconBaseProps, 'children'>;

const CurrencyEuroCirlceBold = memo(
  forwardRef<SVGSVGElement, CurrencyEuroCirlceBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="currency-euro-cirlce-bold" {...props}>
      <path d="M14.5 6.5a1 1 0 1 1 0 2h-1.25c-1.27 0-1.84.27-2.14.63q-.2.22-.34.62h1.73a1 1 0 1 1 0 2h-2v.5h2a1 1 0 1 1 0 2h-1.73q.15.4.34.62c.3.36.87.63 2.14.63h1.25a1 1 0 1 1 0 2h-1.25c-1.48 0-2.79-.3-3.67-1.34a4.3 4.3 0 0 1-.88-1.91H8a1 1 0 1 1 0-2h.5v-.5H8a1 1 0 1 1 0-2h.7q.24-1.13.88-1.91c.88-1.04 2.2-1.34 3.67-1.34z" />
        <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

CurrencyEuroCirlceBold.displayName = 'CurrencyEuroCirlceBold';

// Triple export pattern (lucide-react style)
export { CurrencyEuroCirlceBold, CurrencyEuroCirlceBold as CurrencyEuroCirlceBoldIcon, CurrencyEuroCirlceBold as SiCurrencyEuroCirlceBold };
export default CurrencyEuroCirlceBold;
export type { CurrencyEuroCirlceBoldProps };
