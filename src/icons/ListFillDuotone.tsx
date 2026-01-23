import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListFillDuotone = memo(
  forwardRef<SVGSVGElement, ListFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-fill-duotone" {...props}>
      <path d="M21.5 16.5a1.5 1.5 0 0 1 0 3h-13a1.5 1.5 0 0 1 0-3zM21.5 10.5a1.5 1.5 0 0 1 0 3h-13a1.5 1.5 0 0 1 0-3zM21.5 4.5a1.5 1.5 0 0 1 0 3h-13a1.5 1.5 0 1 1 0-3z" opacity={0.4} />
        <path fill="currentColor" d="M4.1 16c.5.06.9.48.9 1v2.1a1 1 0 0 1-1 .9H2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2.1M4.1 10c.5.06.9.48.9 1v2.1a1 1 0 0 1-1 .9H2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2.1M4.1 4c.5.06.9.48.9 1v2.1A1 1 0 0 1 4 8H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h2.1" />
    </IconBase>
  ))
);

ListFillDuotone.displayName = 'ListFillDuotone';

// Triple export pattern (lucide-react style)
export { ListFillDuotone, ListFillDuotone as ListFillDuotoneIcon, ListFillDuotone as SiListFillDuotone };
export default ListFillDuotone;
export type { ListFillDuotoneProps };
