import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CurrencyEuroBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CurrencyEuroBoldDuotone = memo(
  forwardRef<SVGSVGElement, CurrencyEuroBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="currency-euro-bold-duotone" {...props}>
      <path d="M7.02 13q.05 1.07.2 2H4a1 1 0 1 1 0-2zM16 13a1 1 0 1 1 0 2H9.25q-.17-.9-.22-2zM7.22 9q-.15.93-.2 2H4a1 1 0 1 1 0-2zM16 9a1 1 0 1 1 0 2H9.03q.05-1.1.22-2z" opacity={0.4} />
        <path fill="currentColor" d="M18 2a1 1 0 1 1 0 2h-2.5c-2.15 0-3.7.52-4.74 1.65C9.7 6.79 9 8.75 9 12c0 3.26.7 5.21 1.76 6.35C11.8 19.48 13.35 20 15.5 20H18a1 1 0 1 1 0 2h-2.5c-2.45 0-4.65-.6-6.21-2.29Q6.99 17.22 7 12c0-3.5.75-6.04 2.29-7.71C10.85 2.6 13.05 2 15.5 2z" />
    </IconBase>
  ))
);

CurrencyEuroBoldDuotone.displayName = 'CurrencyEuroBoldDuotone';

// Triple export pattern (lucide-react style)
export { CurrencyEuroBoldDuotone, CurrencyEuroBoldDuotone as CurrencyEuroBoldDuotoneIcon, CurrencyEuroBoldDuotone as SiCurrencyEuroBoldDuotone };
export default CurrencyEuroBoldDuotone;
export type { CurrencyEuroBoldDuotoneProps };
