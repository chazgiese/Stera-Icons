import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronOutwardFillProps = Omit<IconBaseProps, 'children'>;

const ChevronOutwardFill = memo(
  forwardRef<SVGSVGElement, ChevronOutwardFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M18 15a1 1 0 0 1 .7 1.7l-6 6a1 1 0 0 1-1.4 0l-6-6A1 1 0 0 1 6 15zM11.3 1.3a1 1 0 0 1 1.4 0l6 6A1 1 0 0 1 18 9H6a1 1 0 0 1-.7-1.7z" />
    </IconBase>
  ))
);

ChevronOutwardFill.displayName = 'ChevronOutwardFill';

export { ChevronOutwardFill };
export type { ChevronOutwardFillProps };
