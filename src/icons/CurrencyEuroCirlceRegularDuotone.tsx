import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurrencyEuroCirlceRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CurrencyEuroCirlceRegularDuotone = memo(
  forwardRef<SVGSVGElement, CurrencyEuroCirlceRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="currency-euro-cirlce-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M14.5 6.75a.75.75 0 0 1 0 1.5h-1.25c-1.3 0-1.95.27-2.33.72q-.3.34-.48 1.03h2.06a.75.75 0 0 1 0 1.5h-2.24v1h2.24a.75.75 0 0 1 0 1.5h-2.06q.18.7.48 1.03c.38.45 1.03.72 2.33.72h1.25a.75.75 0 0 1 0 1.5h-1.25c-1.45 0-2.67-.3-3.48-1.25a4 4 0 0 1-.86-2H8a.75.75 0 0 1 0-1.5h.76v-1H8A.75.75 0 0 1 8 10h.9q.23-1.2.87-2c.8-.96 2.03-1.25 3.48-1.25z" />
    </IconBase>
  ))
);

CurrencyEuroCirlceRegularDuotone.displayName = 'CurrencyEuroCirlceRegularDuotone';

// Triple export pattern (lucide-react style)
export { CurrencyEuroCirlceRegularDuotone, CurrencyEuroCirlceRegularDuotone as CurrencyEuroCirlceRegularDuotoneIcon, CurrencyEuroCirlceRegularDuotone as SiCurrencyEuroCirlceRegularDuotone };
export default CurrencyEuroCirlceRegularDuotone;
export type { CurrencyEuroCirlceRegularDuotoneProps };
