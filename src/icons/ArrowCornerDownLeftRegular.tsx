import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowCornerDownLeftRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerDownLeftRegular = memo(
  forwardRef<SVGSVGElement, ArrowCornerDownLeftRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-corner-down-left" {...props}>
      <path fill="currentColor" d="M21 3.25c.41 0 .75.34.75.75v8A3.75 3.75 0 0 1 18 15.75H4.81l3.72 3.72a.75.75 0 1 1-1.06 1.06l-5-5-.1-.11-.05-.11-.02-.05-.03-.09v-.04l-.01-.04a.8.8 0 0 1 .21-.62l5-5a.75.75 0 1 1 1.06 1.06l-3.72 3.72H18c1.24 0 2.25-1 2.25-2.25V4c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

ArrowCornerDownLeftRegular.displayName = 'ArrowCornerDownLeftRegular';

// Triple export pattern (lucide-react style)
export { ArrowCornerDownLeftRegular, ArrowCornerDownLeftRegular as ArrowCornerDownLeftRegularIcon, ArrowCornerDownLeftRegular as SiArrowCornerDownLeftRegular };
export default ArrowCornerDownLeftRegular;
export type { ArrowCornerDownLeftRegularProps };
