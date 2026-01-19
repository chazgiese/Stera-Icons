import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type WineBottleLabelFillProps = Omit<IconBaseProps, 'children'>;

const WineBottleLabelFill = memo(
  forwardRef<SVGSVGElement, WineBottleLabelFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="wine-bottle-label-fill" {...props}>
      <path fill="currentColor" d="M16.25 21a2 2 0 0 1-2 2h-4.5a2 2 0 0 1-2-2v-1.5h8.5zM16.25 17.5h-8.5V14h8.5zM12.85 1c.5.06.9.48.9 1v5.65a3.5 3.5 0 0 1 2.5 3.35v1h-8.5v-1a3.5 3.5 0 0 1 2.5-3.35V2a1 1 0 0 1 1-1h1.6" />
    </IconBase>
  ))
);

WineBottleLabelFill.displayName = 'WineBottleLabelFill';

// Triple export pattern (lucide-react style)
export { WineBottleLabelFill, WineBottleLabelFill as WineBottleLabelFillIcon, WineBottleLabelFill as SiWineBottleLabelFill };
export type { WineBottleLabelFillProps };
