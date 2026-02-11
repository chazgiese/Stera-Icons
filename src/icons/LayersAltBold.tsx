import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayersAltBoldProps = Omit<IconBaseProps, 'children'>;

const LayersAltBold = memo(
  forwardRef<SVGSVGElement, LayersAltBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="layers-alt-bold" {...props}>
      <path d="M19.55 16.1a1 1 0 0 1 .9 1.8L14.24 21a5 5 0 0 1-4.48 0l-6.2-3.1a1 1 0 0 1 .89-1.8l6.2 3.11a3 3 0 0 0 2.7 0z" />
        <path d="M19.55 11.6a1 1 0 0 1 .9 1.8l-6.21 3.1a5 5 0 0 1-4.48 0l-6.2-3.1a1 1 0 0 1 .89-1.8l6.2 3.11a3 3 0 0 0 2.7 0z" />
        <path fillRule="evenodd" d="M9.76 3a5 5 0 0 1 4.48 0l5.87 2.94a1.75 1.75 0 0 1 0 3.13L14.24 12a5 5 0 0 1-4.48 0L3.9 9.07a1.75 1.75 0 0 1 0-3.13zm3.58 1.79a3 3 0 0 0-2.68 0L5.24 7.5l5.42 2.71a3 3 0 0 0 2.68 0l5.42-2.71z" clipRule="evenodd" />
    </IconBase>
  ))
);

LayersAltBold.displayName = 'LayersAltBold';

// Triple export pattern (lucide-react style)
export { LayersAltBold, LayersAltBold as LayersAltBoldIcon, LayersAltBold as SiLayersAltBold };
export default LayersAltBold;
export type { LayersAltBoldProps };
