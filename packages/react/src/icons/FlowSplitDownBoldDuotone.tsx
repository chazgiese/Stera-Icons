import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowSplitDownBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowSplitDownBoldDuotone = memo(
  forwardRef<SVGSVGElement, FlowSplitDownBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M13 11h4a3 3 0 0 1 3 3v1.13a4 4 0 0 0-2 0V14a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v1.13a4 4 0 0 0-2 0V14a3 3 0 0 1 3-3h4V8.87a4 4 0 0 0 2 0z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M5 15a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4M19 15a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4M12 1a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitDownBoldDuotone.displayName = 'FlowSplitDownBoldDuotone';

export { FlowSplitDownBoldDuotone };
export type { FlowSplitDownBoldDuotoneProps };
