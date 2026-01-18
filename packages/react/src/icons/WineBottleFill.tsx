import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type WineBottleFillProps = Omit<IconBaseProps, 'children'>;

const WineBottleFill = memo(
  forwardRef<SVGSVGElement, WineBottleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12.85 1c.5.06.9.48.9 1v5.65a3.5 3.5 0 0 1 2.5 3.35v10a2 2 0 0 1-2 2h-4.5a2 2 0 0 1-2-2V11a3.5 3.5 0 0 1 2.5-3.35V2a1 1 0 0 1 1-1h1.6" />
    </IconBase>
  ))
);

WineBottleFill.displayName = 'WineBottleFill';

// Triple export pattern (lucide-react style)
export { WineBottleFill, WineBottleFill as WineBottleFillIcon, WineBottleFill as SiWineBottleFill };
export type { WineBottleFillProps };
