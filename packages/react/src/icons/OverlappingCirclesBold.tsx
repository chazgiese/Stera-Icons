import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type OverlappingCirclesBoldProps = Omit<IconBaseProps, 'children'>;

const OverlappingCirclesBold = memo(
  forwardRef<SVGSVGElement, OverlappingCirclesBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15.5 4.5A7.5 7.5 0 1 1 12 18.63a7.5 7.5 0 1 1 0-13.27 7.5 7.5 0 0 1 3.5-.86m-7 2a5.5 5.5 0 1 0 1.64 10.75 7.47 7.47 0 0 1 0-10.5A6 6 0 0 0 8.5 6.5m7 0a6 6 0 0 0-1.65.25 7.47 7.47 0 0 1 0 10.5A5.5 5.5 0 1 0 15.5 6.5M12 7.76a5.5 5.5 0 0 0 0 8.48 5.5 5.5 0 0 0 0-8.48" clipRule="evenodd" />
    </IconBase>
  ))
);

OverlappingCirclesBold.displayName = 'OverlappingCirclesBold';

// Triple export pattern (lucide-react style)
export { OverlappingCirclesBold, OverlappingCirclesBold as OverlappingCirclesBoldIcon, OverlappingCirclesBold as SiOverlappingCirclesBold };
export type { OverlappingCirclesBoldProps };
