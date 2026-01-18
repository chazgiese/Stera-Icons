import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowBigDownFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowBigDownFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowBigDownFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M14.5 3A2.5 2.5 0 0 1 17 5.5v4h3.8c1.33 0 2 1.62 1.05 2.56l-8.26 8.26c-.88.88-2.3.88-3.18 0l-8.26-8.26A1.5 1.5 0 0 1 3.2 9.5H7v-4A2.5 2.5 0 0 1 9.5 3zm-5 2a.5.5 0 0 0-.5.5v5a1 1 0 0 1-1 1H4.41l7.41 7.4c.1.1.26.1.36 0l7.4-7.4H16a1 1 0 0 1-1-1v-5a.5.5 0 0 0-.5-.5z" clipRule="evenodd" />
        <path fill="currentColor" d="M14.5 5c.28 0 .5.22.5.5v5a1 1 0 0 0 1 1h3.59l-7.41 7.4c-.1.1-.26.1-.36 0l-7.4-7.4H8a1 1 0 0 0 1-1v-5c0-.28.22-.5.5-.5z" opacity={.4} />
    </IconBase>
  ))
);

ArrowBigDownFillDuotone.displayName = 'ArrowBigDownFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowBigDownFillDuotone, ArrowBigDownFillDuotone as ArrowBigDownFillDuotoneIcon, ArrowBigDownFillDuotone as SiArrowBigDownFillDuotone };
export type { ArrowBigDownFillDuotoneProps };
