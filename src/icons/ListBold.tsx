import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListBoldProps = Omit<IconBaseProps, 'children'>;

const ListBold = memo(
  forwardRef<SVGSVGElement, ListBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-bold" {...props}>
      <path d="M6 16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zM20 17a1 1 0 1 1 0 2H10a1 1 0 1 1 0-2zM6 10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zM20 11a1 1 0 0 1 0 2H10a1 1 0 1 1 0-2zM6 4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zM20 5a1 1 0 1 1 0 2H10a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

ListBold.displayName = 'ListBold';

// Triple export pattern (lucide-react style)
export { ListBold, ListBold as ListBoldIcon, ListBold as SiListBold };
export default ListBold;
export type { ListBoldProps };
