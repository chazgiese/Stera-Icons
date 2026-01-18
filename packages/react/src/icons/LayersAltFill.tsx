import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LayersAltFillProps = Omit<IconBaseProps, 'children'>;

const LayersAltFill = memo(
  forwardRef<SVGSVGElement, LayersAltFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M20.55 15.6a1 1 0 0 1 .9 1.8L14.24 21a5 5 0 0 1-4.48 0l-7.2-3.6a1 1 0 0 1 .89-1.8l7.2 3.61a3 3 0 0 0 2.7 0z" />
        <path fill="currentColor" d="M20.55 11.6a1 1 0 0 1 .9 1.8L14.24 17a5 5 0 0 1-4.48 0l-7.2-3.6a1 1 0 0 1 .89-1.8l7.2 3.61a3 3 0 0 0 2.7 0z" />
        <path fill="currentColor" d="M9.76 3a5 5 0 0 1 4.48 0l6.87 3.44a1.75 1.75 0 0 1 0 3.13L14.24 13a5 5 0 0 1-4.48 0L2.9 9.57a1.75 1.75 0 0 1 0-3.13z" />
    </IconBase>
  ))
);

LayersAltFill.displayName = 'LayersAltFill';

export { LayersAltFill };
export type { LayersAltFillProps };
