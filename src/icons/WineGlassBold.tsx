import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type WineGlassBoldProps = Omit<IconBaseProps, 'children'>;

const WineGlassBold = memo(
  forwardRef<SVGSVGElement, WineGlassBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="wine-glass-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M17.56 1h.05l.18.04h.01l.03.02.2.09.03.02a1 1 0 0 1 .24.24l.03.03a1 1 0 0 1 .15.38l.01.04.02.1a22 22 0 0 1 .23 1.68C18.87 4.76 19 6.3 19 8a7 7 0 0 1-6 6.93V19c0 1.1.9 2 2 2h1.1a1 1 0 0 1-.1 2H8a1 1 0 1 1 0-2h1a2 2 0 0 0 2-2v-4.07A7 7 0 0 1 5 8a39 39 0 0 1 .5-6.05l.01-.1v-.03a1 1 0 0 1 .16-.38l.03-.03a1 1 0 0 1 .69-.4h.05L6.48 1h11.08M7.36 3A34 34 0 0 0 7 8a5 5 0 0 0 10 0 37 37 0 0 0-.36-5z" clipRule="evenodd" />
    </IconBase>
  ))
);

WineGlassBold.displayName = 'WineGlassBold';

// Triple export pattern (lucide-react style)
export { WineGlassBold, WineGlassBold as WineGlassBoldIcon, WineGlassBold as SiWineGlassBold };
export default WineGlassBold;
export type { WineGlassBoldProps };
