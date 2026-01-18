import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowBranchFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowBranchFillDuotone = memo(
  forwardRef<SVGSVGElement, FlowBranchFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.8 13.8a1 1 0 0 1 1.4 0l3.3 3.29-1.41 1.41-3.3-3.3a1 1 0 0 1 0-1.4M18.5 6.91l-4.04 4.04A7 7 0 0 1 9.51 13H2a1 1 0 0 1 0-2h7.51a5 5 0 0 0 3.54-1.46l4.04-4.04z" />
        <path fill="currentColor" d="M20.3 15.3a1 1 0 0 1 1.7.7v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-.7-1.7zM21 2a1 1 0 0 1 1 1v5a1 1 0 0 1-1.7.7l-5-5A1 1 0 0 1 16 2z" />
    </IconBase>
  ))
);

FlowBranchFillDuotone.displayName = 'FlowBranchFillDuotone';

export { FlowBranchFillDuotone };
export type { FlowBranchFillDuotoneProps };
