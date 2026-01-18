import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowLeftArrowFillProps = Omit<IconBaseProps, 'children'>;

const FlowLeftArrowFill = memo(
  forwardRef<SVGSVGElement, FlowLeftArrowFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M6.3 6.3a1 1 0 1 1 1.4 1.4L4.42 11h8.7a5 5 0 1 1 0 2H4.4l3.3 3.3a1 1 0 0 1-1.42 1.4l-5-5a1 1 0 0 1 0-1.4z" />
    </IconBase>
  ))
);

FlowLeftArrowFill.displayName = 'FlowLeftArrowFill';

export { FlowLeftArrowFill };
export type { FlowLeftArrowFillProps };
