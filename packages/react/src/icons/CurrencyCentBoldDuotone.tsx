import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CurrencyCentBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CurrencyCentBoldDuotone = memo(
  forwardRef<SVGSVGElement, CurrencyCentBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11 19.35a8 8 0 0 0 2 .13V22a1 1 0 1 1-2 0zM11 6.7a6 6 0 0 1 2-.18v10.96a6 6 0 0 1-2-.19zM12 1a1 1 0 0 1 1 1v2.52a8 8 0 0 0-2 .13V2a1 1 0 0 1 1-1" />
        <path fill="currentColor" d="M9.35 5.2a7.5 7.5 0 0 1 8.32 1.37 1 1 0 0 1-1.38 1.45 5.5 5.5 0 1 0 .42 7.52 1 1 0 0 1 1.54 1.28A7.5 7.5 0 1 1 9.35 5.2" />
    </IconBase>
  ))
);

CurrencyCentBoldDuotone.displayName = 'CurrencyCentBoldDuotone';

export { CurrencyCentBoldDuotone };
export type { CurrencyCentBoldDuotoneProps };
