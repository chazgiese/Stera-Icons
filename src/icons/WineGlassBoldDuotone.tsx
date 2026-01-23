import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WineGlassBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const WineGlassBoldDuotone = memo(
  forwardRef<SVGSVGElement, WineGlassBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="wine-glass-bold-duotone" {...props}>
      <path d="M16 21a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2z" opacity={0.4} />
        <path fillRule="evenodd" d="M17.56 1h.05l.18.04h.01l.03.02.2.09.03.02a1 1 0 0 1 .24.24l.03.03a1 1 0 0 1 .15.38l.01.04.02.1a22 22 0 0 1 .23 1.68C18.87 4.76 19 6.3 19 8A7 7 0 1 1 5 8a39 39 0 0 1 .5-6.05l.01-.1v-.03a1 1 0 0 1 .16-.38l.03-.03a1 1 0 0 1 .69-.4h.05L6.48 1h11.08M7.24 3.87A37 37 0 0 0 7 8a5 5 0 0 0 10 0 37 37 0 0 0-.36-5H7.36z" clipRule="evenodd" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M11 14.93V19a2 2 0 0 1-2 2h6a2 2 0 0 1-2-2v-4.07a7 7 0 0 1-2 0" clipRule="evenodd" />
    </IconBase>
  ))
);

WineGlassBoldDuotone.displayName = 'WineGlassBoldDuotone';

// Triple export pattern (lucide-react style)
export { WineGlassBoldDuotone, WineGlassBoldDuotone as WineGlassBoldDuotoneIcon, WineGlassBoldDuotone as SiWineGlassBoldDuotone };
export default WineGlassBoldDuotone;
export type { WineGlassBoldDuotoneProps };
