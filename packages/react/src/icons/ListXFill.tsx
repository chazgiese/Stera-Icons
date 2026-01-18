import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ListXFillProps = Omit<IconBaseProps, 'children'>;

const ListXFill = memo(
  forwardRef<SVGSVGElement, ListXFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M17.5 9a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m2.4 3.1a.9.9 0 0 0-1.27 0l-1.13 1.13-1.13-1.13a.9.9 0 0 0-1.27 1.27l1.13 1.13-1.13 1.13a.9.9 0 0 0 1.27 1.27l1.13-1.13 1.13 1.13a.9.9 0 0 0 1.27-1.27l-1.13-1.13 1.13-1.13a.9.9 0 0 0 0-1.27" clipRule="evenodd" />
        <path fill="currentColor" d="M9 14.5a1.5 1.5 0 0 1 0 3H2a1.5 1.5 0 0 1 0-3zM9 9.5a1.5 1.5 0 0 1 0 3H2a1.5 1.5 0 0 1 0-3zM22 4.5a1.5 1.5 0 0 1 0 3H2a1.5 1.5 0 1 1 0-3z" />
    </IconBase>
  ))
);

ListXFill.displayName = 'ListXFill';

export { ListXFill };
export type { ListXFillProps };
