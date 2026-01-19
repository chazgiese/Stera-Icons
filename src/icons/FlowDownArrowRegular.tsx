import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowDownArrowRegularProps = Omit<IconBaseProps, 'children'>;

const FlowDownArrowRegular = memo(
  forwardRef<SVGSVGElement, FlowDownArrowRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-down-arrow" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a4.75 4.75 0 0 1 .75 9.44v9.5l3.72-3.72a.75.75 0 1 1 1.06 1.06l-5 5c-.3.3-.77.3-1.06 0l-5-5a.75.75 0 1 1 1.06-1.06l3.72 3.72v-9.5A4.75 4.75 0 0 1 12 1.25m0 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowDownArrowRegular.displayName = 'FlowDownArrowRegular';

// Triple export pattern (lucide-react style)
export { FlowDownArrowRegular, FlowDownArrowRegular as FlowDownArrowRegularIcon, FlowDownArrowRegular as SiFlowDownArrowRegular };
export type { FlowDownArrowRegularProps };
