import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListBoldDuotone = memo(
  forwardRef<SVGSVGElement, ListBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-bold-duotone" {...props}>
      <path d="M20 17a1 1 0 1 1 0 2H10a1 1 0 1 1 0-2zM20 11a1 1 0 0 1 0 2H10a1 1 0 1 1 0-2zM20 5a1 1 0 1 1 0 2H10a1 1 0 0 1 0-2z" opacity={0.4} />
        <path fill="currentColor" d="M6 16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zM6 10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zM6 4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" />
    </IconBase>
  ))
);

ListBoldDuotone.displayName = 'ListBoldDuotone';

// Triple export pattern (lucide-react style)
export { ListBoldDuotone, ListBoldDuotone as ListBoldDuotoneIcon, ListBoldDuotone as SiListBoldDuotone };
export default ListBoldDuotone;
export type { ListBoldDuotoneProps };
