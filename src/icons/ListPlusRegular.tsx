import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListPlusRegularProps = Omit<IconBaseProps, 'children'>;

const ListPlusRegular = memo(
  forwardRef<SVGSVGElement, ListPlusRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-plus" {...props}>
      <path fillRule="evenodd" d="M17.5 9.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5m0 2a.75.75 0 0 0-.75.75v1.75H15a.75.75 0 0 0 0 1.5h1.75V17a.75.75 0 0 0 1.5 0v-1.75H20a.75.75 0 0 0 0-1.5h-1.75V12a.75.75 0 0 0-.75-.75" clipRule="evenodd" />
        <path d="M9 15.25a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5zM9 10.25a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5zM22 5.25a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

ListPlusRegular.displayName = 'ListPlusRegular';

// Triple export pattern (lucide-react style)
export { ListPlusRegular, ListPlusRegular as ListPlusRegularIcon, ListPlusRegular as SiListPlusRegular };
export default ListPlusRegular;
export type { ListPlusRegularProps };
