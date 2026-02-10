import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WineBottleFillProps = Omit<IconBaseProps, 'children'>;

const WineBottleFill = memo(
  forwardRef<SVGSVGElement, WineBottleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="wine-bottle-fill" {...props}>
      <path fill="currentColor" d="M12.75 2a1 1 0 0 1 1 1v4.65a3.5 3.5 0 0 1 2.5 3.35v9a2 2 0 0 1-2 2h-4.5a2 2 0 0 1-2-2v-9a3.5 3.5 0 0 1 2.5-3.35V3a1 1 0 0 1 1-1z" />
    </IconBase>
  ))
);

WineBottleFill.displayName = 'WineBottleFill';

// Triple export pattern (lucide-react style)
export { WineBottleFill, WineBottleFill as WineBottleFillIcon, WineBottleFill as SiWineBottleFill };
export default WineBottleFill;
export type { WineBottleFillProps };
