import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WineBottleLabelFillProps = Omit<IconBaseProps, 'children'>;

const WineBottleLabelFill = memo(
  forwardRef<SVGSVGElement, WineBottleLabelFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="wine-bottle-label-fill" {...props}>
      <path fill="currentColor" d="M16.25 20a2 2 0 0 1-2 2h-4.5a2 2 0 0 1-2-2v-1.66q.12.04.25.04h8q.13 0 .25-.04zM16.25 16.66l-.25-.04H8l-.25.04v-2.82q.12.04.25.04h8q.13 0 .25-.04zM12.75 2a1 1 0 0 1 1 1v4.65a3.5 3.5 0 0 1 2.5 3.35v1.16l-.25-.04H8l-.25.04V11a3.5 3.5 0 0 1 2.5-3.35V3a1 1 0 0 1 1-1z" />
    </IconBase>
  ))
);

WineBottleLabelFill.displayName = 'WineBottleLabelFill';

// Triple export pattern (lucide-react style)
export { WineBottleLabelFill, WineBottleLabelFill as WineBottleLabelFillIcon, WineBottleLabelFill as SiWineBottleLabelFill };
export default WineBottleLabelFill;
export type { WineBottleLabelFillProps };
