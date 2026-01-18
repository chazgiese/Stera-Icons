import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LayersBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const LayersBoldDuotone = memo(
  forwardRef<SVGSVGElement, LayersBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M21.1 10.44a1.75 1.75 0 0 1 0 3.13l-1.36.68 1.37.69a1.75 1.75 0 0 1 0 3.13l-6.87 3.43a5 5 0 0 1-4.48 0L2.9 18.07a1.75 1.75 0 0 1 0-3.13l1.37-.69-1.37-.68a1.75 1.75 0 0 1 0-3.13l1.37-.69 2.23 1.12L4.24 12l6.42 3.21a3 3 0 0 0 2.68 0L19.76 12l-2.26-1.13 2.23-1.12zM14.25 17a5 5 0 0 1-4.48 0L6.5 15.37 4.23 16.5l6.43 3.21a3 3 0 0 0 2.68 0l6.42-3.21-2.26-1.13z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M9.76 2.5a5 5 0 0 1 4.48 0l6.87 3.43a1.75 1.75 0 0 1 0 3.13l-6.87 3.44a5 5 0 0 1-4.48 0L2.9 9.06a1.75 1.75 0 0 1 0-3.13zm3.58 1.79a3 3 0 0 0-2.68 0l-6.42 3.2 6.42 3.22a3 3 0 0 0 2.68 0l6.42-3.21z" clipRule="evenodd" />
    </IconBase>
  ))
);

LayersBoldDuotone.displayName = 'LayersBoldDuotone';

// Triple export pattern (lucide-react style)
export { LayersBoldDuotone, LayersBoldDuotone as LayersBoldDuotoneIcon, LayersBoldDuotone as SiLayersBoldDuotone };
export type { LayersBoldDuotoneProps };
