import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorTextSquareRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorTextSquareRegularDuotone = memo(
  forwardRef<SVGSVGElement, CursorTextSquareRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13 2.25c1.39 0 2.47 0 3.34.07.88.07 1.61.22 2.27.56 1.08.55 1.96 1.43 2.51 2.51.34.66.49 1.39.56 2.27.07.87.07 1.95.07 3.34v2c0 1.39 0 2.47-.07 3.34-.07.88-.22 1.61-.56 2.27-.55 1.08-1.43 1.96-2.51 2.51-.66.34-1.39.49-2.27.56-.87.07-1.95.07-3.34.07h-2c-1.39 0-2.47 0-3.34-.07-.88-.07-1.61-.22-2.27-.56-1.08-.55-1.96-1.43-2.51-2.51-.34-.66-.49-1.39-.56-2.27-.07-.87-.07-1.95-.07-3.34v-2c0-1.39 0-2.47.07-3.34.07-.88.22-1.61.56-2.27.55-1.08 1.43-1.96 2.51-2.51.66-.34 1.39-.49 2.27-.56.87-.07 1.95-.07 3.34-.07zm-2 1.5c-1.41 0-2.43 0-3.22.07-.79.06-1.3.18-1.71.4-.8.4-1.45 1.05-1.86 1.85-.2.41-.33.92-.4 1.7-.06.8-.06 1.82-.06 3.23v2c0 1.41 0 2.43.07 3.22.06.79.18 1.3.4 1.71.4.8 1.05 1.45 1.85 1.86.41.2.92.33 1.7.4.8.06 1.82.06 3.23.06h2c1.41 0 2.43 0 3.22-.07.79-.06 1.3-.18 1.71-.4.8-.4 1.45-1.05 1.86-1.85.2-.41.33-.92.4-1.7.06-.8.06-1.82.06-3.23v-2c0-1.41 0-2.43-.07-3.22-.06-.79-.18-1.3-.4-1.71-.4-.8-1.05-1.45-1.85-1.86-.41-.2-.92-.33-1.7-.4-.8-.06-1.82-.06-3.23-.06z" clipRule="evenodd" opacity={.4} />
        <path d="M10 6.75c.79 0 1.5.33 2 .87.5-.54 1.21-.87 2-.87h.5c.41 0 .75.34.75.75s-.34.75-.75.75H14c-.69 0-1.25.56-1.25 1.25v5c0 .69.56 1.25 1.25 1.25h.5c.41 0 .75.34.75.75s-.34.75-.75.75H14c-.79 0-1.5-.33-2-.87-.5.54-1.21.87-2 .87h-.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.5c.69 0 1.25-.56 1.25-1.25v-5c0-.69-.56-1.25-1.25-1.25h-.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

CursorTextSquareRegularDuotone.displayName = 'CursorTextSquareRegularDuotone';

// Triple export pattern
export { CursorTextSquareRegularDuotone, CursorTextSquareRegularDuotone as CursorTextSquareRegularDuotoneIcon, CursorTextSquareRegularDuotone as SiCursorTextSquareRegularDuotone };
export default CursorTextSquareRegularDuotone;
export type { CursorTextSquareRegularDuotoneProps };
