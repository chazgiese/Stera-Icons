import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowLineLeftRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowLineLeftRegular = memo(
  forwardRef<SVGSVGElement, ArrowLineLeftRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-line-left" {...props}>
      <path d="M3 3.25c.41 0 .75.34.75.75v16a.75.75 0 0 1-1.5 0V4c0-.41.34-.75.75-.75M13.47 4.47a.75.75 0 1 1 1.06 1.06l-5.72 5.72H21a.75.75 0 0 1 0 1.5H8.81l5.72 5.72a.75.75 0 1 1-1.06 1.06l-7-7a.75.75 0 0 1 0-1.06z" />
    </IconBase>
  ))
);

ArrowLineLeftRegular.displayName = 'ArrowLineLeftRegular';

// Triple export pattern (lucide-react style)
export { ArrowLineLeftRegular, ArrowLineLeftRegular as ArrowLineLeftRegularIcon, ArrowLineLeftRegular as SiArrowLineLeftRegular };
export default ArrowLineLeftRegular;
export type { ArrowLineLeftRegularProps };
