import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LayersRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const LayersRegularDuotone = memo(
  forwardRef<SVGSVGElement, LayersRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M9.88 2.72a4.8 4.8 0 0 1 4.24 0L21 6.16a1.5 1.5 0 0 1 0 2.68l-6.87 3.44a4.8 4.8 0 0 1-4.24 0L3 8.84a1.5 1.5 0 0 1 0-2.68zm3.57 1.35c-.91-.46-1.99-.46-2.9 0L3.68 7.5l6.87 3.43c.91.46 1.99.46 2.9 0l6.87-3.43z" clipRule="evenodd" />
        <path fill="currentColor" fillRule="evenodd" d="M21 10.66a1.5 1.5 0 0 1 0 2.68l-1.82.9 1.81.92a1.5 1.5 0 0 1 0 2.68l-6.87 3.44a4.8 4.8 0 0 1-4.24 0L3 17.84a1.5 1.5 0 0 1 0-2.68l1.81-.91-1.81-.9a1.5 1.5 0 0 1 0-2.7l1.81-.9 1.68.84L3.68 12l6.87 3.44c.91.45 1.99.45 2.9 0L20.32 12 17.5 10.6l1.68-.84zm-6.88 6.12a4.8 4.8 0 0 1-4.24 0l-3.38-1.7-2.82 1.42 6.87 3.44c.91.45 1.99.45 2.9 0l6.87-3.44-2.82-1.41z" clipRule="evenodd" opacity={.4} />
    </IconBase>
  ))
);

LayersRegularDuotone.displayName = 'LayersRegularDuotone';

// Triple export pattern (lucide-react style)
export { LayersRegularDuotone, LayersRegularDuotone as LayersRegularDuotoneIcon, LayersRegularDuotone as SiLayersRegularDuotone };
export type { LayersRegularDuotoneProps };
