import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurrencyEuroCirlceFillProps = Omit<IconBaseProps, 'children'>;

const CurrencyEuroCirlceFill = memo(
  forwardRef<SVGSVGElement, CurrencyEuroCirlceFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="currency-euro-cirlce-fill" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m1.25 4.63c-1.46 0-2.73.29-3.58 1.29a4 4 0 0 0-.87 1.96H8a.88.88 0 0 0 0 1.74h.63v.76H8a.88.88 0 0 0 0 1.74h.8q.22 1.17.87 1.96c.85 1 2.12 1.3 3.58 1.3h1.25a.88.88 0 0 0 0-1.75h-1.25c-1.29 0-1.9-.27-2.24-.68q-.24-.29-.4-.82h1.89a.88.88 0 0 0 0-1.76h-2.12v-.74h2.12a.88.88 0 0 0 0-1.76h-1.9q.17-.54.41-.82c.35-.4.95-.68 2.24-.68h1.25a.88.88 0 0 0 0-1.74z" clipRule="evenodd" />
    </IconBase>
  ))
);

CurrencyEuroCirlceFill.displayName = 'CurrencyEuroCirlceFill';

// Triple export pattern (lucide-react style)
export { CurrencyEuroCirlceFill, CurrencyEuroCirlceFill as CurrencyEuroCirlceFillIcon, CurrencyEuroCirlceFill as SiCurrencyEuroCirlceFill };
export default CurrencyEuroCirlceFill;
export type { CurrencyEuroCirlceFillProps };
