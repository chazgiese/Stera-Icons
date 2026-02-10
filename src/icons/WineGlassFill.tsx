import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WineGlassFillProps = Omit<IconBaseProps, 'children'>;

const WineGlassFill = memo(
  forwardRef<SVGSVGElement, WineGlassFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="wine-glass-fill" {...props}>
      <path fill="currentColor" d="M17.5 2a1 1 0 0 1 .98.78v.04l.08.4q.08.4.18 1.1c.13.94.26 2.24.26 3.68 0 3.16-2.73 5.53-6 5.94V18c0 1.1.9 2 2 2h1.1a1 1 0 0 1-.1 2H8a1 1 0 1 1 0-2h1a2 2 0 0 0 2-2v-4.06C7.73 13.53 5 11.16 5 8a27 27 0 0 1 .52-5.18v-.03A1 1 0 0 1 6.5 2z" />
    </IconBase>
  ))
);

WineGlassFill.displayName = 'WineGlassFill';

// Triple export pattern (lucide-react style)
export { WineGlassFill, WineGlassFill as WineGlassFillIcon, WineGlassFill as SiWineGlassFill };
export default WineGlassFill;
export type { WineGlassFillProps };
