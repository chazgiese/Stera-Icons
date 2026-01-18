import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowUpRightRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowUpRightRegular = memo(
  forwardRef<SVGSVGElement, ArrowUpRightRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M18 5.25c.41 0 .75.34.75.75v10a.75.75 0 0 1-1.5 0V7.81L6.53 18.53a.75.75 0 0 1-1.06-1.06L16.19 6.75H8a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

ArrowUpRightRegular.displayName = 'ArrowUpRightRegular';

// Triple export pattern (lucide-react style)
export { ArrowUpRightRegular, ArrowUpRightRegular as ArrowUpRightRegularIcon, ArrowUpRightRegular as SiArrowUpRightRegular };
export type { ArrowUpRightRegularProps };
