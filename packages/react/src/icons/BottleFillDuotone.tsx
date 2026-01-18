import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BottleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BottleFillDuotone = memo(
  forwardRef<SVGSVGElement, BottleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M14.17 7.32a1 1 0 0 0 .21.5l1.21 1.5a3 3 0 0 1 .66 1.88V21a2 2 0 0 1-2 2h-4.5a2 2 0 0 1-2-2v-9.8a3 3 0 0 1 .66-1.87l1.2-1.51a1 1 0 0 0 .22-.5l.54-4.33.13.01h3l.13-.01z" opacity={.4} />
        <path fill="currentColor" d="M13.5 1a1 1 0 1 1 0 2h-3a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

BottleFillDuotone.displayName = 'BottleFillDuotone';

export { BottleFillDuotone };
export type { BottleFillDuotoneProps };
