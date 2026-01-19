import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ListXRegularProps = Omit<IconBaseProps, 'children'>;

const ListXRegular = memo(
  forwardRef<SVGSVGElement, ListXRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-x" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M17.5 9.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5m2.3 2.95a.75.75 0 0 0-1.06 0l-1.24 1.24-1.24-1.24a.75.75 0 0 0-1.06 1.06l1.24 1.24-1.24 1.24a.75.75 0 0 0 1.06 1.06l1.24-1.24 1.24 1.24a.75.75 0 0 0 1.06-1.06l-1.24-1.24 1.24-1.24c.3-.29.3-.77 0-1.06" clipRule="evenodd" />
        <path fill="currentColor" d="M9 15.25a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5zM9 10.25a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5zM22 5.25a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

ListXRegular.displayName = 'ListXRegular';

// Triple export pattern (lucide-react style)
export { ListXRegular, ListXRegular as ListXRegularIcon, ListXRegular as SiListXRegular };
export default ListXRegular;
export type { ListXRegularProps };
