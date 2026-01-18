import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowCircleUpLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleUpLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCircleUpLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M4.22 4.22a11 11 0 1 1 15.56 15.56A11 11 0 0 1 4.22 4.22m4.24 3.24a1 1 0 0 0-1 1v7.08a1 1 0 0 0 2 0v-4.66l5.37 5.36a1 1 0 0 0 1.41-1.41l-5.36-5.37h4.65a1 1 0 0 0 0-2z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M16.24 16.24a1 1 0 0 1-1.41 0l-5.37-5.36v4.66a1 1 0 1 1-2 0V8.46a1 1 0 0 1 1-1h7.08a1 1 0 0 1 0 2h-4.66l5.36 5.37a1 1 0 0 1 0 1.41" />
    </IconBase>
  ))
);

ArrowCircleUpLeftFillDuotone.displayName = 'ArrowCircleUpLeftFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCircleUpLeftFillDuotone, ArrowCircleUpLeftFillDuotone as ArrowCircleUpLeftFillDuotoneIcon, ArrowCircleUpLeftFillDuotone as SiArrowCircleUpLeftFillDuotone };
export type { ArrowCircleUpLeftFillDuotoneProps };
