import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BoxesRegularProps = Omit<IconBaseProps, 'children'>;

const BoxesRegular = memo(
  forwardRef<SVGSVGElement, BoxesRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="boxes" {...props}>
      <path fillRule="evenodd" d="M11.72 2.3a.8.8 0 0 1 .65.05l4.5 2.57c.24.13.38.38.38.65v4.7l4.12 2.36c.24.14.38.39.38.66v5.14c0 .27-.14.52-.38.65l-4.5 2.57a.8.8 0 0 1-.74 0L12 19.3l-4.13 2.36a.8.8 0 0 1-.74 0l-4.5-2.57a.8.8 0 0 1-.38-.65v-5.14c0-.27.14-.52.38-.66l4.12-2.35v-4.7c0-.28.14-.53.38-.66l4.5-2.57zM3.75 18l3 1.7v-3.4l-3-1.72zm4.5-1.7v3.4l3-1.7v-3.42zm4.5 1.7 3 1.7v-3.4l-3-1.72zm4.5-1.7v3.4l3-1.7v-3.42zM4.51 13.28l2.99 1.7 2.99-1.7-2.99-1.71zm9 0 2.99 1.7 2.99-1.7-2.99-1.71zm-5.26-3.01 3 1.71V8.58l-3-1.72zm4.5-1.7v3.41l3-1.71V6.86zm-3.74-3L12 7.27l2.99-1.7L12 3.85z" clipRule="evenodd" />
    </IconBase>
  ))
);

BoxesRegular.displayName = 'BoxesRegular';

// Triple export pattern (lucide-react style)
export { BoxesRegular, BoxesRegular as BoxesRegularIcon, BoxesRegular as SiBoxesRegular };
export default BoxesRegular;
export type { BoxesRegularProps };
