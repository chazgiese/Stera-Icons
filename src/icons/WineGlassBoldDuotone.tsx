import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WineGlassBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const WineGlassBoldDuotone = memo(
  forwardRef<SVGSVGElement, WineGlassBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="wine-glass-bold-duotone" {...props}>
      <path d="M13 18c0 1.1.9 2 2 2h1.1a1 1 0 0 1-.1 2H8a1 1 0 1 1 0-2h1a2 2 0 0 0 2-2v-4.06a8 8 0 0 0 2 0z" opacity={.4} />
        <path fillRule="evenodd" d="m17.5 2 .16.01h.02l.07.02.03.01.16.06.02.01.06.03.02.02.05.03.04.03.02.02.05.05.03.03.03.03.04.05.02.02.05.1.1.26v.01l.01.03.08.4q.08.4.18 1.1c.13.94.26 2.24.26 3.68 0 3.48-3.31 6-7 6s-7-2.52-7-6a27 27 0 0 1 .52-5.18v-.03a1 1 0 0 1 .1-.27l.02-.03a1 1 0 0 1 .33-.34q.02 0 .05-.03l.03-.01.04-.02.08-.04h.03l.06-.02.16-.03H17.5M7.33 4A23 23 0 0 0 7 8c0 2.05 2.06 4 5 4s5-1.95 5-4a25 25 0 0 0-.33-4z" clipRule="evenodd" />
    </IconBase>
  ))
);

WineGlassBoldDuotone.displayName = 'WineGlassBoldDuotone';

// Triple export pattern (lucide-react style)
export { WineGlassBoldDuotone, WineGlassBoldDuotone as WineGlassBoldDuotoneIcon, WineGlassBoldDuotone as SiWineGlassBoldDuotone };
export default WineGlassBoldDuotone;
export type { WineGlassBoldDuotoneProps };
