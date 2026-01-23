import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayersAltBoldProps = Omit<IconBaseProps, 'children'>;

const LayersAltBold = memo(
  forwardRef<SVGSVGElement, LayersAltBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="layers-alt-bold" {...props}>
      <path fill="currentColor" d="M20.55 15.6a1 1 0 0 1 .9 1.8L14.24 21a5 5 0 0 1-4.48 0l-7.2-3.6a1 1 0 0 1 .89-1.8l7.2 3.61a3 3 0 0 0 2.7 0z" />
        <path fill="currentColor" d="M20.55 11.6a1 1 0 0 1 .9 1.8L14.24 17a5 5 0 0 1-4.48 0l-7.2-3.6a1 1 0 0 1 .89-1.8l7.2 3.61a3 3 0 0 0 2.7 0z" />
        <path fill="currentColor" fillRule="evenodd" d="M9.76 3a5 5 0 0 1 4.48 0l6.87 3.44a1.75 1.75 0 0 1 0 3.13L14.24 13a5 5 0 0 1-4.48 0L2.9 9.57a1.75 1.75 0 0 1 0-3.13zm3.58 1.79a3 3 0 0 0-2.68 0L4.24 8l6.42 3.21a3 3 0 0 0 2.68 0L19.76 8z" clipRule="evenodd" />
    </IconBase>
  ))
);

LayersAltBold.displayName = 'LayersAltBold';

// Triple export pattern (lucide-react style)
export { LayersAltBold, LayersAltBold as LayersAltBoldIcon, LayersAltBold as SiLayersAltBold };
export default LayersAltBold;
export type { LayersAltBoldProps };
