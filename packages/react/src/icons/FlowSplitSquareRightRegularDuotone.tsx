import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowSplitSquareRightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowSplitSquareRightRegularDuotone = memo(
  forwardRef<SVGSVGElement, FlowSplitSquareRightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M15.25 5.75H14c-.69 0-1.25.56-1.25 1.25v10.13c.07.63.6 1.12 1.25 1.12h1.25v1.5H14A2.75 2.75 0 0 1 11.25 17v-4.25H8.67a4 4 0 0 0 0-1.5h2.58V7A2.75 2.75 0 0 1 14 4.25h1.25z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M20.5 15.25c1.24 0 2.25 1 2.25 2.25v3c0 1.24-1 2.25-2.25 2.25h-3c-1.24 0-2.25-1-2.25-2.25v-3c0-1.24 1-2.25 2.25-2.25zm-3 1.5a.75.75 0 0 0-.75.75v3c0 .41.34.75.75.75h3c.41 0 .75-.34.75-.75v-3a.75.75 0 0 0-.75-.75zM5 8.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M20.5 1.25c1.24 0 2.25 1 2.25 2.25v3c0 1.24-1 2.25-2.25 2.25h-3c-1.24 0-2.25-1-2.25-2.25v-3c0-1.24 1-2.25 2.25-2.25zm-3 1.5a.75.75 0 0 0-.75.75v3.08c.04.38.36.67.75.67h3c.41 0 .75-.34.75-.75v-3a.75.75 0 0 0-.75-.75z" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitSquareRightRegularDuotone.displayName = 'FlowSplitSquareRightRegularDuotone';

export { FlowSplitSquareRightRegularDuotone };
export type { FlowSplitSquareRightRegularDuotoneProps };
