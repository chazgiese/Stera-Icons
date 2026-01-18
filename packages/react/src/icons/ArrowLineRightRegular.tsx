import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowLineRightRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowLineRightRegular = memo(
  forwardRef<SVGSVGElement, ArrowLineRightRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M21 3.25a.75.75 0 0 0-.75.75v16a.75.75 0 0 0 1.5 0V4a.75.75 0 0 0-.75-.75M10.53 4.47a.75.75 0 1 0-1.06 1.06l5.72 5.72H3a.75.75 0 0 0 0 1.5h12.19l-5.72 5.72a.75.75 0 1 0 1.06 1.06l7-7c.3-.3.3-.77 0-1.06z" />
    </IconBase>
  ))
);

ArrowLineRightRegular.displayName = 'ArrowLineRightRegular';

export { ArrowLineRightRegular };
export type { ArrowLineRightRegularProps };
