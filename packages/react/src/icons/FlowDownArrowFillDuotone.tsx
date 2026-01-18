import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowDownArrowFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowDownArrowFillDuotone = memo(
  forwardRef<SVGSVGElement, FlowDownArrowFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="m13 19.59-1 1-1-1v-8.7a5 5 0 0 0 2 0z" opacity={.4} />
        <path fill="currentColor" d="M16.3 16.3a1 1 0 0 1 1.4 1.4l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 1 1 1.4-1.4l4.3 4.29zM12 1a5 5 0 1 1 0 10 5 5 0 0 1 0-10" />
    </IconBase>
  ))
);

FlowDownArrowFillDuotone.displayName = 'FlowDownArrowFillDuotone';

export { FlowDownArrowFillDuotone };
export type { FlowDownArrowFillDuotoneProps };
