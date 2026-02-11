import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowDiagramRegularProps = Omit<IconBaseProps, 'children'>;

const FlowDiagramRegular = memo(
  forwardRef<SVGSVGElement, FlowDiagramRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-diagram" {...props}>
      <path fillRule="evenodd" d="M8.8 1.25c1.08 0 1.95.87 1.95 1.95v.05H17A2.75 2.75 0 0 1 19.75 6v4A2.75 2.75 0 0 1 17 12.75h-1.19l-3.28 3.28a.75.75 0 0 1-1.06 0l-3.28-3.28H7c-.69 0-1.25.56-1.25 1.25v4c0 .69.56 1.25 1.25 1.25h6.25v-.05c0-1.08.87-1.95 1.95-1.95h3.6c1.08 0 1.95.87 1.95 1.95v1.6c0 1.08-.87 1.95-1.95 1.95h-3.6a1.95 1.95 0 0 1-1.95-1.95v-.05H7A2.75 2.75 0 0 1 4.25 18v-4A2.75 2.75 0 0 1 7 11.25h1.19l3.28-3.28c.3-.3.77-.3 1.06 0l3.28 3.28H17c.69 0 1.25-.56 1.25-1.25V6c0-.69-.56-1.25-1.25-1.25h-6.25v.05c0 1.08-.87 1.95-1.95 1.95H5.2A1.95 1.95 0 0 1 3.25 4.8V3.2c0-1.08.87-1.95 1.95-1.95zm6.4 17.5c-.25 0-.45.2-.45.45v1.6c0 .25.2.45.45.45h3.6c.25 0 .45-.2.45-.45v-1.6c0-.25-.2-.45-.45-.45zM9.56 12 12 14.44 14.44 12 12 9.56zM5.2 2.75c-.25 0-.45.2-.45.45v1.6c0 .25.2.45.45.45h3.6c.25 0 .45-.2.45-.45V3.2c0-.25-.2-.45-.45-.45z" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowDiagramRegular.displayName = 'FlowDiagramRegular';

// Triple export pattern (lucide-react style)
export { FlowDiagramRegular, FlowDiagramRegular as FlowDiagramRegularIcon, FlowDiagramRegular as SiFlowDiagramRegular };
export default FlowDiagramRegular;
export type { FlowDiagramRegularProps };
