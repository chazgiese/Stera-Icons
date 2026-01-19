import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowSplitArrowUpRegularProps = Omit<IconBaseProps, 'children'>;

const FlowSplitArrowUpRegular = memo(
  forwardRef<SVGSVGElement, FlowSplitArrowUpRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-split-arrow-up" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 22.75a3.75 3.75 0 0 0 .75-7.42v-3.58H17A2.75 2.75 0 0 0 19.75 9V3.81l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3-.11-.1q-.03 0-.05-.02l-.08-.04-.07-.02-.07-.02a1 1 0 0 0-.3 0l-.07.02q-.03 0-.07.02l-.08.04-.05.03-.11.09-3 3a.75.75 0 0 0 1.06 1.06l1.72-1.72V9c0 .69-.56 1.25-1.25 1.25H7c-.69 0-1.25-.56-1.25-1.25V3.81l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3-.11-.1q-.02 0-.05-.02l-.08-.04-.07-.02-.07-.02a1 1 0 0 0-.3 0h-.04l-.1.04-.08.04-.05.03-.11.09-3 3a.75.75 0 0 0 1.06 1.06l1.72-1.72V9A2.75 2.75 0 0 0 7 11.75h4.25v3.58a3.75 3.75 0 0 0 .75 7.42m0-1.5a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitArrowUpRegular.displayName = 'FlowSplitArrowUpRegular';

// Triple export pattern (lucide-react style)
export { FlowSplitArrowUpRegular, FlowSplitArrowUpRegular as FlowSplitArrowUpRegularIcon, FlowSplitArrowUpRegular as SiFlowSplitArrowUpRegular };
export type { FlowSplitArrowUpRegularProps };
