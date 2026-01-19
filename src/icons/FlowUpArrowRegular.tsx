import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowUpArrowRegularProps = Omit<IconBaseProps, 'children'>;

const FlowUpArrowRegular = memo(
  forwardRef<SVGSVGElement, FlowUpArrowRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-up-arrow" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M6.47 7.53a.75.75 0 0 1 0-1.06l5-5c.3-.3.77-.3 1.06 0l5 5a.75.75 0 1 1-1.06 1.06l-3.72-3.72v9.5a4.75 4.75 0 1 1-1.5 0v-9.5L7.53 7.53c-.3.3-.77.3-1.06 0M8.75 18a3.25 3.25 0 1 0 6.5 0 3.25 3.25 0 0 0-6.5 0" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowUpArrowRegular.displayName = 'FlowUpArrowRegular';

// Triple export pattern (lucide-react style)
export { FlowUpArrowRegular, FlowUpArrowRegular as FlowUpArrowRegularIcon, FlowUpArrowRegular as SiFlowUpArrowRegular };
export default FlowUpArrowRegular;
export type { FlowUpArrowRegularProps };
