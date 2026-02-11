import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type NodeMapBoldProps = Omit<IconBaseProps, 'children'>;

const NodeMapBold = memo(
  forwardRef<SVGSVGElement, NodeMapBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="node-map-bold" {...props}>
      <path fillRule="evenodd" d="M7.25 2a3.25 3.25 0 0 1 2.6 5.2l1.19 1.7a3.25 3.25 0 0 1 3.62 1.23L16 9.7a3.25 3.25 0 1 1 .6 1.91l-1.35.42q-.01.63-.24 1.18l1.51 1.28q.77-.49 1.73-.5a3.25 3.25 0 1 1-3.01 2.03l-1.52-1.28a3.2 3.2 0 0 1-3.5-.03l-2.94 2.37a3.24 3.24 0 0 1-3.03 4.41 3.25 3.25 0 1 1 1.78-5.97l2.94-2.37a3.2 3.2 0 0 1 .43-3.11l-1.19-1.7A3.25 3.25 0 1 1 7.25 2m-3 15a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m14-1A1.24 1.24 0 0 0 17 17.25 1.25 1.25 0 1 0 18.25 16M12 10.75q-.41 0-.72.23a1.25 1.25 0 1 0 1.68 1.82 1.2 1.2 0 0 0 .23-1.17 1.25 1.25 0 0 0-1.19-.88m7.25-2.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M7.25 4a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5" clipRule="evenodd" />
    </IconBase>
  ))
);

NodeMapBold.displayName = 'NodeMapBold';

// Triple export pattern (lucide-react style)
export { NodeMapBold, NodeMapBold as NodeMapBoldIcon, NodeMapBold as SiNodeMapBold };
export default NodeMapBold;
export type { NodeMapBoldProps };
