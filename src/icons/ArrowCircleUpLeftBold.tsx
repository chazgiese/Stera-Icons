import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleUpLeftBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleUpLeftBold = memo(
  forwardRef<SVGSVGElement, ArrowCircleUpLeftBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-up-left-bold" {...props}>
      <path fill="currentColor" d="M16.24 16.24a1 1 0 0 1-1.41 0l-5.37-5.36v4.66a1 1 0 1 1-2 0V8.46a1 1 0 0 1 1-1h7.08a1 1 0 1 1 0 2h-4.66l5.36 5.37a1 1 0 0 1 0 1.41" />
        <path fill="currentColor" fillRule="evenodd" d="M19.78 19.78A11 11 0 1 1 4.22 4.22a11 11 0 0 1 15.56 15.56m-1.42-1.42A9 9 0 1 0 5.64 5.64a9 9 0 0 0 12.72 12.72" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowCircleUpLeftBold.displayName = 'ArrowCircleUpLeftBold';

// Triple export pattern (lucide-react style)
export { ArrowCircleUpLeftBold, ArrowCircleUpLeftBold as ArrowCircleUpLeftBoldIcon, ArrowCircleUpLeftBold as SiArrowCircleUpLeftBold };
export default ArrowCircleUpLeftBold;
export type { ArrowCircleUpLeftBoldProps };
