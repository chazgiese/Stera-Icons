import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowULeftRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowULeftRegular = memo(
  forwardRef<SVGSVGElement, ArrowULeftRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-u-left" {...props}>
      <path d="M13.5 4.25a6.25 6.25 0 1 1 0 12.5H5.81l2.72 2.72a.75.75 0 1 1-1.06 1.06l-4-4-.1-.11a.75.75 0 0 1 .1-.95l4-4a.75.75 0 1 1 1.06 1.06l-2.72 2.72h7.69a4.75 4.75 0 1 0 0-9.5H9a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

ArrowULeftRegular.displayName = 'ArrowULeftRegular';

// Triple export pattern (lucide-react style)
export { ArrowULeftRegular, ArrowULeftRegular as ArrowULeftRegularIcon, ArrowULeftRegular as SiArrowULeftRegular };
export default ArrowULeftRegular;
export type { ArrowULeftRegularProps };
