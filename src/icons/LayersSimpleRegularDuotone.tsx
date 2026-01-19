import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LayersSimpleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const LayersSimpleRegularDuotone = memo(
  forwardRef<SVGSVGElement, LayersSimpleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="layers-simple-duotone" {...props}>
      <path fill="currentColor" d="M21.35 13.24a2 2 0 0 1 0 3.52l-7.08 3.85a4.8 4.8 0 0 1-4.54 0l-7.08-3.85a2 2 0 0 1 0-3.52L4.93 12l1.57.85-3.13 1.71a.5.5 0 0 0 0 .88l7.07 3.86c.97.53 2.15.53 3.12 0l7.07-3.86a.5.5 0 0 0 0-.88l-3.13-1.7 1.57-.86z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M9.73 3.39a4.8 4.8 0 0 1 4.54 0l7.08 3.85a2 2 0 0 1 0 3.52l-7.08 3.85a4.8 4.8 0 0 1-4.54 0l-7.08-3.85a2 2 0 0 1 0-3.52zm3.83 1.31a3.3 3.3 0 0 0-3.12 0L3.37 8.56a.5.5 0 0 0 0 .88l7.07 3.86c.97.53 2.15.53 3.12 0l7.07-3.86a.5.5 0 0 0 0-.88z" clipRule="evenodd" />
    </IconBase>
  ))
);

LayersSimpleRegularDuotone.displayName = 'LayersSimpleRegularDuotone';

// Triple export pattern (lucide-react style)
export { LayersSimpleRegularDuotone, LayersSimpleRegularDuotone as LayersSimpleRegularDuotoneIcon, LayersSimpleRegularDuotone as SiLayersSimpleRegularDuotone };
export default LayersSimpleRegularDuotone;
export type { LayersSimpleRegularDuotoneProps };
