import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurrencyCircleDollarRegularProps = Omit<IconBaseProps, 'children'>;

const CurrencyCircleDollarRegular = memo(
  forwardRef<SVGSVGElement, CurrencyCircleDollarRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="currency-circle-dollar" {...props}>
      <path d="M11.75 5.5c.41 0 .75.34.75.75v1.5h2a.75.75 0 0 1 0 1.5h-3.75a1 1 0 0 0 0 2h3a2.5 2.5 0 0 1 0 5H13v1.5a.75.75 0 0 1-1.5 0v-1.5H9a.75.75 0 0 1 0-1.5h4.75a1 1 0 1 0 0-2h-3a2.5 2.5 0 0 1 0-5H11v-1.5c0-.41.34-.75.75-.75" />
        <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" />
    </IconBase>
  ))
);

CurrencyCircleDollarRegular.displayName = 'CurrencyCircleDollarRegular';

// Triple export pattern (lucide-react style)
export { CurrencyCircleDollarRegular, CurrencyCircleDollarRegular as CurrencyCircleDollarRegularIcon, CurrencyCircleDollarRegular as SiCurrencyCircleDollarRegular };
export default CurrencyCircleDollarRegular;
export type { CurrencyCircleDollarRegularProps };
