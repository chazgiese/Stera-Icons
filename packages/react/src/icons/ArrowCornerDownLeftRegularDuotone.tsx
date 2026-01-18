import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowCornerDownLeftRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerDownLeftRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCornerDownLeftRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M7.47 9.47a.75.75 0 1 1 1.06 1.06L4.06 15l4.47 4.47a.75.75 0 1 1-1.06 1.06l-5-5-.1-.11a.75.75 0 0 1 .1-.95z" />
        <path fill="currentColor" d="M21 3.25c.41 0 .75.34.75.75v8A3.75 3.75 0 0 1 18 15.75H4.81L4.06 15l.75-.75H18c1.24 0 2.25-1 2.25-2.25V4c0-.41.34-.75.75-.75" opacity={.4} />
    </IconBase>
  ))
);

ArrowCornerDownLeftRegularDuotone.displayName = 'ArrowCornerDownLeftRegularDuotone';

export { ArrowCornerDownLeftRegularDuotone };
export type { ArrowCornerDownLeftRegularDuotoneProps };
