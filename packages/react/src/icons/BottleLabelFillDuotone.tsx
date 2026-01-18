import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BottleLabelFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BottleLabelFillDuotone = memo(
  forwardRef<SVGSVGElement, BottleLabelFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M14.17 7.32a1 1 0 0 0 .21.5l1.21 1.5a3 3 0 0 1 .66 1.88v.8h-8.5v2h8.5v3h-8.5v2h8.5v2a2 2 0 0 1-2 2h-4.5a2 2 0 0 1-2-2v-9.8a3 3 0 0 1 .66-1.87l1.2-1.51a1 1 0 0 0 .22-.5l.54-4.33.13.01h3l.13-.01z" opacity={.4} />
        <path fill="currentColor" d="M16.25 19h-8.5v-2h8.5zM16.25 14h-8.5v-2h8.5zM13.5 1a1 1 0 1 1 0 2h-3a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

BottleLabelFillDuotone.displayName = 'BottleLabelFillDuotone';

// Triple export pattern (lucide-react style)
export { BottleLabelFillDuotone, BottleLabelFillDuotone as BottleLabelFillDuotoneIcon, BottleLabelFillDuotone as SiBottleLabelFillDuotone };
export type { BottleLabelFillDuotoneProps };
