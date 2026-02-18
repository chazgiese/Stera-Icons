import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BracketsCurlySquareRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BracketsCurlySquareRegularDuotone = memo(
  forwardRef<SVGSVGElement, BracketsCurlySquareRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="brackets-curly-square-duotone" {...props}>
      <path fillRule="evenodd" d="M12.5 2.75c1.39 0 2.47 0 3.34.07.88.07 1.61.22 2.27.56a5.8 5.8 0 0 1 2.51 2.51c.34.66.49 1.39.56 2.27.07.87.07 1.95.07 3.34v1c0 1.39 0 2.47-.07 3.34-.07.88-.22 1.61-.56 2.27a5.8 5.8 0 0 1-2.51 2.51c-.66.34-1.39.49-2.27.56-.87.07-1.95.07-3.34.07h-1c-1.39 0-2.47 0-3.34-.07a6 6 0 0 1-2.27-.56 5.8 5.8 0 0 1-2.51-2.51 6 6 0 0 1-.56-2.27c-.07-.87-.07-1.95-.07-3.34v-1c0-1.39 0-2.47.07-3.34.07-.88.22-1.61.56-2.27a5.8 5.8 0 0 1 2.51-2.51 6 6 0 0 1 2.27-.56c.87-.07 1.95-.07 3.34-.07zm-1 1.5c-1.41 0-2.43 0-3.22.07-.79.06-1.3.18-1.71.4-.8.4-1.45 1.05-1.86 1.85-.2.41-.33.92-.4 1.7-.06.8-.06 1.82-.06 3.23v1c0 1.41 0 2.43.07 3.22.06.79.18 1.3.4 1.71.4.8 1.05 1.45 1.85 1.86.41.2.92.33 1.7.4.8.06 1.82.06 3.23.06h1c1.41 0 2.43 0 3.22-.07.79-.06 1.3-.18 1.71-.4.8-.4 1.45-1.05 1.86-1.85.2-.41.33-.92.4-1.7.06-.8.06-1.82.06-3.23v-1c0-1.41 0-2.43-.07-3.22a5 5 0 0 0-.4-1.71 4.3 4.3 0 0 0-1.85-1.86 5 5 0 0 0-1.7-.4c-.8-.06-1.82-.06-3.23-.06z" clipRule="evenodd" opacity={.4} />
        <path d="M10 7.25a.75.75 0 0 1 0 1.5h-.6a.14.14 0 0 0-.15.14V10c0 .77-.31 1.49-.83 2.01.52.52.83 1.24.83 2v1.1q.01.14.14.15H10a.75.75 0 0 1 0 1.5h-.6c-.91 0-1.65-.73-1.65-1.64V14c0-.6-.4-1.12-.96-1.3a.75.75 0 0 1 0-1.43c.57-.17.96-.7.96-1.29V8.9c0-.9.74-1.64 1.64-1.64zM14.6 7.25c.92 0 1.65.74 1.65 1.64V10c0 .6.4 1.12.96 1.3a.75.75 0 0 1 0 1.43c-.57.17-.96.7-.96 1.29v1.1c0 .9-.73 1.64-1.64 1.64H14a.75.75 0 0 1 0-1.5h.6q.14-.01.15-.14V14c0-.77.31-1.49.83-2.01a2.8 2.8 0 0 1-.83-2V8.9a.14.14 0 0 0-.14-.15H14a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

BracketsCurlySquareRegularDuotone.displayName = 'BracketsCurlySquareRegularDuotone';

// Triple export pattern (lucide-react style)
export { BracketsCurlySquareRegularDuotone, BracketsCurlySquareRegularDuotone as BracketsCurlySquareRegularDuotoneIcon, BracketsCurlySquareRegularDuotone as SiBracketsCurlySquareRegularDuotone };
export default BracketsCurlySquareRegularDuotone;
export type { BracketsCurlySquareRegularDuotoneProps };
