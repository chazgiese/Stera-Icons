import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayersBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const LayersBoldDuotone = memo(
  forwardRef<SVGSVGElement, LayersBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="layers-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M20.1 10.44a1.75 1.75 0 0 1 0 3.12l-1.36.69 1.37.69a1.75 1.75 0 0 1 0 3.12L14.24 21a5 5 0 0 1-4.48 0L3.9 18.06a1.75 1.75 0 0 1 0-3.12l1.37-.7-1.37-.68a1.75 1.75 0 0 1 0-3.12l1.36-.69 2.24 1.12L5.24 12l5.42 2.71a3 3 0 0 0 2.68 0L18.76 12l-2.26-1.13 2.23-1.12zm-5.86 6.06a5 5 0 0 1-4.48 0L7.5 15.37 5.24 16.5l5.42 2.71a3 3 0 0 0 2.68 0l5.42-2.71-2.26-1.13z" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M9.76 3a5 5 0 0 1 4.48 0l5.87 2.94a1.75 1.75 0 0 1 0 3.13L14.24 12a5 5 0 0 1-4.48 0L3.9 9.07a1.75 1.75 0 0 1 0-3.13zm3.58 1.79a3 3 0 0 0-2.68 0L5.24 7.5l5.42 2.71a3 3 0 0 0 2.68 0l5.42-2.71z" clipRule="evenodd" />
    </IconBase>
  ))
);

LayersBoldDuotone.displayName = 'LayersBoldDuotone';

// Triple export pattern (lucide-react style)
export { LayersBoldDuotone, LayersBoldDuotone as LayersBoldDuotoneIcon, LayersBoldDuotone as SiLayersBoldDuotone };
export default LayersBoldDuotone;
export type { LayersBoldDuotoneProps };
