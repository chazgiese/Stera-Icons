import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CurrencyCentRegularProps = Omit<IconBaseProps, 'children'>;

const CurrencyCentRegular = memo(
  forwardRef<SVGSVGElement, CurrencyCentRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="currency-cent" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25c.41 0 .75.34.75.75v2.75a7.3 7.3 0 0 1 4.75 2 .75.75 0 0 1-1.03 1.09 5.8 5.8 0 0 0-3.72-1.58v11.48a5.8 5.8 0 0 0 4.15-2.04.75.75 0 0 1 1.15.96 7.3 7.3 0 0 1-5.3 2.58V22a.75.75 0 0 1-1.5 0v-2.86a7.25 7.25 0 0 1 0-14.28V2c0-.41.34-.75.75-.75m-.75 5.14a5.75 5.75 0 0 0 0 11.22z" clipRule="evenodd" />
    </IconBase>
  ))
);

CurrencyCentRegular.displayName = 'CurrencyCentRegular';

// Triple export pattern (lucide-react style)
export { CurrencyCentRegular, CurrencyCentRegular as CurrencyCentRegularIcon, CurrencyCentRegular as SiCurrencyCentRegular };
export default CurrencyCentRegular;
export type { CurrencyCentRegularProps };
