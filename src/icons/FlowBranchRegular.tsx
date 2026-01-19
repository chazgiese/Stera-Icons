import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowBranchRegularProps = Omit<IconBaseProps, 'children'>;

const FlowBranchRegular = memo(
  forwardRef<SVGSVGElement, FlowBranchRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-branch" {...props}>
      <path fill="currentColor" d="M13.97 13.97c.3-.3.77-.3 1.06 0l5.22 5.22V16a.75.75 0 0 1 1.5 0v5c0 .41-.34.75-.75.75h-5a.75.75 0 0 1 0-1.5h3.19l-5.22-5.22a.75.75 0 0 1 0-1.06M21 2.25c.41 0 .75.34.75.75v5a.75.75 0 0 1-1.5 0V4.81l-5.96 5.96a6.8 6.8 0 0 1-4.78 1.98H2a.75.75 0 0 1 0-1.5h7.51c1.4 0 2.73-.55 3.72-1.54l5.96-5.96H16a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

FlowBranchRegular.displayName = 'FlowBranchRegular';

// Triple export pattern (lucide-react style)
export { FlowBranchRegular, FlowBranchRegular as FlowBranchRegularIcon, FlowBranchRegular as SiFlowBranchRegular };
export default FlowBranchRegular;
export type { FlowBranchRegularProps };
