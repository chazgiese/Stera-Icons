import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowLeftBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowLeftBold = memo(
  forwardRef<SVGSVGElement, ArrowLeftBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M11.3 4.3a1 1 0 1 1 1.4 1.4L7.42 11H19a1 1 0 0 1 0 2H7.41l5.3 5.3a1 1 0 0 1-1.42 1.4l-7-7a1 1 0 0 1 0-1.4z" />
    </IconBase>
  ))
);

ArrowLeftBold.displayName = 'ArrowLeftBold';

export { ArrowLeftBold };
export type { ArrowLeftBoldProps };
