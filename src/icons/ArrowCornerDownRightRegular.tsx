import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerDownRightRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerDownRightRegular = memo(
  forwardRef<SVGSVGElement, ArrowCornerDownRightRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-corner-down-right" {...props}>
      <path d="M5 4.25c.41 0 .75.34.75.75v8c0 1.24 1 2.25 2.25 2.25h10.19l-2.72-2.72a.75.75 0 1 1 1.06-1.06l4 4a.8.8 0 0 1 .21.62v.04l-.01.04-.03.1-.02.04-.06.1-.09.12-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H8A3.75 3.75 0 0 1 4.25 13V5c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

ArrowCornerDownRightRegular.displayName = 'ArrowCornerDownRightRegular';

// Triple export pattern (lucide-react style)
export { ArrowCornerDownRightRegular, ArrowCornerDownRightRegular as ArrowCornerDownRightRegularIcon, ArrowCornerDownRightRegular as SiArrowCornerDownRightRegular };
export default ArrowCornerDownRightRegular;
export type { ArrowCornerDownRightRegularProps };
