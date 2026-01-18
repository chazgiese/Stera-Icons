import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowCornerDownLeftFillProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerDownLeftFill = memo(
  forwardRef<SVGSVGElement, ArrowCornerDownLeftFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M21 3a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H9v4a1 1 0 0 1-1.7.7l-5-5-.07-.07-.1-.13v-.01a1 1 0 0 1 .16-1.2l5-5A1 1 0 0 1 9 10v4h9a2 2 0 0 0 2-2V4a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

ArrowCornerDownLeftFill.displayName = 'ArrowCornerDownLeftFill';

export { ArrowCornerDownLeftFill };
export type { ArrowCornerDownLeftFillProps };
