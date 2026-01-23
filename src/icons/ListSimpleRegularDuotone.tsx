import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListSimpleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListSimpleRegularDuotone = memo(
  forwardRef<SVGSVGElement, ListSimpleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-simple-duotone" {...props}>
      <path d="M22 14.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5zM22 7.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5z" opacity={0.4} />
        <path fill="currentColor" d="M5 13.5c.28 0 .5.22.5.5v3a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-3c0-.28.22-.5.5-.5zM5 6.5c.28 0 .5.22.5.5v3a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7c0-.28.22-.5.5-.5z" />
    </IconBase>
  ))
);

ListSimpleRegularDuotone.displayName = 'ListSimpleRegularDuotone';

// Triple export pattern (lucide-react style)
export { ListSimpleRegularDuotone, ListSimpleRegularDuotone as ListSimpleRegularDuotoneIcon, ListSimpleRegularDuotone as SiListSimpleRegularDuotone };
export default ListSimpleRegularDuotone;
export type { ListSimpleRegularDuotoneProps };
