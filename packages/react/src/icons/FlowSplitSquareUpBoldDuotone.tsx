import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowSplitSquareUpBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowSplitSquareUpBoldDuotone = memo(
  forwardRef<SVGSVGElement, FlowSplitSquareUpBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M6 10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9h2v1a3 3 0 0 1-3 3h-4v2.13a4 4 0 0 0-2 0V13H7a3 3 0 0 1-3-3V9h2z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M6.5 9A2.5 2.5 0 0 0 9 6.5v-3A2.5 2.5 0 0 0 6.5 1h-3A2.5 2.5 0 0 0 1 3.5v3A2.5 2.5 0 0 0 3.5 9zm-3-2a.5.5 0 0 1-.5-.5v-3c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v3a.5.5 0 0 1-.5.5zM20.5 9A2.5 2.5 0 0 0 23 6.5v-3A2.5 2.5 0 0 0 20.5 1h-3A2.5 2.5 0 0 0 15 3.5v3A2.5 2.5 0 0 0 17.5 9zm-3-2a.5.5 0 0 1-.5-.5v-3c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v3a.5.5 0 0 1-.5.5zM12 23a4 4 0 1 0 0-8 4 4 0 0 0 0 8m0-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitSquareUpBoldDuotone.displayName = 'FlowSplitSquareUpBoldDuotone';

export { FlowSplitSquareUpBoldDuotone };
export type { FlowSplitSquareUpBoldDuotoneProps };
