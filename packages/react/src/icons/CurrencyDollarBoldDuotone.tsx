import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CurrencyDollarBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CurrencyDollarBoldDuotone = memo(
  forwardRef<SVGSVGElement, CurrencyDollarBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13 22a1 1 0 1 1-2 0v-3h2zM13 13v4h-2v-4zM13 11h-2V7h2zM12 1a1 1 0 0 1 1 1v3h-2V2a1 1 0 0 1 1-1" />
        <path fill="currentColor" d="M17 5a1 1 0 1 1 0 2h-7a2 2 0 1 0 0 4h5a4 4 0 0 1 0 8H7a1 1 0 1 1 0-2h8a2 2 0 1 0 0-4h-5a4 4 0 0 1 0-8z" />
    </IconBase>
  ))
);

CurrencyDollarBoldDuotone.displayName = 'CurrencyDollarBoldDuotone';

export { CurrencyDollarBoldDuotone };
export type { CurrencyDollarBoldDuotoneProps };
