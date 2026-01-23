import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayersSimpleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const LayersSimpleBoldDuotone = memo(
  forwardRef<SVGSVGElement, LayersSimpleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="layers-simple-bold-duotone" {...props}>
      <path fill="currentColor" d="m6.5 13.14-3.01 1.64a.25.25 0 0 0 0 .44l7.07 3.86a3 3 0 0 0 2.88 0l7.07-3.86a.25.25 0 0 0 0-.44l-3.01-1.64L19.59 12l1.88 1.02a2.25 2.25 0 0 1 0 3.96l-7.08 3.85a5 5 0 0 1-4.79 0l-7.07-3.85a2.25 2.25 0 0 1 0-3.96L4.41 12z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M9.6 3.17a5 5 0 0 1 4.8 0l7.07 3.85a2.25 2.25 0 0 1 0 3.96l-7.08 3.85a5 5 0 0 1-4.78 0l-7.08-3.85a2.25 2.25 0 0 1 0-3.96zm3.84 1.75a3 3 0 0 0-2.88 0L3.5 8.78a.25.25 0 0 0 0 .44l7.07 3.86a3 3 0 0 0 2.88 0l7.07-3.86a.25.25 0 0 0 0-.44z" clipRule="evenodd" />
    </IconBase>
  ))
);

LayersSimpleBoldDuotone.displayName = 'LayersSimpleBoldDuotone';

// Triple export pattern (lucide-react style)
export { LayersSimpleBoldDuotone, LayersSimpleBoldDuotone as LayersSimpleBoldDuotoneIcon, LayersSimpleBoldDuotone as SiLayersSimpleBoldDuotone };
export default LayersSimpleBoldDuotone;
export type { LayersSimpleBoldDuotoneProps };
