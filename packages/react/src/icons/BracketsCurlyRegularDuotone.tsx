import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BracketsCurlyRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BracketsCurlyRegularDuotone = memo(
  forwardRef<SVGSVGElement, BracketsCurlyRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M7 2.25a.75.75 0 0 1 0 1.5H6c-.69 0-1.25.56-1.25 1.25v2.84c0 1.68-.82 3.21-2.13 4.16a5.1 5.1 0 0 1 2.13 4.16V19c0 .69.56 1.25 1.25 1.25h1a.75.75 0 0 1 0 1.5H6A2.75 2.75 0 0 1 3.25 19v-2.84c0-1.56-1-2.95-2.49-3.45a.75.75 0 0 1 0-1.42 3.6 3.6 0 0 0 2.49-3.45V5A2.75 2.75 0 0 1 6 2.25z" />
        <path fill="currentColor" d="M18 2.25A2.75 2.75 0 0 1 20.75 5v2.84c0 1.56 1 2.95 2.49 3.45a.75.75 0 0 1 0 1.42 3.6 3.6 0 0 0-2.49 3.45V19A2.75 2.75 0 0 1 18 21.75h-1a.75.75 0 0 1 0-1.5h1c.69 0 1.25-.56 1.25-1.25v-2.84c0-1.68.82-3.21 2.13-4.16a5.1 5.1 0 0 1-2.13-4.16V5c0-.69-.56-1.25-1.25-1.25h-1a.75.75 0 0 1 0-1.5z" opacity={.4} />
    </IconBase>
  ))
);

BracketsCurlyRegularDuotone.displayName = 'BracketsCurlyRegularDuotone';

export { BracketsCurlyRegularDuotone };
export type { BracketsCurlyRegularDuotoneProps };
