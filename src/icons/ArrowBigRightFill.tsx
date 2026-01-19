import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowBigRightFillProps = Omit<IconBaseProps, 'children'>;

const ArrowBigRightFill = memo(
  forwardRef<SVGSVGElement, ArrowBigRightFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-big-right-fill" {...props}>
      <path fill="currentColor" d="M9.5 3.2c0-1.33 1.62-2 2.56-1.05l8.26 8.26c.88.88.88 2.3 0 3.18l-8.26 8.26A1.5 1.5 0 0 1 9.5 20.8V17H5a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2h4.5z" />
    </IconBase>
  ))
);

ArrowBigRightFill.displayName = 'ArrowBigRightFill';

// Triple export pattern (lucide-react style)
export { ArrowBigRightFill, ArrowBigRightFill as ArrowBigRightFillIcon, ArrowBigRightFill as SiArrowBigRightFill };
export type { ArrowBigRightFillProps };
