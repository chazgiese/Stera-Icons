import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WineBottleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const WineBottleFillDuotone = memo(
  forwardRef<SVGSVGElement, WineBottleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="wine-bottle-fill-duotone" {...props}>
      <path fill="currentColor" d="M12.75 7.5a3.5 3.5 0 0 1 3.5 3.5v9a2 2 0 0 1-2 2h-4.5a2 2 0 0 1-2-2v-9a3.5 3.5 0 0 1 3.5-3.5z" opacity={.4} />
        <path fill="currentColor" d="M12.75 2a1 1 0 0 1 1 1v4.65a4 4 0 0 0-1-.15h-1.5q-.52 0-1 .15V3a1 1 0 0 1 1-1z" />
    </IconBase>
  ))
);

WineBottleFillDuotone.displayName = 'WineBottleFillDuotone';

// Triple export pattern (lucide-react style)
export { WineBottleFillDuotone, WineBottleFillDuotone as WineBottleFillDuotoneIcon, WineBottleFillDuotone as SiWineBottleFillDuotone };
export default WineBottleFillDuotone;
export type { WineBottleFillDuotoneProps };
