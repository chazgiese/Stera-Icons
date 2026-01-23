import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BottleLabelFillProps = Omit<IconBaseProps, 'children'>;

const BottleLabelFill = memo(
  forwardRef<SVGSVGElement, BottleLabelFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="bottle-label-fill" {...props}>
      <path fill="currentColor" d="M16.25 21a2 2 0 0 1-2 2h-4.5a2 2 0 0 1-2-2v-2h8.5zM16.25 17h-8.5v-3h8.5zM13.5 1a1 1 0 0 1 .13 1.99l.54 4.33a1 1 0 0 0 .21.5l1.21 1.5a3 3 0 0 1 .66 1.88v.8h-8.5v-.8a3 3 0 0 1 .66-1.87l1.2-1.51a1 1 0 0 0 .22-.5l.54-4.33A1 1 0 0 1 10.5 1z" />
    </IconBase>
  ))
);

BottleLabelFill.displayName = 'BottleLabelFill';

// Triple export pattern (lucide-react style)
export { BottleLabelFill, BottleLabelFill as BottleLabelFillIcon, BottleLabelFill as SiBottleLabelFill };
export default BottleLabelFill;
export type { BottleLabelFillProps };
