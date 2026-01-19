import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LayersRegularProps = Omit<IconBaseProps, 'children'>;

const LayersRegular = memo(
  forwardRef<SVGSVGElement, LayersRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="layers" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M9.88 2.72a4.8 4.8 0 0 1 4.24 0L21 6.16a1.5 1.5 0 0 1 0 2.68l-1.81.9 1.81.92a1.5 1.5 0 0 1 0 2.68l-1.81.9 1.81.92a1.5 1.5 0 0 1 0 2.68l-6.87 3.44a4.8 4.8 0 0 1-4.24 0L3 17.84a1.5 1.5 0 0 1 0-2.68l1.81-.91-1.81-.9a1.5 1.5 0 0 1 0-2.7l1.81-.9-1.81-.9a1.5 1.5 0 0 1 0-2.7zm4.24 14.06a4.8 4.8 0 0 1-4.24 0l-3.38-1.7-2.82 1.42 6.87 3.44c.91.45 1.99.45 2.9 0l6.87-3.44-2.82-1.41zm0-4.5a4.8 4.8 0 0 1-4.24 0l-3.38-1.7L3.68 12l6.87 3.44c.91.45 1.99.45 2.9 0L20.32 12 17.5 10.6zm-.67-8.22c-.91-.45-1.99-.45-2.9 0L3.68 7.5l6.87 3.44q.49.24 1 .3.45-.03.9 0 .52-.06 1-.3l6.87-3.44z" clipRule="evenodd" />
    </IconBase>
  ))
);

LayersRegular.displayName = 'LayersRegular';

// Triple export pattern (lucide-react style)
export { LayersRegular, LayersRegular as LayersRegularIcon, LayersRegular as SiLayersRegular };
export default LayersRegular;
export type { LayersRegularProps };
