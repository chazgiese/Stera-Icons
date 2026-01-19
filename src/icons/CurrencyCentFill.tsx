import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CurrencyCentFillProps = Omit<IconBaseProps, 'children'>;

const CurrencyCentFill = memo(
  forwardRef<SVGSVGElement, CurrencyCentFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="currency-cent-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 .5c.83 0 1.5.67 1.5 1.5v2.06a8 8 0 0 1 4.52 2.15 1.5 1.5 0 0 1-2.07 2.17A5 5 0 0 0 13.5 7.1v9.8a5 5 0 0 0 2.83-1.69 1.5 1.5 0 0 1 2.3 1.93 8 8 0 0 1-5.13 2.8V22a1.5 1.5 0 0 1-3 0v-2.25a8 8 0 0 1-4.36-2.9 8 8 0 0 1 4.36-12.6V2c0-.83.67-1.5 1.5-1.5m-1.6 6.96a5 5 0 0 0 .1 9.12V7.42z" clipRule="evenodd" />
    </IconBase>
  ))
);

CurrencyCentFill.displayName = 'CurrencyCentFill';

// Triple export pattern (lucide-react style)
export { CurrencyCentFill, CurrencyCentFill as CurrencyCentFillIcon, CurrencyCentFill as SiCurrencyCentFill };
export default CurrencyCentFill;
export type { CurrencyCentFillProps };
