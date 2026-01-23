import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WineGlassRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const WineGlassRegularDuotone = memo(
  forwardRef<SVGSVGElement, WineGlassRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="wine-glass-duotone" {...props}>
      <path d="M16 21.25a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5z" opacity={0.4} />
        <path fillRule="evenodd" d="M17.52 1.25q.08 0 .14.02l.05.01.08.03.03.01a1 1 0 0 1 .33.32l.04.07.05.15v.04l.08.46.18 1.31c.12 1.1.25 2.64.25 4.33a6.75 6.75 0 0 1-13.5 0 38 38 0 0 1 .5-6.1l.01-.03.05-.16.04-.07.12-.17q.1-.09.2-.15h.03l.09-.04.05-.01.14-.02zM7.14 2.75q-.07.42-.14 1.1A37 37 0 0 0 6.75 8a5.25 5.25 0 1 0 10.5 0 37 37 0 0 0-.39-5.25z" clipRule="evenodd" opacity={0.4} />
        <path fill="currentColor" d="M12.75 19c0 1.24 1 2.25 2.25 2.25H9c1.22-.06 2.25-.98 2.25-2.25v-4.3a7 7 0 0 0 1.5 0z" />
    </IconBase>
  ))
);

WineGlassRegularDuotone.displayName = 'WineGlassRegularDuotone';

// Triple export pattern (lucide-react style)
export { WineGlassRegularDuotone, WineGlassRegularDuotone as WineGlassRegularDuotoneIcon, WineGlassRegularDuotone as SiWineGlassRegularDuotone };
export default WineGlassRegularDuotone;
export type { WineGlassRegularDuotoneProps };
