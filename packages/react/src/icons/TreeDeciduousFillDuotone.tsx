import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TreeDeciduousFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TreeDeciduousFillDuotone = memo(
  forwardRef<SVGSVGElement, TreeDeciduousFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 1.25a3.75 3.75 0 0 1 3.67 3 4.25 4.25 0 0 1 3.13 6.92 4.74 4.74 0 0 1-2.8 8.58H8a4.75 4.75 0 0 1-2.8-8.58 4.23 4.23 0 0 1 3.12-6.92c.35-1.71 1.86-3 3.68-3" opacity={.4} />
        <path fill="currentColor" d="M13 22a1 1 0 1 1-2 0v-2.25h2z" />
    </IconBase>
  ))
);

TreeDeciduousFillDuotone.displayName = 'TreeDeciduousFillDuotone';

export { TreeDeciduousFillDuotone };
export type { TreeDeciduousFillDuotoneProps };
