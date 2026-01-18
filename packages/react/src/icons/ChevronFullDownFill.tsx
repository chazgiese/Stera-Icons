import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronFullDownFillProps = Omit<IconBaseProps, 'children'>;

const ChevronFullDownFill = memo(
  forwardRef<SVGSVGElement, ChevronFullDownFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M19 8a1 1 0 0 1 .7 1.7l-7 7a1 1 0 0 1-1.4 0l-7-7A1 1 0 0 1 5 8z" />
    </IconBase>
  ))
);

ChevronFullDownFill.displayName = 'ChevronFullDownFill';

export { ChevronFullDownFill };
export type { ChevronFullDownFillProps };
