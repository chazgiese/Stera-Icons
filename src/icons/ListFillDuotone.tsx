import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListFillDuotone = memo(
  forwardRef<SVGSVGElement, ListFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-fill-duotone" {...props}>
      <path d="M20 16.5a1.5 1.5 0 0 1 0 3H10a1.5 1.5 0 0 1 0-3zM20 10.5a1.5 1.5 0 0 1 0 3H10a1.5 1.5 0 0 1 0-3zM20 4.5a1.5 1.5 0 0 1 0 3H10a1.5 1.5 0 1 1 0-3z" opacity={0.4} />
        <path d="M6 16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zM6 10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zM6 4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" />
    </IconBase>
  ))
);

ListFillDuotone.displayName = 'ListFillDuotone';

// Triple export pattern (lucide-react style)
export { ListFillDuotone, ListFillDuotone as ListFillDuotoneIcon, ListFillDuotone as SiListFillDuotone };
export default ListFillDuotone;
export type { ListFillDuotoneProps };
