import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type StairsFillProps = Omit<IconBaseProps, 'children'>;

const StairsFill = memo(
  forwardRef<SVGSVGElement, StairsFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M22.5 2a1.5 1.5 0 0 1 0 3h-4.17v5.17c0 .83-.67 1.5-1.5 1.5h-5.16v5.16c0 .83-.67 1.5-1.5 1.5H5v4.17a1.5 1.5 0 0 1-3 0v-5.67c0-.83.67-1.5 1.5-1.5h5.17v-5.16c0-.83.67-1.5 1.5-1.5h5.16V3.5c0-.83.67-1.5 1.5-1.5z" />
    </IconBase>
  ))
);

StairsFill.displayName = 'StairsFill';

export { StairsFill };
export type { StairsFillProps };
