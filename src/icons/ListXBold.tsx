import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListXBoldProps = Omit<IconBaseProps, 'children'>;

const ListXBold = memo(
  forwardRef<SVGSVGElement, ListXBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-x-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M17.5 9a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m2.4 3.1a.9.9 0 0 0-1.27 0l-1.13 1.13-1.13-1.13a.9.9 0 0 0-1.27 1.27l1.13 1.13-1.13 1.13a.9.9 0 0 0 1.27 1.27l1.13-1.13 1.13 1.13a.9.9 0 0 0 1.27-1.27l-1.13-1.13 1.13-1.13a.9.9 0 0 0 0-1.27" clipRule="evenodd" />
        <path fill="currentColor" d="M9 15a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2zM9 10a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2zM22 5a1 1 0 1 1 0 2H2a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

ListXBold.displayName = 'ListXBold';

// Triple export pattern (lucide-react style)
export { ListXBold, ListXBold as ListXBoldIcon, ListXBold as SiListXBold };
export default ListXBold;
export type { ListXBoldProps };
