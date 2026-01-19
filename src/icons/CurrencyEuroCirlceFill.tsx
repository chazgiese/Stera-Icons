import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CurrencyEuroCirlceFillProps = Omit<IconBaseProps, 'children'>;

const CurrencyEuroCirlceFill = memo(
  forwardRef<SVGSVGElement, CurrencyEuroCirlceFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="currency-euro-cirlce-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m1.5 5c-1.51 0-2.95.34-4 1.39A5 5 0 0 0 8.32 9.5H7.5a1 1 0 1 0 0 2h.51a12 12 0 0 0 0 1H7.5a1 1 0 1 0 0 2h.81q.37 1.27 1.2 2.11C10.55 17.66 11.99 18 13.5 18H15a1 1 0 1 0 0-2h-1.5c-1.25 0-2.06-.28-2.58-.8q-.27-.26-.48-.7H13a1 1 0 1 0 0-2h-2.99a10 10 0 0 1 0-1H13a1 1 0 1 0 0-2h-2.56q.21-.44.48-.7c.52-.52 1.33-.8 2.58-.8H15a1 1 0 1 0 0-2z" clipRule="evenodd" />
    </IconBase>
  ))
);

CurrencyEuroCirlceFill.displayName = 'CurrencyEuroCirlceFill';

// Triple export pattern (lucide-react style)
export { CurrencyEuroCirlceFill, CurrencyEuroCirlceFill as CurrencyEuroCirlceFillIcon, CurrencyEuroCirlceFill as SiCurrencyEuroCirlceFill };
export default CurrencyEuroCirlceFill;
export type { CurrencyEuroCirlceFillProps };
