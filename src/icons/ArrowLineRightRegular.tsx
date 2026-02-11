import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowLineRightRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowLineRightRegular = memo(
  forwardRef<SVGSVGElement, ArrowLineRightRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-line-right" {...props}>
      <path d="M21 3.25a.75.75 0 0 0-.75.75v16a.75.75 0 0 0 1.5 0V4a.75.75 0 0 0-.75-.75M10.53 4.47a.75.75 0 1 0-1.06 1.06l5.72 5.72H3a.75.75 0 0 0 0 1.5h12.19l-5.72 5.72a.75.75 0 1 0 1.06 1.06l7-7c.3-.3.3-.77 0-1.06z" />
    </IconBase>
  ))
);

ArrowLineRightRegular.displayName = 'ArrowLineRightRegular';

// Triple export pattern (lucide-react style)
export { ArrowLineRightRegular, ArrowLineRightRegular as ArrowLineRightRegularIcon, ArrowLineRightRegular as SiArrowLineRightRegular };
export default ArrowLineRightRegular;
export type { ArrowLineRightRegularProps };
