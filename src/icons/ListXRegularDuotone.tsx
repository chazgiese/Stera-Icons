import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ListXRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListXRegularDuotone = memo(
  forwardRef<SVGSVGElement, ListXRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-x-duotone" {...props}>
      <path d="M9 15.25a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5zM9 10.25a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5zM22 5.25a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M17.5 9.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5m2.3 2.95a.75.75 0 0 0-1.06 0l-1.24 1.24-1.24-1.24a.75.75 0 0 0-1.06 1.06l1.24 1.24-1.24 1.24a.75.75 0 0 0 1.06 1.06l1.24-1.24 1.24 1.24a.75.75 0 0 0 1.06-1.06l-1.24-1.24 1.24-1.24c.3-.29.3-.77 0-1.06" clipRule="evenodd" />
    </IconBase>
  ))
);

ListXRegularDuotone.displayName = 'ListXRegularDuotone';

// Triple export pattern (lucide-react style)
export { ListXRegularDuotone, ListXRegularDuotone as ListXRegularDuotoneIcon, ListXRegularDuotone as SiListXRegularDuotone };
export type { ListXRegularDuotoneProps };
