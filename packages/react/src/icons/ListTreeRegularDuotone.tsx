import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ListTreeRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListTreeRegularDuotone = memo(
  forwardRef<SVGSVGElement, ListTreeRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M3 4.25c.41 0 .75.34.75.75v4c0 1.24 1 2.25 2.25 2.25h2a.75.75 0 0 1 0 1.5H6c-.84 0-1.62-.28-2.25-.75v4c0 1.24 1 2.25 2.25 2.25h2a.75.75 0 0 1 0 1.5H6A3.75 3.75 0 0 1 2.25 16V5c0-.41.34-.75.75-.75" opacity={.4} />
        <path fill="currentColor" d="M21 18.25a.75.75 0 0 1 0 1.5h-8a.75.75 0 0 1 0-1.5zM21 11.25a.75.75 0 0 1 0 1.5h-8a.75.75 0 0 1 0-1.5zM21 4.25a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

ListTreeRegularDuotone.displayName = 'ListTreeRegularDuotone';

export { ListTreeRegularDuotone };
export type { ListTreeRegularDuotoneProps };
