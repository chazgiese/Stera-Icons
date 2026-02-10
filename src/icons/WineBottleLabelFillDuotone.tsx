import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WineBottleLabelFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const WineBottleLabelFillDuotone = memo(
  forwardRef<SVGSVGElement, WineBottleLabelFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="wine-bottle-label-fill-duotone" {...props}>
      <path d="M16.25 20a2 2 0 0 1-2 2h-4.5a2 2 0 0 1-2-2v-1.66q.12.04.25.04h8q.13 0 .25-.04zM16.25 16.66l-.25-.04H8l-.25.04v-2.82q.12.04.25.04h8q.13 0 .25-.04zM12.75 2a1 1 0 0 1 1 1v4.65a3.5 3.5 0 0 1 2.5 3.35v1.16l-.25-.04H8l-.25.04V11a3.5 3.5 0 0 1 2.5-3.35V3a1 1 0 0 1 1-1z" opacity={0.4} />
        <path fill="currentColor" d="M16 16.63q.13 0 .25.03v1.68l-.25.04H8l-.25-.04v-1.68l.25-.04zM16 12.13q.13 0 .25.03v1.68l-.25.04H8l-.25-.04v-1.68l.25-.04z" />
    </IconBase>
  ))
);

WineBottleLabelFillDuotone.displayName = 'WineBottleLabelFillDuotone';

// Triple export pattern (lucide-react style)
export { WineBottleLabelFillDuotone, WineBottleLabelFillDuotone as WineBottleLabelFillDuotoneIcon, WineBottleLabelFillDuotone as SiWineBottleLabelFillDuotone };
export default WineBottleLabelFillDuotone;
export type { WineBottleLabelFillDuotoneProps };
