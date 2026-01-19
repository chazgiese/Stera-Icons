import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type WineGlassFillProps = Omit<IconBaseProps, 'children'>;

const WineGlassFill = memo(
  forwardRef<SVGSVGElement, WineGlassFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="wine-glass-fill" {...props}>
      <path fill="currentColor" d="M17.5 1a1 1 0 0 1 .98.82l.01.04.02.1a22 22 0 0 1 .23 1.68C18.87 4.76 19 6.3 19 8a7 7 0 0 1-6 6.93V19c0 1.1.9 2 2 2h1.1a1 1 0 0 1-.1 2H8a1 1 0 1 1 0-2h1a2 2 0 0 0 2-2v-4.07A7 7 0 0 1 5 8a39 39 0 0 1 .5-6.05l.01-.1v-.03l.03-.1A1 1 0 0 1 6.5 1z" />
    </IconBase>
  ))
);

WineGlassFill.displayName = 'WineGlassFill';

// Triple export pattern (lucide-react style)
export { WineGlassFill, WineGlassFill as WineGlassFillIcon, WineGlassFill as SiWineGlassFill };
export type { WineGlassFillProps };
