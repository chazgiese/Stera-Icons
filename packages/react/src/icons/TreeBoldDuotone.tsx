import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TreeBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TreeBoldDuotone = memo(
  forwardRef<SVGSVGElement, TreeBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M13 22a1 1 0 1 1-2 0v-2h2z" />
        <path fill="currentColor" fillRule="evenodd" d="M12.04 1h.06l.04.01.15.03.04.01.03.01.04.02.02.01.04.02.14.1h.02l.16.16v.01l4.45 5.67a1 1 0 0 1-.79 1.62h-.6L19 12.72a1 1 0 0 1-.79 1.61h-.6l2.53 3.24A1.5 1.5 0 0 1 18.97 20H5.03a1.5 1.5 0 0 1-1.18-2.43l2.54-3.24h-.61a1 1 0 0 1-.79-1.61l3.18-4.05h-.61a1 1 0 0 1-.8-1.62l4.45-5.67.03-.03.01-.02.04-.04.03-.03.05-.04h.01l.08-.06.02-.02a1 1 0 0 1 .3-.11h.02l.06-.02h.1l.02-.01h.06M9.61 6.67h.61a1 1 0 0 1 .79 1.61l-3.18 4.05h.61a1 1 0 0 1 .8 1.62L6.04 18h11.9l-3.18-4.05a1 1 0 0 1 .79-1.62h.6L13 8.28a1 1 0 0 1 .79-1.61h.6L12 3.62z" clipRule="evenodd" opacity={.4} />
    </IconBase>
  ))
);

TreeBoldDuotone.displayName = 'TreeBoldDuotone';

export { TreeBoldDuotone };
export type { TreeBoldDuotoneProps };
