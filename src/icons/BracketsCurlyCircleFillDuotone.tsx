import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BracketsCurlyCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BracketsCurlyCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, BracketsCurlyCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="brackets-curly-circle-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20M8.9 7.25c-.91 0-1.65.74-1.65 1.64V10c0 .6-.4 1.12-.96 1.3a.75.75 0 0 0 0 1.43c.57.17.96.7.96 1.29v1.1c0 .9.74 1.64 1.64 1.64h.61a.75.75 0 0 0 0-1.5h-.6a.14.14 0 0 1-.15-.14V14c0-.77-.31-1.49-.83-2.01.52-.52.83-1.24.83-2V8.9q.01-.14.14-.15h.61a.75.75 0 0 0 0-1.5zm5.6 0a.75.75 0 0 0 0 1.5h.6q.14.01.15.14V10c0 .77.31 1.49.83 2.01a2.8 2.8 0 0 0-.83 2v1.1q-.01.14-.14.15h-.61a.75.75 0 0 0 0 1.5h.6c.92 0 1.65-.73 1.65-1.64V14c0-.6.4-1.12.96-1.3a.75.75 0 0 0 0-1.43c-.57-.17-.96-.7-.96-1.29V8.9c0-.9-.73-1.64-1.64-1.64z" clipRule="evenodd" opacity={.4} />
        <path d="M9.5 7.25a.75.75 0 0 1 0 1.5h-.6a.14.14 0 0 0-.15.14V10c0 .77-.31 1.49-.83 2.01.52.52.83 1.24.83 2v1.1q.01.14.14.15h.61a.75.75 0 0 1 0 1.5h-.6c-.91 0-1.65-.73-1.65-1.64V14c0-.6-.4-1.12-.96-1.3a.75.75 0 0 1 0-1.43c.57-.17.96-.7.96-1.29V8.9c0-.9.74-1.64 1.64-1.64zM15.1 7.25c.92 0 1.65.74 1.65 1.64V10c0 .6.4 1.12.96 1.3a.75.75 0 0 1 0 1.43c-.57.17-.96.7-.96 1.29v1.1c0 .9-.73 1.64-1.64 1.64h-.61a.75.75 0 0 1 0-1.5h.6q.14-.01.15-.14V14c0-.77.31-1.49.83-2.01a2.8 2.8 0 0 1-.83-2V8.9a.14.14 0 0 0-.14-.15h-.61a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

BracketsCurlyCircleFillDuotone.displayName = 'BracketsCurlyCircleFillDuotone';

// Triple export pattern (lucide-react style)
export { BracketsCurlyCircleFillDuotone, BracketsCurlyCircleFillDuotone as BracketsCurlyCircleFillDuotoneIcon, BracketsCurlyCircleFillDuotone as SiBracketsCurlyCircleFillDuotone };
export default BracketsCurlyCircleFillDuotone;
export type { BracketsCurlyCircleFillDuotoneProps };
