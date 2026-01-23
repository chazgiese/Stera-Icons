import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurrencyEuroRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CurrencyEuroRegularDuotone = memo(
  forwardRef<SVGSVGElement, CurrencyEuroRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="currency-euro-duotone" {...props}>
      <path d="M7.29 13.25a17 17 0 0 0 .15 1.5H4a.75.75 0 0 1 0-1.5zM16 13.25a.75.75 0 0 1 0 1.5H8.95q-.11-.69-.16-1.5zM7.44 9.25a17 17 0 0 0-.15 1.5H4a.75.75 0 0 1 0-1.5zM16 9.25a.75.75 0 0 1 0 1.5H8.79q.05-.81.16-1.5z" opacity={0.4} />
        <path fill="currentColor" d="M18 2.25a.75.75 0 0 1 0 1.5h-2.5c-2.19 0-3.82.53-4.92 1.73C9.46 6.68 8.75 8.7 8.75 12s.7 5.31 1.83 6.52c1.1 1.2 2.73 1.73 4.92 1.73H18a.75.75 0 0 1 0 1.5h-2.5c-2.41 0-4.53-.6-6.03-2.21C8 17.94 7.25 15.46 7.25 12s.74-5.94 2.22-7.54c1.5-1.62 3.62-2.21 6.03-2.21z" />
    </IconBase>
  ))
);

CurrencyEuroRegularDuotone.displayName = 'CurrencyEuroRegularDuotone';

// Triple export pattern (lucide-react style)
export { CurrencyEuroRegularDuotone, CurrencyEuroRegularDuotone as CurrencyEuroRegularDuotoneIcon, CurrencyEuroRegularDuotone as SiCurrencyEuroRegularDuotone };
export default CurrencyEuroRegularDuotone;
export type { CurrencyEuroRegularDuotoneProps };
