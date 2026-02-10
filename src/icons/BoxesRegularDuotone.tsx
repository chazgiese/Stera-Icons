import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BoxesRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BoxesRegularDuotone = memo(
  forwardRef<SVGSVGElement, BoxesRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="boxes-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M21.37 12.63c.24.14.38.39.38.66v5.14c0 .27-.14.52-.38.65l-4.5 2.57a.8.8 0 0 1-.74 0L12 19.29l-4.13 2.36a.8.8 0 0 1-.74 0l-4.5-2.57a.8.8 0 0 1-.38-.65v-5.14c0-.27.14-.52.38-.66l4.12-2.35v.43c0 .27.14.52.38.66l.37.2L4.5 13.3l2.99 1.7 2.99-1.7-1.51-.87 2.65 1.52c.23.13.51.13.74 0l1.14-.65 2.99 1.7 2.99-1.7-2.99-1.71.37-.21a.8.8 0 0 0 .38-.66v-.43zM3.75 18l3 1.72v-3.42l-3-1.71zm4.5-1.7v3.42l3-1.72v-3.41zm4.5 1.7 3 1.72v-3.42l-3-1.71zm4.5-1.7v3.42l3-1.72v-3.41z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M11.72 2.3a.8.8 0 0 1 .65.05l4.5 2.57c.24.13.38.38.38.65v5.14c0 .27-.14.52-.38.66l-4.5 2.57a.8.8 0 0 1-.74 0l-4.5-2.57a.8.8 0 0 1-.38-.66V5.57c0-.27.14-.52.38-.65l4.5-2.57zm-3.47 7.98 3 1.71V8.58l-3-1.72zm4.5-1.7v3.41l3-1.71V6.86zm-3.74-3L12 7.27l2.99-1.7L12 3.85z" clipRule="evenodd" />
    </IconBase>
  ))
);

BoxesRegularDuotone.displayName = 'BoxesRegularDuotone';

// Triple export pattern (lucide-react style)
export { BoxesRegularDuotone, BoxesRegularDuotone as BoxesRegularDuotoneIcon, BoxesRegularDuotone as SiBoxesRegularDuotone };
export default BoxesRegularDuotone;
export type { BoxesRegularDuotoneProps };
