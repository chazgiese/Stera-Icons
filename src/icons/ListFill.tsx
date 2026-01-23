import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListFillProps = Omit<IconBaseProps, 'children'>;

const ListFill = memo(
  forwardRef<SVGSVGElement, ListFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-fill" {...props}>
      <path fill="currentColor" d="M4.1 16c.5.06.9.48.9 1v2.1a1 1 0 0 1-1 .9H2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2.1M21.5 16.5a1.5 1.5 0 0 1 0 3h-13a1.5 1.5 0 0 1 0-3zM4.1 10c.5.06.9.48.9 1v2.1a1 1 0 0 1-1 .9H2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2.1M21.5 10.5a1.5 1.5 0 0 1 0 3h-13a1.5 1.5 0 0 1 0-3zM4.1 4c.5.06.9.48.9 1v2.1A1 1 0 0 1 4 8H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h2.1M21.5 4.5a1.5 1.5 0 0 1 0 3h-13a1.5 1.5 0 1 1 0-3z" />
    </IconBase>
  ))
);

ListFill.displayName = 'ListFill';

// Triple export pattern (lucide-react style)
export { ListFill, ListFill as ListFillIcon, ListFill as SiListFill };
export default ListFill;
export type { ListFillProps };
