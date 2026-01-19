import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowRightArrowRegularProps = Omit<IconBaseProps, 'children'>;

const FlowRightArrowRegular = memo(
  forwardRef<SVGSVGElement, FlowRightArrowRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-right-arrow" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M16.47 6.47c.3-.3.77-.3 1.06 0l5 5c.3.3.3.77 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06l3.72-3.72h-9.5a4.75 4.75 0 1 1 0-1.5h9.5l-3.72-3.72a.75.75 0 0 1 0-1.06M6 8.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowRightArrowRegular.displayName = 'FlowRightArrowRegular';

// Triple export pattern (lucide-react style)
export { FlowRightArrowRegular, FlowRightArrowRegular as FlowRightArrowRegularIcon, FlowRightArrowRegular as SiFlowRightArrowRegular };
export default FlowRightArrowRegular;
export type { FlowRightArrowRegularProps };
