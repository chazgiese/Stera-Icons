import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurrencyCircleDollarRegularProps = Omit<IconBaseProps, 'children'>;

const CurrencyCircleDollarRegular = memo(
  forwardRef<SVGSVGElement, CurrencyCircleDollarRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="currency-circle-dollar" {...props}>
      <path fill="currentColor" d="M11.75 4.75c.41 0 .75.34.75.75v1.75h2.25a.75.75 0 0 1 0 1.5h-4a1.25 1.25 0 1 0 0 2.5h3l.28.01a2.75 2.75 0 0 1-.28 5.49H13v1.75a.75.75 0 0 1-1.5 0v-1.75H8.75a.75.75 0 0 1 0-1.5h5a1.25 1.25 0 0 0 .13-2.5h-3.13a2.75 2.75 0 1 1 0-5.5H11V5.5c0-.41.34-.75.75-.75" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" />
    </IconBase>
  ))
);

CurrencyCircleDollarRegular.displayName = 'CurrencyCircleDollarRegular';

// Triple export pattern (lucide-react style)
export { CurrencyCircleDollarRegular, CurrencyCircleDollarRegular as CurrencyCircleDollarRegularIcon, CurrencyCircleDollarRegular as SiCurrencyCircleDollarRegular };
export default CurrencyCircleDollarRegular;
export type { CurrencyCircleDollarRegularProps };
