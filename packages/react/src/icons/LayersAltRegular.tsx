import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LayersAltRegularProps = Omit<IconBaseProps, 'children'>;

const LayersAltRegular = memo(
  forwardRef<SVGSVGElement, LayersAltRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M20.67 15.83a.75.75 0 0 1 .67 1.34l-7.22 3.6a4.8 4.8 0 0 1-4.24 0l-7.21-3.6a.75.75 0 0 1 .67-1.34l7.2 3.6c.92.46 2 .46 2.91 0z" />
        <path fill="currentColor" d="M20.67 11.83a.75.75 0 0 1 .67 1.34l-7.22 3.6a4.8 4.8 0 0 1-4.24 0l-7.21-3.6a.75.75 0 0 1 .67-1.34l7.2 3.6c.92.46 2 .46 2.91 0z" />
        <path fill="currentColor" fillRule="evenodd" d="M9.88 3.22a4.8 4.8 0 0 1 4.24 0L21 6.66a1.5 1.5 0 0 1 0 2.68l-6.87 3.44a4.8 4.8 0 0 1-4.24 0L3 9.34a1.5 1.5 0 0 1 0-2.68zm3.57 1.35c-.91-.46-1.99-.46-2.9 0L3.68 8l6.87 3.43c.91.46 1.99.46 2.9 0L20.32 8z" clipRule="evenodd" />
    </IconBase>
  ))
);

LayersAltRegular.displayName = 'LayersAltRegular';

export { LayersAltRegular };
export type { LayersAltRegularProps };
