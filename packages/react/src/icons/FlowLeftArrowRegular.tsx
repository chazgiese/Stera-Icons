import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowLeftArrowRegularProps = Omit<IconBaseProps, 'children'>;

const FlowLeftArrowRegular = memo(
  forwardRef<SVGSVGElement, FlowLeftArrowRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M6.47 6.47a.75.75 0 1 1 1.06 1.06l-3.72 3.72h9.5a4.75 4.75 0 1 1 0 1.5h-9.5l3.72 3.72a.75.75 0 1 1-1.06 1.06l-5-5a.75.75 0 0 1 0-1.06zM18 8.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowLeftArrowRegular.displayName = 'FlowLeftArrowRegular';

// Triple export pattern (lucide-react style)
export { FlowLeftArrowRegular, FlowLeftArrowRegular as FlowLeftArrowRegularIcon, FlowLeftArrowRegular as SiFlowLeftArrowRegular };
export type { FlowLeftArrowRegularProps };
