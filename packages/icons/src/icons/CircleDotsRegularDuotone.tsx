import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDotsRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleDotsRegularDuotone = memo(
  forwardRef<SVGSVGElement, CircleDotsRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.22 17.65c.58-.58 1.53-.58 2.12 0v.01c.6.59.6 1.54 0 2.12-.58.59-1.53.59-2.11 0h-.01c-.59-.6-.59-1.54 0-2.13M17.66 17.65c.59-.58 1.54-.58 2.12 0 .59.59.59 1.54 0 2.12v.01c-.6.59-1.54.59-2.13 0-.58-.58-.58-1.53 0-2.12zM4.23 4.22c.58-.59 1.53-.59 2.12 0 .58.58.58 1.53 0 2.12h-.01c-.59.6-1.54.6-2.12 0-.59-.58-.59-1.53 0-2.11zM17.65 4.22c.59-.59 1.54-.59 2.12 0h.01c.59.6.59 1.54 0 2.13-.58.58-1.53.58-2.12 0v-.01c-.6-.59-.6-1.54 0-2.12" opacity={0.4} />
        <path d="M12 20c.83 0 1.5.67 1.5 1.5S12.83 23 12 23s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M2.5 10.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S1 12.83 1 12s.67-1.5 1.5-1.5M21.5 10.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5c-.78 0-1.42-.59-1.5-1.34V12c0-.83.67-1.5 1.5-1.5M12 1c.83 0 1.5.67 1.5 1.5S12.83 4 12 4s-1.5-.67-1.5-1.5S11.17 1 12 1" />
    </IconBase>
  ))
);

CircleDotsRegularDuotone.displayName = 'CircleDotsRegularDuotone';

// Triple export pattern
export { CircleDotsRegularDuotone, CircleDotsRegularDuotone as CircleDotsRegularDuotoneIcon, CircleDotsRegularDuotone as SiCircleDotsRegularDuotone };
export default CircleDotsRegularDuotone;
export type { CircleDotsRegularDuotoneProps };
