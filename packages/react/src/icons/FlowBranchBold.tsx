import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowBranchBoldProps = Omit<IconBaseProps, 'children'>;

const FlowBranchBold = memo(
  forwardRef<SVGSVGElement, FlowBranchBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M13.8 13.8a1 1 0 0 1 1.4 0l4.8 4.79V16a1 1 0 1 1 2 0v5a1 1 0 0 1-1 1h-5a1 1 0 1 1 0-2h2.59l-4.8-4.8a1 1 0 0 1 0-1.4M21 2a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V5.41l-5.54 5.54A7 7 0 0 1 9.51 13H2a1 1 0 1 1 0-2h7.51a5 5 0 0 0 3.54-1.46L18.59 4H16a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

FlowBranchBold.displayName = 'FlowBranchBold';

// Triple export pattern (lucide-react style)
export { FlowBranchBold, FlowBranchBold as FlowBranchBoldIcon, FlowBranchBold as SiFlowBranchBold };
export type { FlowBranchBoldProps };
