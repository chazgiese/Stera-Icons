import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TreeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TreeFillDuotone = memo(
  forwardRef<SVGSVGElement, TreeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M13 22a1 1 0 1 1-2 0v-2.25h2z" />
        <path fill="currentColor" d="M12 1.25q.36 0 .59.29l4.44 5.66a.75.75 0 0 1-.59 1.22h-1.12l3.5 4.45a.75.75 0 0 1-.6 1.21H17.1l2.86 3.65c.64.82.05 2.02-.99 2.02H5.03a1.25 1.25 0 0 1-.99-2.02l2.86-3.65H5.78a.75.75 0 0 1-.6-1.21l3.5-4.45H7.56a.75.75 0 0 1-.6-1.22l4.45-5.66.06-.07a.8.8 0 0 1 .53-.22" opacity={.4} />
    </IconBase>
  ))
);

TreeFillDuotone.displayName = 'TreeFillDuotone';

// Triple export pattern (lucide-react style)
export { TreeFillDuotone, TreeFillDuotone as TreeFillDuotoneIcon, TreeFillDuotone as SiTreeFillDuotone };
export type { TreeFillDuotoneProps };
