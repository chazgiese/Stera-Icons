import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowBranchFillProps = Omit<IconBaseProps, 'children'>;

const FlowBranchFill = memo(
  forwardRef<SVGSVGElement, FlowBranchFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M13.8 13.8a1 1 0 0 1 1.4 0l3.3 3.29 1.8-1.8A1 1 0 0 1 22 16v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-.7-1.7l1.79-1.8-3.3-3.3a1 1 0 0 1 0-1.4M21 2a1 1 0 0 1 1 1v5a1 1 0 0 1-1.7.7l-1.8-1.79-4.04 4.04A7 7 0 0 1 9.51 13H2a1 1 0 1 1 0-2h7.51a5 5 0 0 0 3.54-1.46l4.04-4.04-1.8-1.8A1 1 0 0 1 16 2z" />
    </IconBase>
  ))
);

FlowBranchFill.displayName = 'FlowBranchFill';

export { FlowBranchFill };
export type { FlowBranchFillProps };
