import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayersBoldProps = Omit<IconBaseProps, 'children'>;

const LayersBold = memo(
  forwardRef<SVGSVGElement, LayersBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="layers-bold" {...props}>
      <path fillRule="evenodd" d="M9.76 3a5 5 0 0 1 4.48 0l5.87 2.93a1.75 1.75 0 0 1 0 3.13l-1.37.69 1.37.68a1.75 1.75 0 0 1 0 3.13l-1.37.69 1.37.68a1.75 1.75 0 0 1 0 3.13L14.24 21a5 5 0 0 1-4.48 0L3.9 18.06a1.75 1.75 0 0 1 0-3.13l1.36-.68-1.36-.69a1.75 1.75 0 0 1 0-3.13l1.36-.68-1.36-.69a1.75 1.75 0 0 1 0-3.13zm4.48 13.5a5 5 0 0 1-4.48 0L7.5 15.37 5.24 16.5l5.42 2.71a3 3 0 0 0 2.68 0l5.42-2.71-2.26-1.13zm0-4.5a5 5 0 0 1-4.48 0L7.5 10.87 5.24 12l5.42 2.71a3 3 0 0 0 2.68 0L18.76 12l-2.26-1.13zm-.9-7.21a3 3 0 0 0-2.68 0l-5.42 2.7 5.42 2.72a3 3 0 0 0 1 .3l.17.01h.34l.17-.01a3 3 0 0 0 1-.3l5.42-2.71z" clipRule="evenodd" />
    </IconBase>
  ))
);

LayersBold.displayName = 'LayersBold';

// Triple export pattern (lucide-react style)
export { LayersBold, LayersBold as LayersBoldIcon, LayersBold as SiLayersBold };
export default LayersBold;
export type { LayersBoldProps };
