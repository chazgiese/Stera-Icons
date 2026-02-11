import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListCheckRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListCheckRegularDuotone = memo(
  forwardRef<SVGSVGElement, ListCheckRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-check-duotone" {...props}>
      <path d="M21 17.25a.75.75 0 0 1 0 1.5H11a.75.75 0 0 1 0-1.5zM21 11.25a.75.75 0 0 1 0 1.5H11a.75.75 0 0 1 0-1.5zM21 5.25a.75.75 0 0 1 0 1.5H11a.75.75 0 0 1 0-1.5z" opacity={0.4} />
        <path d="M6.45 15.99A.75.75 0 1 1 7.55 17l-2.8 3a.75.75 0 0 1-1.16-.08l-1.2-1.71a.75.75 0 0 1 1.22-.86l.67.95zM6.45 9.99A.75.75 0 0 1 7.55 11l-2.8 3a.75.75 0 0 1-1.16-.08l-1.2-1.71a.75.75 0 0 1 1.22-.86l.67.95zM6.45 3.99A.75.75 0 0 1 7.55 5l-2.8 3a.75.75 0 0 1-1.16-.08l-1.2-1.71a.75.75 0 0 1 1.22-.86l.67.95z" />
    </IconBase>
  ))
);

ListCheckRegularDuotone.displayName = 'ListCheckRegularDuotone';

// Triple export pattern (lucide-react style)
export { ListCheckRegularDuotone, ListCheckRegularDuotone as ListCheckRegularDuotoneIcon, ListCheckRegularDuotone as SiListCheckRegularDuotone };
export default ListCheckRegularDuotone;
export type { ListCheckRegularDuotoneProps };
