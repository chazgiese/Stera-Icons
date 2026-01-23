import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListSimpleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListSimpleBoldDuotone = memo(
  forwardRef<SVGSVGElement, ListSimpleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-simple-bold-duotone" {...props}>
      <path d="M22 14.5a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2zM22 7.5a1 1 0 1 1 0 2H9a1 1 0 0 1 0-2z" opacity={0.4} />
        <path fill="currentColor" d="M5 13a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1zM5 6a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z" />
    </IconBase>
  ))
);

ListSimpleBoldDuotone.displayName = 'ListSimpleBoldDuotone';

// Triple export pattern (lucide-react style)
export { ListSimpleBoldDuotone, ListSimpleBoldDuotone as ListSimpleBoldDuotoneIcon, ListSimpleBoldDuotone as SiListSimpleBoldDuotone };
export default ListSimpleBoldDuotone;
export type { ListSimpleBoldDuotoneProps };
