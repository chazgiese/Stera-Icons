import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ListSimpleFillProps = Omit<IconBaseProps, 'children'>;

const ListSimpleFill = memo(
  forwardRef<SVGSVGElement, ListSimpleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M5 13a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1zM21.5 14a1.5 1.5 0 0 1 0 3h-12a1.5 1.5 0 0 1 0-3zM5 6a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zM21.5 7a1.5 1.5 0 0 1 0 3h-12a1.5 1.5 0 1 1 0-3z" />
    </IconBase>
  ))
);

ListSimpleFill.displayName = 'ListSimpleFill';

// Triple export pattern (lucide-react style)
export { ListSimpleFill, ListSimpleFill as ListSimpleFillIcon, ListSimpleFill as SiListSimpleFill };
export type { ListSimpleFillProps };
