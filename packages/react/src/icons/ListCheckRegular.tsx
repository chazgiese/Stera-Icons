import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ListCheckRegularProps = Omit<IconBaseProps, 'children'>;

const ListCheckRegular = memo(
  forwardRef<SVGSVGElement, ListCheckRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M5.45 15.99A.75.75 0 0 1 6.55 17l-2.8 3a.75.75 0 0 1-1.16-.08l-1.2-1.71a.75.75 0 0 1 1.22-.86l.67.95zM22 17.25a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5zM5.45 9.99A.75.75 0 0 1 6.55 11l-2.8 3a.75.75 0 0 1-1.16-.08l-1.2-1.71a.75.75 0 0 1 1.22-.86l.67.95zM22 11.25a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5zM5.45 3.99A.75.75 0 1 1 6.55 5l-2.8 3a.75.75 0 0 1-1.16-.08l-1.2-1.71a.75.75 0 0 1 1.22-.86l.67.95zM22 5.25a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

ListCheckRegular.displayName = 'ListCheckRegular';

export { ListCheckRegular };
export type { ListCheckRegularProps };
