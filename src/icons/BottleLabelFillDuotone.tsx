import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BottleLabelFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BottleLabelFillDuotone = memo(
  forwardRef<SVGSVGElement, BottleLabelFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="bottle-label-fill-duotone" {...props}>
      <path d="M16.25 19.75c0 1.24-1 2.25-2.25 2.25h-4c-1.24 0-2.25-1-2.25-2.25V18h8.5zM16.25 16h-8.5v-2h8.5zM13.85 4.05l.34 3.76q.04.3.22.53l1.18 1.49a3 3 0 0 1 .66 1.87v.3h-8.5v-.3a3 3 0 0 1 .66-1.87l1.18-1.49a1 1 0 0 0 .22-.53l.34-3.76V4h3.7z" opacity={0.4} />
        <path d="M16.25 18h-8.5v-2h8.5zM16.25 14h-8.5v-2h8.5zM13.75 2a1 1 0 1 1 0 2h-3.5a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

BottleLabelFillDuotone.displayName = 'BottleLabelFillDuotone';

// Triple export pattern (lucide-react style)
export { BottleLabelFillDuotone, BottleLabelFillDuotone as BottleLabelFillDuotoneIcon, BottleLabelFillDuotone as SiBottleLabelFillDuotone };
export default BottleLabelFillDuotone;
export type { BottleLabelFillDuotoneProps };
