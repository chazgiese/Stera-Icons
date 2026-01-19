import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowRightRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowRightRegular = memo(
  forwardRef<SVGSVGElement, ArrowRightRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-right" {...props}>
      <path fill="currentColor" d="M11.47 4.47c.3-.3.77-.3 1.06 0l7 7c.3.3.3.77 0 1.06l-7 7a.75.75 0 1 1-1.06-1.06l5.72-5.72H5a.75.75 0 0 1 0-1.5h12.19l-5.72-5.72a.75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

ArrowRightRegular.displayName = 'ArrowRightRegular';

// Triple export pattern (lucide-react style)
export { ArrowRightRegular, ArrowRightRegular as ArrowRightRegularIcon, ArrowRightRegular as SiArrowRightRegular };
export type { ArrowRightRegularProps };
