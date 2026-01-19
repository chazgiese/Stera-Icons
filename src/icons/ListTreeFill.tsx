import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ListTreeFillProps = Omit<IconBaseProps, 'children'>;

const ListTreeFill = memo(
  forwardRef<SVGSVGElement, ListTreeFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-tree-fill" {...props}>
      <path fill="currentColor" d="M3 3.5c.83 0 1.5.67 1.5 1.5v4c0 .83.67 1.5 1.5 1.5h2a1.5 1.5 0 0 1 0 3H6a5 5 0 0 1-1.5-.26V16c0 .83.67 1.5 1.5 1.5h2a1.5 1.5 0 0 1 0 3H6A4.5 4.5 0 0 1 1.5 16V5c0-.83.67-1.5 1.5-1.5M21 17.5a1.5 1.5 0 0 1 0 3h-8a1.5 1.5 0 0 1 0-3zM21 10.5a1.5 1.5 0 0 1 0 3h-8a1.5 1.5 0 0 1 0-3zM21 3.5a1.5 1.5 0 0 1 0 3H8a1.5 1.5 0 1 1 0-3z" />
    </IconBase>
  ))
);

ListTreeFill.displayName = 'ListTreeFill';

// Triple export pattern (lucide-react style)
export { ListTreeFill, ListTreeFill as ListTreeFillIcon, ListTreeFill as SiListTreeFill };
export default ListTreeFill;
export type { ListTreeFillProps };
