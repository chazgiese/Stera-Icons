import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerDownRightRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerDownRightRegular = memo(
  forwardRef<SVGSVGElement, ArrowCornerDownRightRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-corner-down-right" {...props}>
      <path fill="currentColor" d="M3 3.25a.75.75 0 0 0-.75.75v8A3.75 3.75 0 0 0 6 15.75h13.19l-3.72 3.72a.75.75 0 1 0 1.06 1.06l5-5 .1-.11.05-.11.02-.05.03-.09v-.04l.01-.04.01-.09q0-.32-.22-.53l-5-5a.75.75 0 1 0-1.06 1.06l3.72 3.72H6c-1.24 0-2.25-1-2.25-2.25V4A.75.75 0 0 0 3 3.25" />
    </IconBase>
  ))
);

ArrowCornerDownRightRegular.displayName = 'ArrowCornerDownRightRegular';

// Triple export pattern (lucide-react style)
export { ArrowCornerDownRightRegular, ArrowCornerDownRightRegular as ArrowCornerDownRightRegularIcon, ArrowCornerDownRightRegular as SiArrowCornerDownRightRegular };
export default ArrowCornerDownRightRegular;
export type { ArrowCornerDownRightRegularProps };
