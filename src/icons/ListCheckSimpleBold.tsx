import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListCheckSimpleBoldProps = Omit<IconBaseProps, 'children'>;

const ListCheckSimpleBold = memo(
  forwardRef<SVGSVGElement, ListCheckSimpleBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-check-simple-bold" {...props}>
      <path d="M8.31 12.78a1 1 0 0 1 1.38 1.44l-4.2 4a1 1 0 0 1-1.48-.1l-1.8-2.29A1 1 0 1 1 3.8 14.6l1.12 1.42zM21 14.5a1 1 0 0 1 0 2h-9a1 1 0 1 1 0-2zM8.31 5.78A1 1 0 0 1 9.7 7.22l-4.2 4a1 1 0 0 1-1.48-.1l-1.8-2.29A1 1 0 1 1 3.8 7.6L4.9 9.02zM21 7.5a1 1 0 0 1 0 2h-9a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

ListCheckSimpleBold.displayName = 'ListCheckSimpleBold';

// Triple export pattern (lucide-react style)
export { ListCheckSimpleBold, ListCheckSimpleBold as ListCheckSimpleBoldIcon, ListCheckSimpleBold as SiListCheckSimpleBold };
export default ListCheckSimpleBold;
export type { ListCheckSimpleBoldProps };
