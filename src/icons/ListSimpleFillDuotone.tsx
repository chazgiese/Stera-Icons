import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListSimpleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListSimpleFillDuotone = memo(
  forwardRef<SVGSVGElement, ListSimpleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-simple-fill-duotone" {...props}>
      <path d="M21 14a1.5 1.5 0 0 1 0 3H10a1.5 1.5 0 0 1 0-3zM21 7a1.5 1.5 0 0 1 0 3H10a1.5 1.5 0 1 1 0-3z" opacity={0.4} />
        <path fill="currentColor" d="M6 13a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1zM6 6a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z" />
    </IconBase>
  ))
);

ListSimpleFillDuotone.displayName = 'ListSimpleFillDuotone';

// Triple export pattern (lucide-react style)
export { ListSimpleFillDuotone, ListSimpleFillDuotone as ListSimpleFillDuotoneIcon, ListSimpleFillDuotone as SiListSimpleFillDuotone };
export default ListSimpleFillDuotone;
export type { ListSimpleFillDuotoneProps };
