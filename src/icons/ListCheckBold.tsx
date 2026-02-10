import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListCheckBoldProps = Omit<IconBaseProps, 'children'>;

const ListCheckBold = memo(
  forwardRef<SVGSVGElement, ListCheckBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-check-bold" {...props}>
      <path fill="currentColor" d="M6.27 15.82a1 1 0 0 1 1.46 1.36l-2.8 3a1 1 0 0 1-1.55-.1l-1.2-1.72a1 1 0 0 1 1.64-1.15l.5.7zM21 17a1 1 0 0 1 0 2H11a1 1 0 0 1 0-2zM6.27 9.82a1 1 0 0 1 1.46 1.36l-2.8 3a1 1 0 0 1-1.55-.1l-1.2-1.72a1 1 0 0 1 1.64-1.15l.5.7zM21 11a1 1 0 0 1 0 2H11a1 1 0 0 1 0-2zM6.27 3.82a1 1 0 0 1 1.46 1.36l-2.8 3a1 1 0 0 1-1.55-.1l-1.2-1.72A1 1 0 0 1 3.82 5.2l.5.7zM21 5a1 1 0 0 1 0 2H11a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

ListCheckBold.displayName = 'ListCheckBold';

// Triple export pattern (lucide-react style)
export { ListCheckBold, ListCheckBold as ListCheckBoldIcon, ListCheckBold as SiListCheckBold };
export default ListCheckBold;
export type { ListCheckBoldProps };
