import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BoxesBoldProps = Omit<IconBaseProps, 'children'>;

const BoxesBold = memo(
  forwardRef<SVGSVGElement, BoxesBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M11.62 1.07a1 1 0 0 1 .88.06l5 2.86c.3.18.5.5.5.87v5.13l4.5 2.57c.3.18.5.51.5.87v5.71a1 1 0 0 1-.5.87l-5 2.86a1 1 0 0 1-1 0L12 20.29l-4.5 2.58a1 1 0 0 1-1 0L1.5 20a1 1 0 0 1-.5-.87v-5.71a1 1 0 0 1 .5-.87L6 10V4.86a1 1 0 0 1 .5-.87l5-2.86zM3 18.57l3 1.7v-3.4l-3-1.72zm5-1.7v3.4l3-1.7v-3.42zm5 1.7 3 1.7v-3.4l-3-1.72zm5-1.7v3.4l3-1.7v-3.42zM4.01 13.43 7 15.13l2.98-1.7L7 11.73zm10 0 2.99 1.7 2.98-1.7-2.98-1.7zM8 9.99l3 1.72V8.29L8 6.58zm5-1.7v3.42l3-1.72V6.58zM9.01 4.86 12 6.56l2.98-1.7L12 3.16z" clipRule="evenodd" />
    </IconBase>
  ))
);

BoxesBold.displayName = 'BoxesBold';

export { BoxesBold };
export type { BoxesBoldProps };
