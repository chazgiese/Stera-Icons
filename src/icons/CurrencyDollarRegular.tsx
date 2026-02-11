import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurrencyDollarRegularProps = Omit<IconBaseProps, 'children'>;

const CurrencyDollarRegular = memo(
  forwardRef<SVGSVGElement, CurrencyDollarRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="currency-dollar" {...props}>
      <path fillRule="evenodd" d="M12 2.25c.41 0 .75.34.75.75v2.75h3.5a.75.75 0 0 1 0 1.5h-3.5v4h1.75a3.5 3.5 0 1 1 0 7h-1.75V21a.75.75 0 0 1-1.5 0v-2.75h-4a.75.75 0 0 1 0-1.5h4v-4h-1.5a3.5 3.5 0 0 1 0-7h1.5V3c0-.41.34-.75.75-.75m.75 14.5h1.75a2 2 0 1 0 0-4h-1.75zm-3-9.5a2 2 0 0 0 0 4h1.5v-4z" clipRule="evenodd" />
    </IconBase>
  ))
);

CurrencyDollarRegular.displayName = 'CurrencyDollarRegular';

// Triple export pattern (lucide-react style)
export { CurrencyDollarRegular, CurrencyDollarRegular as CurrencyDollarRegularIcon, CurrencyDollarRegular as SiCurrencyDollarRegular };
export default CurrencyDollarRegular;
export type { CurrencyDollarRegularProps };
