import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WineGlassRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const WineGlassRegularDuotone = memo(
  forwardRef<SVGSVGElement, WineGlassRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="wine-glass-duotone" {...props}>
      <path fill="currentColor" d="M12.75 18c0 1.24 1 2.25 2.25 2.25h1.08a.75.75 0 0 1-.08 1.5H8a.75.75 0 0 1 0-1.5h1c1.24 0 2.25-1 2.25-2.25v-4.29a8 8 0 0 0 1.5 0z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="m17.5 2.25.12.01h.02l.06.02.08.02.07.04.06.03.05.04.06.05.04.05.06.07.03.05.04.07v.02l.04.12v.03l.03.08a17 17 0 0 1 .23 1.41A27 27 0 0 1 18.75 8c0 3.3-3.16 5.75-6.75 5.75-3.6 0-6.75-2.45-6.75-5.75a27 27 0 0 1 .5-5.05l.01-.08v-.03l.05-.12V2.7l.04-.07.03-.05.06-.07.03-.04.01-.01.06-.05.05-.04.06-.03.07-.04.08-.02.05-.02h.03l.12-.01zM7.12 3.75A24 24 0 0 0 6.75 8c0 2.22 2.22 4.25 5.25 4.25s5.25-2.03 5.25-4.25a26 26 0 0 0-.37-4.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

WineGlassRegularDuotone.displayName = 'WineGlassRegularDuotone';

// Triple export pattern (lucide-react style)
export { WineGlassRegularDuotone, WineGlassRegularDuotone as WineGlassRegularDuotoneIcon, WineGlassRegularDuotone as SiWineGlassRegularDuotone };
export default WineGlassRegularDuotone;
export type { WineGlassRegularDuotoneProps };
