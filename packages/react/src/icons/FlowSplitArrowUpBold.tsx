import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowSplitArrowUpBoldProps = Omit<IconBaseProps, 'children'>;

const FlowSplitArrowUpBold = memo(
  forwardRef<SVGSVGElement, FlowSplitArrowUpBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 23a4 4 0 0 0 1-7.87V12h4a3 3 0 0 0 3-3V4.41l1.3 1.3a1 1 0 0 0 1.4-1.42l-3-3a1 1 0 0 0-.4-.25l-.07-.01-.03-.01h-.03a1 1 0 0 0-.34 0h-.03l-.05.01-.04.01a1 1 0 0 0-.42.25l-3 3a1 1 0 1 0 1.42 1.42L18 4.4V9a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4.41l1.3 1.3a1 1 0 1 0 1.4-1.42l-3-3a1 1 0 0 0-.4-.25l-.07-.01-.03-.01h-.03a1 1 0 0 0-.34 0H4.8l-.05.01-.04.01a1 1 0 0 0-.42.25l-3 3a1 1 0 1 0 1.42 1.42L4 4.4V9a3 3 0 0 0 3 3h4v3.13A4 4 0 0 0 12 23m0-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitArrowUpBold.displayName = 'FlowSplitArrowUpBold';

export { FlowSplitArrowUpBold };
export type { FlowSplitArrowUpBoldProps };
