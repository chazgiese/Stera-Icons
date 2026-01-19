import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowBigDownBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowBigDownBold = memo(
  forwardRef<SVGSVGElement, ArrowBigDownBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-big-down-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M14 3a3 3 0 0 1 3 3v3.5h3.8c1.33 0 2 1.62 1.05 2.56l-8.26 8.26c-.88.88-2.3.88-3.18 0l-8.26-8.26A1.5 1.5 0 0 1 3.2 9.5H7V6a3 3 0 0 1 3-3zm-4 2a1 1 0 0 0-1 1v4.5a1 1 0 0 1-1 1H4.41l7.41 7.4c.1.1.26.1.36 0l7.4-7.4H16a1 1 0 0 1-1-1V6a1 1 0 0 0-1-1z" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowBigDownBold.displayName = 'ArrowBigDownBold';

// Triple export pattern (lucide-react style)
export { ArrowBigDownBold, ArrowBigDownBold as ArrowBigDownBoldIcon, ArrowBigDownBold as SiArrowBigDownBold };
export default ArrowBigDownBold;
export type { ArrowBigDownBoldProps };
