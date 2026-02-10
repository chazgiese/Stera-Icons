import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BottleLabelFillProps = Omit<IconBaseProps, 'children'>;

const BottleLabelFill = memo(
  forwardRef<SVGSVGElement, BottleLabelFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="bottle-label-fill" {...props}>
      <path fill="currentColor" d="M16.25 19.75c0 1.24-1 2.25-2.25 2.25h-4c-1.24 0-2.25-1-2.25-2.25V18h8.5zM16.25 16h-8.5v-2h8.5zM13.75 2a1 1 0 0 1 .1 2v.05l.34 3.76q.04.3.22.53l1.18 1.49a3 3 0 0 1 .66 1.87v.3h-8.5v-.3a3 3 0 0 1 .66-1.87l1.18-1.49a1 1 0 0 0 .22-.53l.34-3.76V4a1 1 0 0 1 .1-2z" />
    </IconBase>
  ))
);

BottleLabelFill.displayName = 'BottleLabelFill';

// Triple export pattern (lucide-react style)
export { BottleLabelFill, BottleLabelFill as BottleLabelFillIcon, BottleLabelFill as SiBottleLabelFill };
export default BottleLabelFill;
export type { BottleLabelFillProps };
