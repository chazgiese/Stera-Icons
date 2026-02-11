import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleDownLeftBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleDownLeftBold = memo(
  forwardRef<SVGSVGElement, ArrowCircleDownLeftBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-down-left-bold" {...props}>
      <path d="M14.12 8.46a1 1 0 0 1 1.42 1.42l-3.95 3.95h3.24a1 1 0 0 1 0 2H9.17a1 1 0 0 1-1-1V9.17a1 1 0 0 1 2 0v3.24z" />
        <path fillRule="evenodd" d="M4.93 4.93a10 10 0 1 1 14.14 14.14A10 10 0 0 1 4.93 4.93m12.73 1.41A8 8 0 1 0 6.34 17.66 8 8 0 0 0 17.66 6.34" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowCircleDownLeftBold.displayName = 'ArrowCircleDownLeftBold';

// Triple export pattern (lucide-react style)
export { ArrowCircleDownLeftBold, ArrowCircleDownLeftBold as ArrowCircleDownLeftBoldIcon, ArrowCircleDownLeftBold as SiArrowCircleDownLeftBold };
export default ArrowCircleDownLeftBold;
export type { ArrowCircleDownLeftBoldProps };
