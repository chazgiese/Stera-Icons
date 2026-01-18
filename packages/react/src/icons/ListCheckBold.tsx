import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ListCheckBoldProps = Omit<IconBaseProps, 'children'>;

const ListCheckBold = memo(
  forwardRef<SVGSVGElement, ListCheckBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M5.27 15.82a1 1 0 0 1 1.46 1.36l-2.8 3a1 1 0 0 1-1.55-.1l-1.2-1.72a1 1 0 0 1 1.64-1.15l.5.7zM22 17a1 1 0 0 1 0 2H10a1 1 0 0 1 0-2zM5.27 9.82a1 1 0 0 1 1.46 1.36l-2.8 3a1 1 0 0 1-1.55-.1l-1.2-1.72a1 1 0 0 1 1.64-1.15l.5.7zM22 11a1 1 0 0 1 0 2H10a1 1 0 0 1 0-2zM5.27 3.82a1 1 0 0 1 1.46 1.36l-2.8 3a1 1 0 0 1-1.55-.1l-1.2-1.72A1 1 0 0 1 2.82 5.2l.5.7zM22 5a1 1 0 0 1 0 2H10a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

ListCheckBold.displayName = 'ListCheckBold';

// Triple export pattern (lucide-react style)
export { ListCheckBold, ListCheckBold as ListCheckBoldIcon, ListCheckBold as SiListCheckBold };
export type { ListCheckBoldProps };
