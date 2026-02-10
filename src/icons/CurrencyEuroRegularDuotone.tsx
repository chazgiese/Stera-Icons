import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurrencyEuroRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CurrencyEuroRegularDuotone = memo(
  forwardRef<SVGSVGElement, CurrencyEuroRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="currency-euro-duotone" {...props}>
      <path d="M7.3 13.25q.04.8.17 1.5H5a.75.75 0 0 1 0-1.5zM15 13.25a.75.75 0 0 1 0 1.5H8.99q-.14-.67-.2-1.5zM7.47 9.25q-.13.7-.18 1.5H5a.75.75 0 0 1 0-1.5zM15 9.25a.75.75 0 0 1 0 1.5H8.8q.05-.83.19-1.5z" opacity={0.4} />
        <path fill="currentColor" d="M17 3.25a.75.75 0 0 1 0 1.5h-2.25c-1.96 0-3.4.47-4.38 1.51C9.39 7.31 8.75 9.1 8.75 12s.64 4.69 1.62 5.74c.97 1.04 2.42 1.51 4.38 1.51H17a.75.75 0 0 1 0 1.5h-2.25c-2.18 0-4.1-.53-5.48-1.99C7.92 17.31 7.25 15.1 7.25 12s.67-5.31 2.02-6.76c1.37-1.46 3.3-1.99 5.48-1.99z" />
    </IconBase>
  ))
);

CurrencyEuroRegularDuotone.displayName = 'CurrencyEuroRegularDuotone';

// Triple export pattern (lucide-react style)
export { CurrencyEuroRegularDuotone, CurrencyEuroRegularDuotone as CurrencyEuroRegularDuotoneIcon, CurrencyEuroRegularDuotone as SiCurrencyEuroRegularDuotone };
export default CurrencyEuroRegularDuotone;
export type { CurrencyEuroRegularDuotoneProps };
