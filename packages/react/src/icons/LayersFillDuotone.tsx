import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LayersFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LayersFillDuotone = memo(
  forwardRef<SVGSVGElement, LayersFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M9.76 2.5a5 5 0 0 1 4.48 0l6.87 3.44a1.75 1.75 0 0 1 0 3.13l-6.87 3.43a5 5 0 0 1-4.48 0L2.9 9.07a1.75 1.75 0 0 1 0-3.13z" />
        <path fill="currentColor" fillRule="evenodd" d="M21.1 10.44a1.75 1.75 0 0 1 0 3.13l-1.36.68 1.37.69a1.75 1.75 0 0 1 0 3.13l-6.87 3.43a5 5 0 0 1-4.48 0L2.9 18.07a1.75 1.75 0 0 1 0-3.13l1.37-.69-1.37-.68a1.75 1.75 0 0 1 0-3.13l1.36-.69 2.24 1.12L4.24 12l6.42 3.21a3 3 0 0 0 2.68 0L19.76 12l-2.26-1.13 2.23-1.12zM14.25 17a5 5 0 0 1-4.48 0L6.5 15.37 4.23 16.5l6.43 3.21a3 3 0 0 0 2.68 0l6.42-3.21-2.26-1.13z" clipRule="evenodd" opacity={.4} />
    </IconBase>
  ))
);

LayersFillDuotone.displayName = 'LayersFillDuotone';

// Triple export pattern (lucide-react style)
export { LayersFillDuotone, LayersFillDuotone as LayersFillDuotoneIcon, LayersFillDuotone as SiLayersFillDuotone };
export type { LayersFillDuotoneProps };
