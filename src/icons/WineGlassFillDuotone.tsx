import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WineGlassFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const WineGlassFillDuotone = memo(
  forwardRef<SVGSVGElement, WineGlassFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="wine-glass-fill-duotone" {...props}>
      <path d="M16 21a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zM17.5 1a1 1 0 0 1 .98.82l.01.04.02.1a22 22 0 0 1 .23 1.68C18.87 4.76 19 6.3 19 8A7 7 0 1 1 5 8a39 39 0 0 1 .5-6.05l.01-.1v-.03l.03-.1A1 1 0 0 1 6.5 1z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M11 14.93V19a2 2 0 0 1-2 2h6a2 2 0 0 1-2-2v-4.07a7 7 0 0 1-2 0" clipRule="evenodd" />
    </IconBase>
  ))
);

WineGlassFillDuotone.displayName = 'WineGlassFillDuotone';

// Triple export pattern (lucide-react style)
export { WineGlassFillDuotone, WineGlassFillDuotone as WineGlassFillDuotoneIcon, WineGlassFillDuotone as SiWineGlassFillDuotone };
export default WineGlassFillDuotone;
export type { WineGlassFillDuotoneProps };
