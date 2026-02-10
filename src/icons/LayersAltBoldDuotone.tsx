import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayersAltBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const LayersAltBoldDuotone = memo(
  forwardRef<SVGSVGElement, LayersAltBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="layers-alt-bold-duotone" {...props}>
      <path d="M19.55 16.1a1 1 0 0 1 .9 1.8L14.24 21a5 5 0 0 1-4.48 0l-6.2-3.1a1 1 0 0 1 .89-1.8l6.2 3.11a3 3 0 0 0 2.7 0z" opacity={0.4} />
        <path d="M19.55 11.6a1 1 0 0 1 .9 1.8l-6.21 3.1a5 5 0 0 1-4.48 0l-6.2-3.1a1 1 0 0 1 .89-1.8l6.2 3.11a3 3 0 0 0 2.7 0z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M9.76 3a5 5 0 0 1 4.48 0l5.87 2.94a1.75 1.75 0 0 1 0 3.13L14.24 12a5 5 0 0 1-4.48 0L3.9 9.07a1.75 1.75 0 0 1 0-3.13zm3.58 1.79a3 3 0 0 0-2.68 0L5.24 7.5l5.42 2.71a3 3 0 0 0 2.68 0l5.42-2.71z" clipRule="evenodd" />
    </IconBase>
  ))
);

LayersAltBoldDuotone.displayName = 'LayersAltBoldDuotone';

// Triple export pattern (lucide-react style)
export { LayersAltBoldDuotone, LayersAltBoldDuotone as LayersAltBoldDuotoneIcon, LayersAltBoldDuotone as SiLayersAltBoldDuotone };
export default LayersAltBoldDuotone;
export type { LayersAltBoldDuotoneProps };
