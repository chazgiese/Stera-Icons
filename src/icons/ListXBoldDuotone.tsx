import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ListXBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListXBoldDuotone = memo(
  forwardRef<SVGSVGElement, ListXBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-x-bold-duotone" {...props}>
      <path d="M9 15a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2zM9 10a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2zM22 5a1 1 0 1 1 0 2H2a1 1 0 0 1 0-2z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M17.5 9a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m2.4 3.1a.9.9 0 0 0-1.27 0l-1.13 1.13-1.13-1.13a.9.9 0 0 0-1.27 1.27l1.13 1.13-1.13 1.13a.9.9 0 0 0 1.27 1.27l1.13-1.13 1.13 1.13a.9.9 0 0 0 1.27-1.27l-1.13-1.13 1.13-1.13a.9.9 0 0 0 0-1.27" clipRule="evenodd" />
    </IconBase>
  ))
);

ListXBoldDuotone.displayName = 'ListXBoldDuotone';

// Triple export pattern (lucide-react style)
export { ListXBoldDuotone, ListXBoldDuotone as ListXBoldDuotoneIcon, ListXBoldDuotone as SiListXBoldDuotone };
export type { ListXBoldDuotoneProps };
