import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type RectangleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const RectangleRegularDuotone = memo(
  forwardRef<SVGSVGElement, RectangleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M18 3.25A4.75 4.75 0 0 1 22.75 8v8A4.75 4.75 0 0 1 18 20.75h-6v-1.5h6c1.8 0 3.25-1.46 3.25-3.25V8c0-1.8-1.46-3.25-3.25-3.25h-6v-1.5z" opacity={.4} />
        <path fill="currentColor" d="M12 4.75H6A3.25 3.25 0 0 0 2.75 8v8c0 1.8 1.46 3.25 3.25 3.25h6v1.5H6A4.75 4.75 0 0 1 1.25 16V8A4.75 4.75 0 0 1 6 3.25h6z" />
    </IconBase>
  ))
);

RectangleRegularDuotone.displayName = 'RectangleRegularDuotone';

export { RectangleRegularDuotone };
export type { RectangleRegularDuotoneProps };
