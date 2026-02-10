import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WineBottleLabelBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const WineBottleLabelBoldDuotone = memo(
  forwardRef<SVGSVGElement, WineBottleLabelBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="wine-bottle-label-bold-duotone" {...props}>
      <path d="M15.25 18.5h-6.5v-2h6.5zM15.25 12v2h-6.5v-2z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12.5 2c1.24 0 2.25 1 2.25 2.25v4.24l.04.07q.1.11.32.22A3.5 3.5 0 0 1 17.25 12v7a3 3 0 0 1-3 3h-4.5a3 3 0 0 1-3-3v-7c0-1.45.88-2.7 2.14-3.22a1 1 0 0 0 .32-.22q.06-.09.04-.07V4.25c0-1.24 1-2.25 2.25-2.25zm-1 2a.25.25 0 0 0-.25.25V8.5c0 1.15-.93 1.84-1.58 2.12A1.5 1.5 0 0 0 8.75 12v7a1 1 0 0 0 1 1h4.5a1 1 0 0 0 1-1v-7a1.5 1.5 0 0 0-.92-1.38c-.65-.28-1.58-.97-1.58-2.12V4.25A.25.25 0 0 0 12.5 4z" clipRule="evenodd" />
    </IconBase>
  ))
);

WineBottleLabelBoldDuotone.displayName = 'WineBottleLabelBoldDuotone';

// Triple export pattern (lucide-react style)
export { WineBottleLabelBoldDuotone, WineBottleLabelBoldDuotone as WineBottleLabelBoldDuotoneIcon, WineBottleLabelBoldDuotone as SiWineBottleLabelBoldDuotone };
export default WineBottleLabelBoldDuotone;
export type { WineBottleLabelBoldDuotoneProps };
