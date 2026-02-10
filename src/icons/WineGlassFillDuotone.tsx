import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WineGlassFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const WineGlassFillDuotone = memo(
  forwardRef<SVGSVGElement, WineGlassFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="wine-glass-fill-duotone" {...props}>
      <path fill="currentColor" d="M13 18c0 1.1.9 2 2 2h1.1a1 1 0 0 1-.1 2H8a1 1 0 1 1 0-2h1a2 2 0 0 0 2-2v-4.06a8 8 0 0 0 2 0z" opacity={.4} />
        <path fill="currentColor" d="M17.5 2a1 1 0 0 1 .98.78v.04l.08.4q.08.4.18 1.1c.13.94.26 2.24.26 3.68 0 3.48-3.31 6-7 6s-7-2.52-7-6a27 27 0 0 1 .52-5.18v-.03A1 1 0 0 1 6.5 2z" />
    </IconBase>
  ))
);

WineGlassFillDuotone.displayName = 'WineGlassFillDuotone';

// Triple export pattern (lucide-react style)
export { WineGlassFillDuotone, WineGlassFillDuotone as WineGlassFillDuotoneIcon, WineGlassFillDuotone as SiWineGlassFillDuotone };
export default WineGlassFillDuotone;
export type { WineGlassFillDuotoneProps };
