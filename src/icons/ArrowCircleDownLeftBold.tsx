import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowCircleDownLeftBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleDownLeftBold = memo(
  forwardRef<SVGSVGElement, ArrowCircleDownLeftBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-down-left-bold" {...props}>
      <path fill="currentColor" d="M16.24 7.76a1 1 0 0 1 0 1.41l-5.36 5.37h4.66a1 1 0 1 1 0 2H8.46a1 1 0 0 1-1-1V8.46a1 1 0 1 1 2 0v4.66l5.37-5.36a1 1 0 0 1 1.41 0" />
        <path fill="currentColor" fillRule="evenodd" d="M19.78 4.22A11 11 0 1 1 4.22 19.78 11 11 0 0 1 19.78 4.22m-1.42 1.42A9 9 0 1 0 5.64 18.36 9 9 0 0 0 18.36 5.64" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowCircleDownLeftBold.displayName = 'ArrowCircleDownLeftBold';

// Triple export pattern (lucide-react style)
export { ArrowCircleDownLeftBold, ArrowCircleDownLeftBold as ArrowCircleDownLeftBoldIcon, ArrowCircleDownLeftBold as SiArrowCircleDownLeftBold };
export type { ArrowCircleDownLeftBoldProps };
