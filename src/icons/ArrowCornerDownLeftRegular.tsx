import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerDownLeftRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerDownLeftRegular = memo(
  forwardRef<SVGSVGElement, ArrowCornerDownLeftRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-corner-down-left" {...props}>
      <path fill="currentColor" d="M19 4.25c.41 0 .75.34.75.75v8A3.75 3.75 0 0 1 16 16.75H5.81l2.72 2.72a.75.75 0 1 1-1.06 1.06l-4-4-.1-.11-.05-.11-.02-.05-.03-.09v-.04l-.01-.04a.8.8 0 0 1 .21-.62l4-4a.75.75 0 1 1 1.06 1.06l-2.72 2.72H16c1.24 0 2.25-1 2.25-2.25V5c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

ArrowCornerDownLeftRegular.displayName = 'ArrowCornerDownLeftRegular';

// Triple export pattern (lucide-react style)
export { ArrowCornerDownLeftRegular, ArrowCornerDownLeftRegular as ArrowCornerDownLeftRegularIcon, ArrowCornerDownLeftRegular as SiArrowCornerDownLeftRegular };
export default ArrowCornerDownLeftRegular;
export type { ArrowCornerDownLeftRegularProps };
