import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ListBoldProps = Omit<IconBaseProps, 'children'>;

const ListBold = memo(
  forwardRef<SVGSVGElement, ListBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M4.1 16c.5.06.9.48.9 1v2.1a1 1 0 0 1-1 .9H2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2.1M22 17a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zM4.1 10c.5.06.9.48.9 1v2.1a1 1 0 0 1-1 .9H2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2.1M22 11a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zM4.1 4c.5.06.9.48.9 1v2.1A1 1 0 0 1 4 8H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h2.1M22 5a1 1 0 1 1 0 2H8a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

ListBold.displayName = 'ListBold';

// Triple export pattern (lucide-react style)
export { ListBold, ListBold as ListBoldIcon, ListBold as SiListBold };
export type { ListBoldProps };
