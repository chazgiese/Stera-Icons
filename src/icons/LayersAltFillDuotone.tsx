import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayersAltFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LayersAltFillDuotone = memo(
  forwardRef<SVGSVGElement, LayersAltFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="layers-alt-fill-duotone" {...props}>
      <path d="M19.55 16.1a1 1 0 0 1 .9 1.8L14.24 21a5 5 0 0 1-4.48 0l-6.2-3.1a1 1 0 0 1 .89-1.8l6.2 3.11a3 3 0 0 0 2.7 0z" opacity={0.4} />
        <path d="M19.55 11.6a1 1 0 0 1 .9 1.8l-6.21 3.1a5 5 0 0 1-4.48 0l-6.2-3.1a1 1 0 0 1 .89-1.8l6.2 3.11a3 3 0 0 0 2.7 0z" opacity={0.4} />
        <path fill="currentColor" d="M9.76 3a5 5 0 0 1 4.48 0l5.87 2.94a1.75 1.75 0 0 1 0 3.13L14.24 12a5 5 0 0 1-4.48 0L3.9 9.07a1.75 1.75 0 0 1 0-3.13z" />
    </IconBase>
  ))
);

LayersAltFillDuotone.displayName = 'LayersAltFillDuotone';

// Triple export pattern (lucide-react style)
export { LayersAltFillDuotone, LayersAltFillDuotone as LayersAltFillDuotoneIcon, LayersAltFillDuotone as SiLayersAltFillDuotone };
export default LayersAltFillDuotone;
export type { LayersAltFillDuotoneProps };
