import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ListPlusRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListPlusRegularDuotone = memo(
  forwardRef<SVGSVGElement, ListPlusRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9 15.25a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5zM9 10.25a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5zM22 5.25a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5z" />
        <path fill="currentColor" fillRule="evenodd" d="M17.5 9.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5m0 2a.75.75 0 0 0-.75.75v1.75H15a.75.75 0 0 0 0 1.5h1.75V17a.75.75 0 0 0 1.5 0v-1.75H20a.75.75 0 0 0 0-1.5h-1.75V12a.75.75 0 0 0-.75-.75" clipRule="evenodd" />
    </IconBase>
  ))
);

ListPlusRegularDuotone.displayName = 'ListPlusRegularDuotone';

export { ListPlusRegularDuotone };
export type { ListPlusRegularDuotoneProps };
