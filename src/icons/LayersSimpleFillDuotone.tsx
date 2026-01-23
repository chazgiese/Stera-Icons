import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayersSimpleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LayersSimpleFillDuotone = memo(
  forwardRef<SVGSVGElement, LayersSimpleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="layers-simple-fill-duotone" {...props}>
      <path fill="currentColor" d="M9.6 3.17a5 5 0 0 1 4.8 0l7.07 3.85a2.25 2.25 0 0 1 0 3.96l-7.08 3.85a5 5 0 0 1-4.78 0l-7.08-3.85a2.25 2.25 0 0 1 0-3.96z" />
        <path fill="currentColor" d="M21.47 13.02a2.25 2.25 0 0 1 0 3.96l-7.08 3.85a5 5 0 0 1-4.78 0l-7.08-3.85a2.25 2.25 0 0 1 0-3.96L4.41 12l5.2 2.83a5 5 0 0 0 4.78 0L19.6 12z" opacity={.4} />
    </IconBase>
  ))
);

LayersSimpleFillDuotone.displayName = 'LayersSimpleFillDuotone';

// Triple export pattern (lucide-react style)
export { LayersSimpleFillDuotone, LayersSimpleFillDuotone as LayersSimpleFillDuotoneIcon, LayersSimpleFillDuotone as SiLayersSimpleFillDuotone };
export default LayersSimpleFillDuotone;
export type { LayersSimpleFillDuotoneProps };
