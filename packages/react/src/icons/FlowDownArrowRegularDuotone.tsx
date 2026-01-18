import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowDownArrowRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowDownArrowRegularDuotone = memo(
  forwardRef<SVGSVGElement, FlowDownArrowRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="m12.75 20.19-.75.75-.75-.75v-9.5a5 5 0 0 0 1.5 0z" opacity={.4} />
        <path fill="currentColor" d="M16.47 16.47a.75.75 0 1 1 1.06 1.06l-5 5a.75.75 0 0 1-1.06 0l-5-5a.75.75 0 1 1 1.06-1.06L12 20.94z" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5m0 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowDownArrowRegularDuotone.displayName = 'FlowDownArrowRegularDuotone';

export { FlowDownArrowRegularDuotone };
export type { FlowDownArrowRegularDuotoneProps };
