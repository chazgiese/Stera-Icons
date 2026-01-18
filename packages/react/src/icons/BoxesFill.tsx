import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BoxesFillProps = Omit<IconBaseProps, 'children'>;

const BoxesFill = memo(
  forwardRef<SVGSVGElement, BoxesFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M11.72 1.3a.8.8 0 0 1 .65.05l5 2.86c.24.13.38.38.38.65v5.28l4.62 2.64c.24.13.38.38.38.65v5.71c0 .27-.14.52-.38.65l-5 2.86-.18.07-.04.01a.8.8 0 0 1-.52-.08L12 20.01l-4.62 2.63-.19.08h-.02a.8.8 0 0 1-.54-.07l-5-2.86a.8.8 0 0 1-.38-.65v-5.71q0-.18.08-.33v-.02l.09-.13.03-.03.03-.03.04-.03.1-.08 4.63-2.64V4.86c0-.27.14-.52.38-.65l5-2.86zM7.75 16.73v3.99l3.5-2v-3.99zm10 0v3.99l3.5-2v-3.99zm-14.24-3.3 3.49 2 3.49-2-3.5-1.99zm10 0 3.49 2 3.49-2L17 11.44zm-.76-5.27v3.99l3.5-2v-4zm-4.24-3.3 3.49 2 3.49-2L12 2.87z" clipRule="evenodd" />
    </IconBase>
  ))
);

BoxesFill.displayName = 'BoxesFill';

export { BoxesFill };
export type { BoxesFillProps };
