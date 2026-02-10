import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurrencyCircleDollarFillProps = Omit<IconBaseProps, 'children'>;

const CurrencyCircleDollarFill = memo(
  forwardRef<SVGSVGElement, CurrencyCircleDollarFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="currency-circle-dollar-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m-.25 3.38c-.48 0-.87.39-.87.87v1.38h-.13a2.63 2.63 0 0 0 0 5.25h3a.88.88 0 0 1 0 1.74H9a.88.88 0 0 0 0 1.76h2.38v1.37a.88.88 0 0 0 1.74 0v-1.37h.63a2.63 2.63 0 0 0 0-5.25h-3a.87.87 0 1 1 0-1.76h3.75a.88.88 0 0 0 0-1.74h-1.87V6.25c0-.48-.4-.87-.88-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

CurrencyCircleDollarFill.displayName = 'CurrencyCircleDollarFill';

// Triple export pattern (lucide-react style)
export { CurrencyCircleDollarFill, CurrencyCircleDollarFill as CurrencyCircleDollarFillIcon, CurrencyCircleDollarFill as SiCurrencyCircleDollarFill };
export default CurrencyCircleDollarFill;
export type { CurrencyCircleDollarFillProps };
