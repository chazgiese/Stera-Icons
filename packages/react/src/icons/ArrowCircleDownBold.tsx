import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowCircleDownBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleDownBold = memo(
  forwardRef<SVGSVGElement, ArrowCircleDownBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" />
        <path fill="currentColor" d="M12 6a1 1 0 0 1 1 1v7.59l3.3-3.3a1 1 0 0 1 1.4 1.42l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 1 1 1.4-1.42l3.3 3.3V7a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

ArrowCircleDownBold.displayName = 'ArrowCircleDownBold';

// Triple export pattern (lucide-react style)
export { ArrowCircleDownBold, ArrowCircleDownBold as ArrowCircleDownBoldIcon, ArrowCircleDownBold as SiArrowCircleDownBold };
export type { ArrowCircleDownBoldProps };
