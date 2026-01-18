import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowSplitSquareDownBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowSplitSquareDownBoldDuotone = memo(
  forwardRef<SVGSVGElement, FlowSplitSquareDownBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M6.5 15A2.5 2.5 0 0 1 9 17.5v3A2.5 2.5 0 0 1 6.5 23h-3A2.5 2.5 0 0 1 1 20.5v-3A2.5 2.5 0 0 1 3.5 15zm-3 2a.5.5 0 0 0-.5.5v3c0 .28.22.5.5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM20.5 15a2.5 2.5 0 0 1 2.5 2.5v3a2.5 2.5 0 0 1-2.5 2.5h-3a2.5 2.5 0 0 1-2.5-2.5v-3a2.5 2.5 0 0 1 2.5-2.5zm-3 2a.5.5 0 0 0-.5.5v3c0 .28.22.5.5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM12 1a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" clipRule="evenodd" />
        <path fill="currentColor" d="M13 11h4a3 3 0 0 1 3 3v1h-2v-1a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v1H4v-1a3 3 0 0 1 3-3h4V8.87a4 4 0 0 0 2 0z" opacity={.4} />
    </IconBase>
  ))
);

FlowSplitSquareDownBoldDuotone.displayName = 'FlowSplitSquareDownBoldDuotone';

export { FlowSplitSquareDownBoldDuotone };
export type { FlowSplitSquareDownBoldDuotoneProps };
