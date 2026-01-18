import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CurrencyCentBoldProps = Omit<IconBaseProps, 'children'>;

const CurrencyCentBold = memo(
  forwardRef<SVGSVGElement, CurrencyCentBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a1 1 0 0 1 1 1v2.52a7.5 7.5 0 0 1 4.67 2.05 1 1 0 1 1-1.38 1.45A5.5 5.5 0 0 0 13 6.52v10.96a5.5 5.5 0 0 0 3.71-1.94 1 1 0 0 1 1.54 1.28A7.5 7.5 0 0 1 13 19.48V22a1 1 0 0 1-2 0v-2.65a7.49 7.49 0 0 1 0-14.7V2a1 1 0 0 1 1-1m-1 5.7a5.5 5.5 0 0 0 0 10.59z" clipRule="evenodd" />
    </IconBase>
  ))
);

CurrencyCentBold.displayName = 'CurrencyCentBold';

// Triple export pattern (lucide-react style)
export { CurrencyCentBold, CurrencyCentBold as CurrencyCentBoldIcon, CurrencyCentBold as SiCurrencyCentBold };
export type { CurrencyCentBoldProps };
