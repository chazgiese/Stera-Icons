import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayersAltRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const LayersAltRegularDuotone = memo(
  forwardRef<SVGSVGElement, LayersAltRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="layers-alt-duotone" {...props}>
      <path d="M19.67 16.33a.75.75 0 0 1 .66 1.34l-6.2 3.1a4.8 4.8 0 0 1-4.25 0l-6.21-3.1a.75.75 0 0 1 .66-1.34l6.22 3.1c.91.46 1.99.46 2.9 0z" opacity={0.4} />
        <path d="M19.67 11.83a.75.75 0 0 1 .66 1.34l-6.2 3.1a4.8 4.8 0 0 1-4.25 0l-6.21-3.1a.75.75 0 0 1 .66-1.34l6.22 3.1c.91.46 1.99.46 2.9 0z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M9.88 3.22a4.8 4.8 0 0 1 4.24 0L20 6.16a1.5 1.5 0 0 1 0 2.68l-5.87 2.94a4.8 4.8 0 0 1-4.24 0L4 8.84a1.5 1.5 0 0 1 0-2.68zm3.57 1.35c-.91-.46-1.99-.46-2.9 0L4.68 7.5l5.87 2.93c.91.46 1.99.46 2.9 0l5.87-2.93z" clipRule="evenodd" />
    </IconBase>
  ))
);

LayersAltRegularDuotone.displayName = 'LayersAltRegularDuotone';

// Triple export pattern (lucide-react style)
export { LayersAltRegularDuotone, LayersAltRegularDuotone as LayersAltRegularDuotoneIcon, LayersAltRegularDuotone as SiLayersAltRegularDuotone };
export default LayersAltRegularDuotone;
export type { LayersAltRegularDuotoneProps };
