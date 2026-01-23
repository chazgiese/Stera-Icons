import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BoxesBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BoxesBoldDuotone = memo(
  forwardRef<SVGSVGElement, BoxesBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="boxes-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M22.5 12.56a1 1 0 0 1 .5.87v5.71a1 1 0 0 1-.5.87l-5 2.86a1 1 0 0 1-1 0L12 20.29l-4.5 2.58a1 1 0 0 1-1 0L1.5 20a1 1 0 0 1-.5-.87v-5.71a1 1 0 0 1 .5-.87L6 9.99v.58c0 .36.2.7.5.87l.5.28L4 13.42 7 15.14l2.98-1.7 1.52.87a1 1 0 0 0 1 0l1.52-.87 2.98 1.7 2.98-1.7-2.98-1.7.5-.29a1 1 0 0 0 .5-.87V10zm-19.5 6 3 1.72v-3.41l-3-1.72zm5-1.7v3.42l3-1.72v-3.4zm5 1.7 3 1.72v-3.41l-3-1.72zm5-1.7v3.42l3-1.72v-3.4z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M11.62 1.07a1 1 0 0 1 .88.06l5 2.86c.3.18.5.5.5.87v5.71a1 1 0 0 1-.5.87l-5 2.86a1 1 0 0 1-1 0l-5-2.86a1 1 0 0 1-.5-.87V4.86a1 1 0 0 1 .5-.87l5-2.86zM8 10l3 1.72V8.29L8 6.58zm5-1.7v3.42l3-1.72V6.58zM9.01 4.86 12 6.56l2.98-1.7L12 3.16z" clipRule="evenodd" />
    </IconBase>
  ))
);

BoxesBoldDuotone.displayName = 'BoxesBoldDuotone';

// Triple export pattern (lucide-react style)
export { BoxesBoldDuotone, BoxesBoldDuotone as BoxesBoldDuotoneIcon, BoxesBoldDuotone as SiBoxesBoldDuotone };
export default BoxesBoldDuotone;
export type { BoxesBoldDuotoneProps };
