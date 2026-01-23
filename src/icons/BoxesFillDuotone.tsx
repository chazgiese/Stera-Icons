import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BoxesFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BoxesFillDuotone = memo(
  forwardRef<SVGSVGElement, BoxesFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="boxes-fill-duotone" {...props}>
      <path d="M6.25 16.72v3.99l-3.5-2v-3.99zM16.25 16.72v3.99l-3.5-2v-3.99zM11.25 8.15v3.99l-3.5-2v-4zM17.38 22.65" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M11.72 1.3a.8.8 0 0 1 .65.05l5 2.86c.24.13.38.38.38.65v5.28l4.62 2.64c.24.13.38.38.38.65v5.71c0 .27-.14.52-.38.65l-5 2.86a.8.8 0 0 1-.74 0L12 20.01l-4.63 2.64a.8.8 0 0 1-.74 0l-5-2.86a.8.8 0 0 1-.38-.65v-5.71c0-.27.14-.52.38-.65l4.62-2.64V4.86c0-.27.14-.52.38-.65l5-2.86zM2.75 18.7l3.5 2v-3.98l-3.5-2zm5-1.98v3.99l3.5-2v-3.99zm5 1.99 3.5 2v-3.99l-3.5-2zm5-1.99v3.99l3.5-2v-3.99zm-14.24-3.3 3.49 2 3.49-2L7 11.44zm10 0 3.49 2 3.49-2L17 11.44zm-5.76-3.28 3.5 2v-4l-3.5-2zm5-2v4l3.5-2v-4zM8.51 4.87l3.49 2 3.49-2-3.49-2z" clipRule="evenodd" />
    </IconBase>
  ))
);

BoxesFillDuotone.displayName = 'BoxesFillDuotone';

// Triple export pattern (lucide-react style)
export { BoxesFillDuotone, BoxesFillDuotone as BoxesFillDuotoneIcon, BoxesFillDuotone as SiBoxesFillDuotone };
export default BoxesFillDuotone;
export type { BoxesFillDuotoneProps };
