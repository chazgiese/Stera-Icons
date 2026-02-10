import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListFillProps = Omit<IconBaseProps, 'children'>;

const ListFill = memo(
  forwardRef<SVGSVGElement, ListFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-fill" {...props}>
      <path fill="currentColor" d="M6 16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zM20 16.5a1.5 1.5 0 0 1 0 3H10a1.5 1.5 0 0 1 0-3zM6 10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zM20 10.5a1.5 1.5 0 0 1 0 3H10a1.5 1.5 0 0 1 0-3zM6 4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zM20 4.5a1.5 1.5 0 0 1 0 3H10a1.5 1.5 0 1 1 0-3z" />
    </IconBase>
  ))
);

ListFill.displayName = 'ListFill';

// Triple export pattern (lucide-react style)
export { ListFill, ListFill as ListFillIcon, ListFill as SiListFill };
export default ListFill;
export type { ListFillProps };
