import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayersSimpleRegularProps = Omit<IconBaseProps, 'children'>;

const LayersSimpleRegular = memo(
  forwardRef<SVGSVGElement, LayersSimpleRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="layers-simple" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M9.73 3.39a4.8 4.8 0 0 1 4.54 0l7.08 3.85a2 2 0 0 1 0 3.52L19.07 12l2.28 1.24a2 2 0 0 1 0 3.52l-7.08 3.85a4.8 4.8 0 0 1-4.54 0l-7.08-3.85a2 2 0 0 1 0-3.52L4.93 12l-2.28-1.24a2 2 0 0 1 0-3.52zm4.54 11.22a4.8 4.8 0 0 1-4.54 0L6.5 12.85l-3.13 1.71a.5.5 0 0 0 0 .88l7.07 3.86c.97.53 2.15.53 3.12 0l7.07-3.86a.5.5 0 0 0 0-.88l-3.13-1.7zm-.71-9.9a3.3 3.3 0 0 0-3.12 0L3.37 8.55a.5.5 0 0 0 0 .88l7.07 3.86c.97.53 2.15.53 3.12 0l7.07-3.86a.5.5 0 0 0 0-.88z" clipRule="evenodd" />
    </IconBase>
  ))
);

LayersSimpleRegular.displayName = 'LayersSimpleRegular';

// Triple export pattern (lucide-react style)
export { LayersSimpleRegular, LayersSimpleRegular as LayersSimpleRegularIcon, LayersSimpleRegular as SiLayersSimpleRegular };
export default LayersSimpleRegular;
export type { LayersSimpleRegularProps };
