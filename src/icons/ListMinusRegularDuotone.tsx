import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ListMinusRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListMinusRegularDuotone = memo(
  forwardRef<SVGSVGElement, ListMinusRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-minus-duotone" {...props}>
      <path d="M9 15.25a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5zM9 10.25a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5zM22 5.25a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M17.5 9.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5m-2.5 4.5a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

ListMinusRegularDuotone.displayName = 'ListMinusRegularDuotone';

// Triple export pattern (lucide-react style)
export { ListMinusRegularDuotone, ListMinusRegularDuotone as ListMinusRegularDuotoneIcon, ListMinusRegularDuotone as SiListMinusRegularDuotone };
export default ListMinusRegularDuotone;
export type { ListMinusRegularDuotoneProps };
