import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ListCheckSimpleFillProps = Omit<IconBaseProps, 'children'>;

const ListCheckSimpleFill = memo(
  forwardRef<SVGSVGElement, ListCheckSimpleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M6.97 12.41a1.5 1.5 0 1 1 2.06 2.18l-4.2 4a1.5 1.5 0 0 1-2.2-.16l-1.8-2.29a1.5 1.5 0 0 1 2.35-1.85l.78.99zM22 14a1.5 1.5 0 0 1 0 3H12a1.5 1.5 0 0 1 0-3zM6.97 5.41A1.5 1.5 0 1 1 9.03 7.6l-4.2 4a1.5 1.5 0 0 1-2.2-.16L.82 9.14A1.5 1.5 0 0 1 3.17 7.3l.78.99zM22 7a1.5 1.5 0 0 1 0 3H12a1.5 1.5 0 0 1 0-3z" />
    </IconBase>
  ))
);

ListCheckSimpleFill.displayName = 'ListCheckSimpleFill';

export { ListCheckSimpleFill };
export type { ListCheckSimpleFillProps };
