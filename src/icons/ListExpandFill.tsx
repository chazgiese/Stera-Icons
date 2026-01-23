import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListExpandFillProps = Omit<IconBaseProps, 'children'>;

const ListExpandFill = memo(
  forwardRef<SVGSVGElement, ListExpandFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-expand-fill" {...props}>
      <path fill="currentColor" d="M21 14.5a1 1 0 0 1 .7 1.7l-3 3a1 1 0 0 1-1.4 0l-3-3a1 1 0 0 1 .7-1.7zM11 17a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM11 11a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM18 4.5a1 1 0 0 1 .7.3l3 3a1 1 0 0 1-.7 1.7h-6a1 1 0 0 1-.7-1.7l3-3a1 1 0 0 1 .7-.3M11 5a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

ListExpandFill.displayName = 'ListExpandFill';

// Triple export pattern (lucide-react style)
export { ListExpandFill, ListExpandFill as ListExpandFillIcon, ListExpandFill as SiListExpandFill };
export default ListExpandFill;
export type { ListExpandFillProps };
