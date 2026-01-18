import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CurrencyEuroCirlceBoldProps = Omit<IconBaseProps, 'children'>;

const CurrencyEuroCirlceBold = memo(
  forwardRef<SVGSVGElement, CurrencyEuroCirlceBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M15 6a1 1 0 1 1 0 2h-1.5c-1.25 0-2.06.28-2.58.8q-.27.26-.48.7H13a1 1 0 1 1 0 2h-2.99a10 10 0 0 0 0 1H13a1 1 0 1 1 0 2h-2.56q.21.44.48.7c.52.52 1.33.8 2.58.8H15a1 1 0 1 1 0 2h-1.5c-1.51 0-2.95-.34-4-1.39a5 5 0 0 1-1.19-2.11H7.5a1 1 0 1 1 0-2h.51a12 12 0 0 1 0-1H7.5a1 1 0 1 1 0-2h.81q.37-1.27 1.2-2.11C10.55 6.34 11.99 6 13.5 6z" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" />
    </IconBase>
  ))
);

CurrencyEuroCirlceBold.displayName = 'CurrencyEuroCirlceBold';

// Triple export pattern (lucide-react style)
export { CurrencyEuroCirlceBold, CurrencyEuroCirlceBold as CurrencyEuroCirlceBoldIcon, CurrencyEuroCirlceBold as SiCurrencyEuroCirlceBold };
export type { CurrencyEuroCirlceBoldProps };
