import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type WineBottleLabelFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const WineBottleLabelFillDuotone = memo(
  forwardRef<SVGSVGElement, WineBottleLabelFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.25 21a2 2 0 0 1-2 2h-4.5a2 2 0 0 1-2-2v-1.5h8.5z" opacity={0.4} />
        <path fillRule="evenodd" d="M12.85 1c.5.06.9.48.9 1v5.65a3.5 3.5 0 0 1 2.5 3.35v6.5h-8.5V11a3.5 3.5 0 0 1 2.5-3.35V2a1 1 0 0 1 1-1h1.6m-5.1 11v2h8.5v-2z" clipRule="evenodd" opacity={0.4} />
        <path fill="currentColor" d="M16.25 19.5h-8.5v-2h8.5zM16.25 14h-8.5v-2h8.5z" />
    </IconBase>
  ))
);

WineBottleLabelFillDuotone.displayName = 'WineBottleLabelFillDuotone';

// Triple export pattern (lucide-react style)
export { WineBottleLabelFillDuotone, WineBottleLabelFillDuotone as WineBottleLabelFillDuotoneIcon, WineBottleLabelFillDuotone as SiWineBottleLabelFillDuotone };
export type { WineBottleLabelFillDuotoneProps };
