import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayersRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const LayersRegularDuotone = memo(
  forwardRef<SVGSVGElement, LayersRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="layers-duotone" {...props}>
      <path fillRule="evenodd" d="M20 10.66a1.5 1.5 0 0 1 0 2.68l-1.82.9 1.81.92a1.5 1.5 0 0 1 0 2.68l-5.87 2.94a4.8 4.8 0 0 1-4.24 0L4 17.84a1.5 1.5 0 0 1 0-2.68l1.81-.91-1.81-.9a1.5 1.5 0 0 1 0-2.7l1.81-.9 1.68.84L4.68 12l5.87 2.94c.91.45 1.99.45 2.9 0L19.32 12 16.5 10.6l1.68-.84zm-5.88 5.62a4.8 4.8 0 0 1-4.24 0l-2.38-1.2-2.82 1.42 5.87 2.94c.91.45 1.99.45 2.9 0l5.87-2.94-2.82-1.41z" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M9.88 3.22a4.8 4.8 0 0 1 4.24 0L20 6.16a1.5 1.5 0 0 1 0 2.68l-5.87 2.94a4.8 4.8 0 0 1-4.24 0L4 8.84a1.5 1.5 0 0 1 0-2.68zm3.57 1.35c-.91-.46-1.99-.46-2.9 0L4.68 7.5l5.87 2.93c.91.46 1.99.46 2.9 0l5.87-2.93z" clipRule="evenodd" />
    </IconBase>
  ))
);

LayersRegularDuotone.displayName = 'LayersRegularDuotone';

// Triple export pattern (lucide-react style)
export { LayersRegularDuotone, LayersRegularDuotone as LayersRegularDuotoneIcon, LayersRegularDuotone as SiLayersRegularDuotone };
export default LayersRegularDuotone;
export type { LayersRegularDuotoneProps };
