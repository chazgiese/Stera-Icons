import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LayersBoldProps = Omit<IconBaseProps, 'children'>;

const LayersBold = memo(
  forwardRef<SVGSVGElement, LayersBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M9.76 2.5a5 5 0 0 1 4.48 0l6.87 3.43a1.75 1.75 0 0 1 0 3.13l-1.37.69 1.37.69a1.75 1.75 0 0 1 0 3.12l-1.37.69 1.37.69a1.75 1.75 0 0 1 0 3.12l-6.87 3.44a5 5 0 0 1-4.48 0L2.9 18.06a1.75 1.75 0 0 1 0-3.12l1.37-.7-1.37-.68a1.75 1.75 0 0 1 0-3.12l1.37-.7-1.37-.68a1.75 1.75 0 0 1 0-3.13zM14.24 17a5 5 0 0 1-4.48 0L6.5 15.37 4.23 16.5l6.43 3.21a3 3 0 0 0 2.68 0l6.42-3.21-2.26-1.13zm0-4.5a5 5 0 0 1-4.48 0L6.5 10.87 4.24 12l6.42 3.21a3 3 0 0 0 2.68 0L19.76 12l-2.26-1.13zm-.9-8.21a3 3 0 0 0-2.68 0l-6.42 3.2 6.42 3.22a3 3 0 0 0 .9.28 5 5 0 0 1 .88 0 3 3 0 0 0 .9-.28l6.42-3.21z" clipRule="evenodd" />
    </IconBase>
  ))
);

LayersBold.displayName = 'LayersBold';

// Triple export pattern (lucide-react style)
export { LayersBold, LayersBold as LayersBoldIcon, LayersBold as SiLayersBold };
export type { LayersBoldProps };
