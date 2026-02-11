import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurrencyEuroCirlceBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CurrencyEuroCirlceBoldDuotone = memo(
  forwardRef<SVGSVGElement, CurrencyEuroCirlceBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="currency-euro-cirlce-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" opacity={.4} />
        <path d="M14.5 6.5a1 1 0 1 1 0 2h-1.25c-1.27 0-1.84.27-2.14.63q-.2.22-.34.62h1.73a1 1 0 1 1 0 2h-2v.5h2a1 1 0 1 1 0 2h-1.73q.15.4.34.62c.3.36.87.63 2.14.63h1.25a1 1 0 1 1 0 2h-1.25c-1.48 0-2.79-.3-3.67-1.34a4.3 4.3 0 0 1-.88-1.91H8a1 1 0 1 1 0-2h.5v-.5H8a1 1 0 1 1 0-2h.7q.24-1.13.88-1.91c.88-1.04 2.2-1.34 3.67-1.34z" />
    </IconBase>
  ))
);

CurrencyEuroCirlceBoldDuotone.displayName = 'CurrencyEuroCirlceBoldDuotone';

// Triple export pattern (lucide-react style)
export { CurrencyEuroCirlceBoldDuotone, CurrencyEuroCirlceBoldDuotone as CurrencyEuroCirlceBoldDuotoneIcon, CurrencyEuroCirlceBoldDuotone as SiCurrencyEuroCirlceBoldDuotone };
export default CurrencyEuroCirlceBoldDuotone;
export type { CurrencyEuroCirlceBoldDuotoneProps };
