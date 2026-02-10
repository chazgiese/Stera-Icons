import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DropletFillProps = Omit<IconBaseProps, 'children'>;

const DropletFill = memo(
  forwardRef<SVGSVGElement, DropletFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="droplet-fill" {...props}>
      <path fill="currentColor" d="M12 2a1 1 0 0 1 .33.06l.15.06.05.03.06.04.04.04h.01l.08.07a22 22 0 0 1 1.06.94c.67.63 1.57 1.53 2.48 2.59s1.83 2.29 2.53 3.6a9 9 0 0 1 1.21 4.2c0 4.58-3.53 8.37-8 8.37s-8-3.8-8-8.36c0-1.46.51-2.9 1.21-4.2.7-1.32 1.63-2.56 2.53-3.61a33 33 0 0 1 3.54-3.53l.08-.07.1-.08.06-.03.14-.06h.01A1 1 0 0 1 12 2" />
    </IconBase>
  ))
);

DropletFill.displayName = 'DropletFill';

// Triple export pattern (lucide-react style)
export { DropletFill, DropletFill as DropletFillIcon, DropletFill as SiDropletFill };
export default DropletFill;
export type { DropletFillProps };
