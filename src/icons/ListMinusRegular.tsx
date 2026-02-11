import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListMinusRegularProps = Omit<IconBaseProps, 'children'>;

const ListMinusRegular = memo(
  forwardRef<SVGSVGElement, ListMinusRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-minus" {...props}>
      <path fillRule="evenodd" d="M17.5 9.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5m-2.5 4.5a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z" clipRule="evenodd" />
        <path d="M9 15.25a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5zM9 10.25a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5zM22 5.25a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

ListMinusRegular.displayName = 'ListMinusRegular';

// Triple export pattern (lucide-react style)
export { ListMinusRegular, ListMinusRegular as ListMinusRegularIcon, ListMinusRegular as SiListMinusRegular };
export default ListMinusRegular;
export type { ListMinusRegularProps };
