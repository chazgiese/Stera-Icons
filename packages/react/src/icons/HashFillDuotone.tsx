import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type HashFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const HashFillDuotone = memo(
  forwardRef<SVGSVGElement, HashFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.5 20.5a1.5 1.5 0 0 1-3 0v-4h3zM16.5 20.5a1.5 1.5 0 0 1-3 0v-4h3zM10.5 13.5h-3v-3h3zM16.5 13.5h-3v-3h3zM9 2c.83 0 1.5.67 1.5 1.5v4h-3v-4C7.5 2.67 8.17 2 9 2M15 2c.83 0 1.5.67 1.5 1.5v4h-3v-4c0-.83.67-1.5 1.5-1.5" />
        <path fill="currentColor" d="M20.5 13.5a1.5 1.5 0 0 1 0 3h-17a1.5 1.5 0 0 1 0-3zM20.5 7.5a1.5 1.5 0 0 1 0 3h-17a1.5 1.5 0 0 1 0-3z" />
    </IconBase>
  ))
);

HashFillDuotone.displayName = 'HashFillDuotone';

export { HashFillDuotone };
export type { HashFillDuotoneProps };
