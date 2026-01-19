import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CurrencyDollarBoldProps = Omit<IconBaseProps, 'children'>;

const CurrencyDollarBold = memo(
  forwardRef<SVGSVGElement, CurrencyDollarBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="currency-dollar-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a1 1 0 0 1 1 1v3h4a1 1 0 1 1 0 2h-4v4h2a4 4 0 0 1 0 8h-2v3a1 1 0 1 1-2 0v-3H7a1 1 0 1 1 0-2h4v-4h-1a4 4 0 0 1 0-8h1V2a1 1 0 0 1 1-1m1 16h2a2 2 0 1 0 0-4h-2zM10 7a2 2 0 1 0 0 4h1V7z" clipRule="evenodd" />
    </IconBase>
  ))
);

CurrencyDollarBold.displayName = 'CurrencyDollarBold';

// Triple export pattern (lucide-react style)
export { CurrencyDollarBold, CurrencyDollarBold as CurrencyDollarBoldIcon, CurrencyDollarBold as SiCurrencyDollarBold };
export type { CurrencyDollarBoldProps };
