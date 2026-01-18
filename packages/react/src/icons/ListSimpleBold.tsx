import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ListSimpleBoldProps = Omit<IconBaseProps, 'children'>;

const ListSimpleBold = memo(
  forwardRef<SVGSVGElement, ListSimpleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M5 13a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1zM22 14.5a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2zM5 6a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zM22 7.5a1 1 0 1 1 0 2H9a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

ListSimpleBold.displayName = 'ListSimpleBold';

// Triple export pattern (lucide-react style)
export { ListSimpleBold, ListSimpleBold as ListSimpleBoldIcon, ListSimpleBold as SiListSimpleBold };
export type { ListSimpleBoldProps };
