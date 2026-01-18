import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LayersAltRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const LayersAltRegularDuotone = memo(
  forwardRef<SVGSVGElement, LayersAltRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20.67 15.83a.75.75 0 0 1 .66 1.34l-7.2 3.6a4.8 4.8 0 0 1-4.25 0l-7.21-3.6a.75.75 0 0 1 .66-1.34l7.22 3.6c.91.46 1.99.46 2.9 0z" opacity={0.4} />
        <path d="M20.67 11.83a.75.75 0 0 1 .66 1.34l-7.2 3.6a4.8 4.8 0 0 1-4.25 0l-7.21-3.6a.75.75 0 0 1 .66-1.34l7.22 3.6c.91.46 1.99.46 2.9 0z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M9.88 3.22a4.8 4.8 0 0 1 4.24 0L21 6.66a1.5 1.5 0 0 1 0 2.68l-6.87 3.44a4.8 4.8 0 0 1-4.24 0L3 9.34a1.5 1.5 0 0 1 0-2.68zm3.57 1.35c-.91-.46-1.99-.46-2.9 0L3.68 8l6.87 3.43c.91.46 1.99.46 2.9 0L20.32 8z" clipRule="evenodd" />
    </IconBase>
  ))
);

LayersAltRegularDuotone.displayName = 'LayersAltRegularDuotone';

// Triple export pattern (lucide-react style)
export { LayersAltRegularDuotone, LayersAltRegularDuotone as LayersAltRegularDuotoneIcon, LayersAltRegularDuotone as SiLayersAltRegularDuotone };
export type { LayersAltRegularDuotoneProps };
