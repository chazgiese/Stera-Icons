import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ListTreeBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListTreeBoldDuotone = memo(
  forwardRef<SVGSVGElement, ListTreeBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-tree-bold-duotone" {...props}>
      <path fill="currentColor" d="M3 4a1 1 0 0 1 1 1v4c0 1.1.9 2 2 2h2a1 1 0 1 1 0 2H6q-1.1-.01-2-.54V16c0 1.1.9 2 2 2h2a1 1 0 1 1 0 2H6a4 4 0 0 1-4-4V5a1 1 0 0 1 1-1" opacity={.4} />
        <path fill="currentColor" d="M21 18a1 1 0 1 1 0 2h-8a1 1 0 1 1 0-2zM21 11a1 1 0 1 1 0 2h-8a1 1 0 1 1 0-2zM21 4a1 1 0 1 1 0 2H8a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

ListTreeBoldDuotone.displayName = 'ListTreeBoldDuotone';

// Triple export pattern (lucide-react style)
export { ListTreeBoldDuotone, ListTreeBoldDuotone as ListTreeBoldDuotoneIcon, ListTreeBoldDuotone as SiListTreeBoldDuotone };
export type { ListTreeBoldDuotoneProps };
