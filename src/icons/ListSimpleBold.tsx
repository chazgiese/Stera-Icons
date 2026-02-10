import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListSimpleBoldProps = Omit<IconBaseProps, 'children'>;

const ListSimpleBold = memo(
  forwardRef<SVGSVGElement, ListSimpleBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-simple-bold" {...props}>
      <path fill="currentColor" d="M6 13a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1zM21 14.5a1 1 0 1 1 0 2H10a1 1 0 1 1 0-2zM6 6a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zM21 7.5a1 1 0 1 1 0 2H10a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

ListSimpleBold.displayName = 'ListSimpleBold';

// Triple export pattern (lucide-react style)
export { ListSimpleBold, ListSimpleBold as ListSimpleBoldIcon, ListSimpleBold as SiListSimpleBold };
export default ListSimpleBold;
export type { ListSimpleBoldProps };
