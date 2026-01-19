import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowCircleDownLeftBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleDownLeftBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCircleDownLeftBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-down-left-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M19.78 4.22A11 11 0 1 1 4.22 19.78 11 11 0 0 1 19.78 4.22m-1.42 1.42A9 9 0 1 0 5.64 18.36 9 9 0 0 0 18.36 5.64" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M16.24 7.76a1 1 0 0 1 0 1.41l-5.36 5.37h4.66a1 1 0 1 1 0 2H8.46a1 1 0 0 1-1-1V8.46a1 1 0 1 1 2 0v4.66l5.37-5.36a1 1 0 0 1 1.41 0" />
    </IconBase>
  ))
);

ArrowCircleDownLeftBoldDuotone.displayName = 'ArrowCircleDownLeftBoldDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCircleDownLeftBoldDuotone, ArrowCircleDownLeftBoldDuotone as ArrowCircleDownLeftBoldDuotoneIcon, ArrowCircleDownLeftBoldDuotone as SiArrowCircleDownLeftBoldDuotone };
export type { ArrowCircleDownLeftBoldDuotoneProps };
