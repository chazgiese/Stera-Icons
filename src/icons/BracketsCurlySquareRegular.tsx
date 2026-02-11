import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BracketsCurlySquareRegularProps = Omit<IconBaseProps, 'children'>;

const BracketsCurlySquareRegular = memo(
  forwardRef<SVGSVGElement, BracketsCurlySquareRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="brackets-curly-square" {...props}>
      <path d="M10 7.25a.75.75 0 0 1 0 1.5h-.6a.14.14 0 0 0-.15.14V10c0 .77-.31 1.49-.83 2.01.52.52.83 1.24.83 2v1.1q.01.14.14.15H10a.75.75 0 0 1 0 1.5h-.6c-.91 0-1.65-.73-1.65-1.64V14c0-.6-.4-1.12-.96-1.3a.75.75 0 0 1 0-1.43c.57-.17.96-.7.96-1.29V8.9c0-.9.74-1.64 1.64-1.64zM14.6 7.25c.92 0 1.65.74 1.65 1.64V10c0 .6.4 1.12.96 1.3a.75.75 0 0 1 0 1.43c-.57.17-.96.7-.96 1.29v1.1c0 .9-.73 1.64-1.64 1.64H14a.75.75 0 0 1 0-1.5h.6q.14-.01.15-.14V14c0-.77.31-1.49.83-2.01a2.8 2.8 0 0 1-.83-2V8.9a.14.14 0 0 0-.14-.15H14a.75.75 0 0 1 0-1.5z" />
        <path fillRule="evenodd" d="M13.6 3.25q1.64-.02 2.69.06 1.05.06 1.87.46c.89.45 1.62 1.18 2.07 2.07.28.55.4 1.16.46 1.87q.07 1.04.06 2.69v3.2q.02 1.64-.06 2.69a5 5 0 0 1-.46 1.87 4.8 4.8 0 0 1-2.07 2.07c-.55.28-1.16.4-1.87.46q-1.04.07-2.69.06h-3.2q-1.64.02-2.69-.06a5 5 0 0 1-1.87-.46 4.8 4.8 0 0 1-2.07-2.07 5 5 0 0 1-.46-1.87q-.07-1.04-.06-2.69v-3.2q-.02-1.64.06-2.69.06-1.05.46-1.87a4.8 4.8 0 0 1 2.07-2.07c.55-.28 1.16-.4 1.87-.46q1.04-.07 2.69-.06zm-3.2 1.5c-1.13 0-1.94 0-2.57.05s-1 .15-1.3.3q-.94.5-1.43 1.42c-.15.3-.25.7-.3 1.31-.05.63-.05 1.44-.05 2.57v3.2c0 1.13 0 1.94.05 2.57s.15 1 .3 1.3q.5.94 1.42 1.43c.3.15.7.25 1.31.3.63.05 1.44.05 2.57.05h3.2c1.13 0 1.94 0 2.57-.05s1-.15 1.3-.3q.94-.5 1.43-1.42c.15-.3.25-.7.3-1.31.05-.63.05-1.44.05-2.57v-3.2c0-1.13 0-1.94-.05-2.57s-.15-1-.3-1.3q-.5-.94-1.42-1.43c-.3-.15-.7-.25-1.31-.3-.63-.05-1.44-.05-2.57-.05z" clipRule="evenodd" />
    </IconBase>
  ))
);

BracketsCurlySquareRegular.displayName = 'BracketsCurlySquareRegular';

// Triple export pattern (lucide-react style)
export { BracketsCurlySquareRegular, BracketsCurlySquareRegular as BracketsCurlySquareRegularIcon, BracketsCurlySquareRegular as SiBracketsCurlySquareRegular };
export default BracketsCurlySquareRegular;
export type { BracketsCurlySquareRegularProps };
