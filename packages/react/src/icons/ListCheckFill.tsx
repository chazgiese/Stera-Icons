import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ListCheckFillProps = Omit<IconBaseProps, 'children'>;

const ListCheckFill = memo(
  forwardRef<SVGSVGElement, ListCheckFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M5.09 15.65a1.25 1.25 0 0 1 1.82 1.7l-2.8 3a1.25 1.25 0 0 1-1.93-.13L.98 18.5a1.25 1.25 0 0 1 2.04-1.43l.32.45zM22 16.5a1.5 1.5 0 1 1 0 3H11a1.5 1.5 0 0 1 0-3zM5.09 9.65a1.25 1.25 0 0 1 1.82 1.7l-2.8 3a1.25 1.25 0 0 1-1.93-.13L.98 12.5a1.25 1.25 0 0 1 2.04-1.43l.32.45zM22 10.5a1.5 1.5 0 1 1 0 3H11a1.5 1.5 0 0 1 0-3zM5.09 3.65a1.25 1.25 0 0 1 1.82 1.7l-2.8 3a1.25 1.25 0 0 1-1.93-.13L.98 6.5a1.25 1.25 0 0 1 2.04-1.43l.32.45zM22 4.5a1.5 1.5 0 1 1 0 3H11a1.5 1.5 0 0 1 0-3z" />
    </IconBase>
  ))
);

ListCheckFill.displayName = 'ListCheckFill';

// Triple export pattern (lucide-react style)
export { ListCheckFill, ListCheckFill as ListCheckFillIcon, ListCheckFill as SiListCheckFill };
export type { ListCheckFillProps };
