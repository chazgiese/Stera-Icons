import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ListTreeBoldProps = Omit<IconBaseProps, 'children'>;

const ListTreeBold = memo(
  forwardRef<SVGSVGElement, ListTreeBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-tree-bold" {...props}>
      <path fill="currentColor" d="M3 4a1 1 0 0 1 1 1v4c0 1.1.9 2 2 2h2a1 1 0 1 1 0 2H6q-1.1-.01-2-.54V16c0 1.1.9 2 2 2h2a1 1 0 1 1 0 2H6a4 4 0 0 1-4-4V5a1 1 0 0 1 1-1M21 18a1 1 0 1 1 0 2h-8a1 1 0 1 1 0-2zM21 11a1 1 0 1 1 0 2h-8a1 1 0 1 1 0-2zM21 4a1 1 0 1 1 0 2H8a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

ListTreeBold.displayName = 'ListTreeBold';

// Triple export pattern (lucide-react style)
export { ListTreeBold, ListTreeBold as ListTreeBoldIcon, ListTreeBold as SiListTreeBold };
export type { ListTreeBoldProps };
