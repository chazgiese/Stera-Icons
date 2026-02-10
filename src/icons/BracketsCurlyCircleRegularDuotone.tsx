import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BracketsCurlyCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BracketsCurlyCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, BracketsCurlyCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="brackets-curly-circle-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M10 7.25a.75.75 0 0 1 0 1.5h-.6a.14.14 0 0 0-.15.14V10c0 .77-.31 1.49-.83 2.01.52.52.83 1.24.83 2v1.1q.01.14.14.15H10a.75.75 0 0 1 0 1.5h-.6c-.91 0-1.65-.73-1.65-1.64V14c0-.6-.4-1.12-.96-1.3a.75.75 0 0 1 0-1.43c.57-.17.96-.7.96-1.29V8.9c0-.9.74-1.64 1.64-1.64zM14.6 7.25c.92 0 1.65.74 1.65 1.64V10c0 .6.4 1.12.96 1.3a.75.75 0 0 1 0 1.43c-.57.17-.96.7-.96 1.29v1.1c0 .9-.73 1.64-1.64 1.64H14a.75.75 0 0 1 0-1.5h.6q.14-.01.15-.14V14c0-.77.31-1.49.83-2.01a2.8 2.8 0 0 1-.83-2V8.9a.14.14 0 0 0-.14-.15H14a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

BracketsCurlyCircleRegularDuotone.displayName = 'BracketsCurlyCircleRegularDuotone';

// Triple export pattern (lucide-react style)
export { BracketsCurlyCircleRegularDuotone, BracketsCurlyCircleRegularDuotone as BracketsCurlyCircleRegularDuotoneIcon, BracketsCurlyCircleRegularDuotone as SiBracketsCurlyCircleRegularDuotone };
export default BracketsCurlyCircleRegularDuotone;
export type { BracketsCurlyCircleRegularDuotoneProps };
