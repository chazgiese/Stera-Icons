import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WineBottleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const WineBottleBoldDuotone = memo(
  forwardRef<SVGSVGElement, WineBottleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="wine-bottle-bold-duotone" {...props}>
      <path d="M8.75 15v4a1 1 0 0 0 1 1h4.5a1 1 0 0 0 1-1v-4h2v4a3 3 0 0 1-3 3h-4.5a3 3 0 0 1-3-3v-4z" opacity={.4} />
        <path d="M12.5 2c1.24 0 2.25 1 2.25 2.25v4.24l.04.07q.1.11.32.22A3.5 3.5 0 0 1 17.25 12v3h-2v-3a1.5 1.5 0 0 0-.92-1.38c-.65-.28-1.58-.97-1.58-2.12V4.25A.25.25 0 0 0 12.5 4h-1a.25.25 0 0 0-.25.25V8.5c0 1.15-.93 1.84-1.58 2.12A1.5 1.5 0 0 0 8.75 12v3h-2v-3c0-1.45.88-2.7 2.14-3.22a1 1 0 0 0 .32-.22q.06-.09.04-.07V4.25c0-1.24 1-2.25 2.25-2.25z" />
    </IconBase>
  ))
);

WineBottleBoldDuotone.displayName = 'WineBottleBoldDuotone';

// Triple export pattern (lucide-react style)
export { WineBottleBoldDuotone, WineBottleBoldDuotone as WineBottleBoldDuotoneIcon, WineBottleBoldDuotone as SiWineBottleBoldDuotone };
export default WineBottleBoldDuotone;
export type { WineBottleBoldDuotoneProps };
