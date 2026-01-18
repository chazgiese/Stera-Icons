import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ListBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListBoldDuotone = memo(
  forwardRef<SVGSVGElement, ListBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M22 17a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zM22 11a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zM22 5a1 1 0 1 1 0 2H8a1 1 0 0 1 0-2z" opacity={0.4} />
        <path fill="currentColor" d="M4.1 16c.5.06.9.48.9 1v2.1a1 1 0 0 1-1 .9H2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2.1M4.1 10c.5.06.9.48.9 1v2.1a1 1 0 0 1-1 .9H2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2.1M4.1 4c.5.06.9.48.9 1v2.1A1 1 0 0 1 4 8H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h2.1" />
    </IconBase>
  ))
);

ListBoldDuotone.displayName = 'ListBoldDuotone';

// Triple export pattern (lucide-react style)
export { ListBoldDuotone, ListBoldDuotone as ListBoldDuotoneIcon, ListBoldDuotone as SiListBoldDuotone };
export type { ListBoldDuotoneProps };
