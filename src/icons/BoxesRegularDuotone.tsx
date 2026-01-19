import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BoxesRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BoxesRegularDuotone = memo(
  forwardRef<SVGSVGElement, BoxesRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="boxes-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M22.37 12.78c.24.13.38.38.38.65v5.71c0 .27-.14.52-.38.65l-5 2.86a.8.8 0 0 1-.74 0L12 20.01l-4.63 2.64a.8.8 0 0 1-.74 0l-5-2.86a.8.8 0 0 1-.38-.65v-5.71c0-.27.14-.52.38-.65l4.62-2.64v.43c0 .27.14.52.38.65l.37.21-3.49 2 3.49 2 3.49-2-1.51-.87 2.65 1.52c.23.13.51.13.74 0l1.14-.65 3.49 2 3.49-2-3.49-2 .37-.2a.8.8 0 0 0 .38-.66v-.43zM2.75 18.7l3.5 2v-3.99l-3.5-2zm5-1.99v3.99l3.5-2v-3.99zm5 1.99 3.5 2v-3.99l-3.5-2zm5-1.99v3.99l3.5-2v-3.99z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M11.72 1.3a.8.8 0 0 1 .65.05l5 2.86c.24.13.38.38.38.65v5.71c0 .27-.14.52-.38.65l-5 2.86a.8.8 0 0 1-.74 0l-5-2.86a.8.8 0 0 1-.38-.65V4.86c0-.27.14-.52.38-.65l5-2.86zm-3.97 8.84 3.5 2v-4l-3.5-2zm5-2v4l3.5-2v-4zM8.51 4.87l3.49 2 3.49-2-3.49-2z" clipRule="evenodd" />
    </IconBase>
  ))
);

BoxesRegularDuotone.displayName = 'BoxesRegularDuotone';

// Triple export pattern (lucide-react style)
export { BoxesRegularDuotone, BoxesRegularDuotone as BoxesRegularDuotoneIcon, BoxesRegularDuotone as SiBoxesRegularDuotone };
export default BoxesRegularDuotone;
export type { BoxesRegularDuotoneProps };
