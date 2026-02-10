import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayersRegularProps = Omit<IconBaseProps, 'children'>;

const LayersRegular = memo(
  forwardRef<SVGSVGElement, LayersRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="layers" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M9.88 3.22a4.8 4.8 0 0 1 4.24 0L20 6.16a1.5 1.5 0 0 1 0 2.68l-1.81.9 1.81.92a1.5 1.5 0 0 1 0 2.68l-1.81.9 1.81.92a1.5 1.5 0 0 1 0 2.68l-5.87 2.94a4.8 4.8 0 0 1-4.24 0L4 17.84a1.5 1.5 0 0 1 0-2.68l1.81-.91-1.81-.9a1.5 1.5 0 0 1 0-2.7l1.81-.9-1.81-.9a1.5 1.5 0 0 1 0-2.7zm4.24 13.06a4.8 4.8 0 0 1-4.24 0l-2.38-1.2-2.82 1.42 5.87 2.93c.91.46 1.99.46 2.9 0l5.87-2.93-2.82-1.41zm0-4.5a4.8 4.8 0 0 1-4.24 0l-2.38-1.2L4.68 12l5.87 2.93c.91.46 1.99.46 2.9 0L19.32 12l-2.82-1.41zm-.67-7.22c-.91-.45-1.99-.45-2.9 0L4.68 7.5l3.14 1.57h.02l2.7 1.36a3.3 3.3 0 0 0 2.91 0l5.87-2.93z" clipRule="evenodd" />
    </IconBase>
  ))
);

LayersRegular.displayName = 'LayersRegular';

// Triple export pattern (lucide-react style)
export { LayersRegular, LayersRegular as LayersRegularIcon, LayersRegular as SiLayersRegular };
export default LayersRegular;
export type { LayersRegularProps };
