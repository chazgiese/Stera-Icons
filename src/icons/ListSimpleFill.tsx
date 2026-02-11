import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListSimpleFillProps = Omit<IconBaseProps, 'children'>;

const ListSimpleFill = memo(
  forwardRef<SVGSVGElement, ListSimpleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-simple-fill" {...props}>
      <path d="M6 13a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1zM21 14a1.5 1.5 0 0 1 0 3H10a1.5 1.5 0 0 1 0-3zM6 6a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zM21 7a1.5 1.5 0 0 1 0 3H10a1.5 1.5 0 1 1 0-3z" />
    </IconBase>
  ))
);

ListSimpleFill.displayName = 'ListSimpleFill';

// Triple export pattern (lucide-react style)
export { ListSimpleFill, ListSimpleFill as ListSimpleFillIcon, ListSimpleFill as SiListSimpleFill };
export default ListSimpleFill;
export type { ListSimpleFillProps };
