import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListSimpleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListSimpleRegularDuotone = memo(
  forwardRef<SVGSVGElement, ListSimpleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-simple-duotone" {...props}>
      <path d="M21 14.75a.75.75 0 0 1 0 1.5H10a.75.75 0 0 1 0-1.5zM21 7.75a.75.75 0 0 1 0 1.5H10a.75.75 0 0 1 0-1.5z" opacity={0.4} />
        <path d="M6 13.25c.41 0 .75.34.75.75v3c0 .41-.34.75-.75.75H3a.75.75 0 0 1-.75-.75v-3c0-.41.34-.75.75-.75zM6 6.25c.41 0 .75.34.75.75v3c0 .41-.34.75-.75.75H3a.75.75 0 0 1-.75-.75V7c0-.41.34-.75.75-.75z" />
    </IconBase>
  ))
);

ListSimpleRegularDuotone.displayName = 'ListSimpleRegularDuotone';

// Triple export pattern (lucide-react style)
export { ListSimpleRegularDuotone, ListSimpleRegularDuotone as ListSimpleRegularDuotoneIcon, ListSimpleRegularDuotone as SiListSimpleRegularDuotone };
export default ListSimpleRegularDuotone;
export type { ListSimpleRegularDuotoneProps };
