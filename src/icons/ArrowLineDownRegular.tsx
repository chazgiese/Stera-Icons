import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowLineDownRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowLineDownRegular = memo(
  forwardRef<SVGSVGElement, ArrowLineDownRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-line-down" {...props}>
      <path fill="currentColor" d="M20 20.25a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1 0-1.5zM12 2.25c.41 0 .75.34.75.75v12.19l5.72-5.72a.75.75 0 1 1 1.06 1.06l-7 7c-.3.3-.77.3-1.06 0l-7-7a.75.75 0 1 1 1.06-1.06l5.72 5.72V3c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

ArrowLineDownRegular.displayName = 'ArrowLineDownRegular';

// Triple export pattern (lucide-react style)
export { ArrowLineDownRegular, ArrowLineDownRegular as ArrowLineDownRegularIcon, ArrowLineDownRegular as SiArrowLineDownRegular };
export default ArrowLineDownRegular;
export type { ArrowLineDownRegularProps };
