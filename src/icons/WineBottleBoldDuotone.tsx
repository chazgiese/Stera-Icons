import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type WineBottleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const WineBottleBoldDuotone = memo(
  forwardRef<SVGSVGElement, WineBottleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="wine-bottle-bold-duotone" {...props}>
      <path fill="currentColor" d="M14.75 7.5q-.02-.03.04.06.1.11.32.22A3.5 3.5 0 0 1 17.25 11v9a3 3 0 0 1-3 3h-4.5a3 3 0 0 1-3-3v-9c0-1.45.88-2.7 2.14-3.22a1 1 0 0 0 .32-.22q.06-.09.04-.06h2c0 1.15-.93 1.84-1.58 2.12A1.5 1.5 0 0 0 8.75 11v9a1 1 0 0 0 1 1h4.5a1 1 0 0 0 1-1v-9a1.5 1.5 0 0 0-.92-1.38c-.65-.28-1.58-.97-1.58-2.12z" opacity={.4} />
        <path fill="currentColor" d="M12.73 1.01a2.25 2.25 0 0 1 2.02 2.24V7.5h-2V3.25a.25.25 0 0 0-.2-.25H11.5a.25.25 0 0 0-.25.25V7.5h-2V3.25c0-1.24 1-2.25 2.25-2.25h1z" />
    </IconBase>
  ))
);

WineBottleBoldDuotone.displayName = 'WineBottleBoldDuotone';

// Triple export pattern (lucide-react style)
export { WineBottleBoldDuotone, WineBottleBoldDuotone as WineBottleBoldDuotoneIcon, WineBottleBoldDuotone as SiWineBottleBoldDuotone };
export type { WineBottleBoldDuotoneProps };
