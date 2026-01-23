import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurrencyEuroCirlceRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CurrencyEuroCirlceRegularDuotone = memo(
  forwardRef<SVGSVGElement, CurrencyEuroCirlceRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="currency-euro-cirlce-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M15 6.25a.75.75 0 0 1 0 1.5h-1.5q-1.9 0-2.75.87-.41.4-.68 1.13H13a.75.75 0 0 1 0 1.5H9.78a10 10 0 0 0 0 1.5H13a.75.75 0 0 1 0 1.5h-2.93q.26.73.68 1.13.85.87 2.75.87H15a.75.75 0 0 1 0 1.5h-1.5c-1.48 0-2.84-.33-3.82-1.31a4.7 4.7 0 0 1-1.18-2.19h-1a.75.75 0 0 1 0-1.5h.77a12 12 0 0 1 0-1.5H7.5a.75.75 0 0 1 0-1.5h1q.34-1.34 1.18-2.19c.98-.98 2.34-1.31 3.82-1.31z" />
    </IconBase>
  ))
);

CurrencyEuroCirlceRegularDuotone.displayName = 'CurrencyEuroCirlceRegularDuotone';

// Triple export pattern (lucide-react style)
export { CurrencyEuroCirlceRegularDuotone, CurrencyEuroCirlceRegularDuotone as CurrencyEuroCirlceRegularDuotoneIcon, CurrencyEuroCirlceRegularDuotone as SiCurrencyEuroCirlceRegularDuotone };
export default CurrencyEuroCirlceRegularDuotone;
export type { CurrencyEuroCirlceRegularDuotoneProps };
