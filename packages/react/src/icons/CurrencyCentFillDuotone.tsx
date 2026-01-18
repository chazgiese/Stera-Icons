import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CurrencyCentFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CurrencyCentFillDuotone = memo(
  forwardRef<SVGSVGElement, CurrencyCentFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.5 19.74a8 8 0 0 0 3 .2V22a1.5 1.5 0 0 1-3 0zM10.5 7.42a5 5 0 0 1 2.82-.35l.18.03v9.8a5 5 0 0 1-3-.32zM12 .5c.83 0 1.5.67 1.5 1.5v2.06a8 8 0 0 0-3 .2V2c0-.83.67-1.5 1.5-1.5" />
        <path fill="currentColor" d="M9.14 4.74a8 8 0 0 1 8.88 1.47 1.5 1.5 0 0 1-2.07 2.17 5 5 0 1 0 .38 6.83 1.5 1.5 0 0 1 2.3 1.93 8 8 0 1 1-9.49-12.4" />
    </IconBase>
  ))
);

CurrencyCentFillDuotone.displayName = 'CurrencyCentFillDuotone';

export { CurrencyCentFillDuotone };
export type { CurrencyCentFillDuotoneProps };
