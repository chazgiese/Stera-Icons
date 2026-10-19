import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorTextSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorTextSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, CursorTextSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13 2.25c1.39 0 2.47 0 3.34.07.88.07 1.61.22 2.27.56 1.08.55 1.96 1.43 2.51 2.51.34.66.49 1.39.56 2.27.07.87.07 1.95.07 3.34v2c0 1.39 0 2.47-.07 3.34-.07.88-.22 1.61-.56 2.27-.55 1.08-1.43 1.96-2.51 2.51-.66.34-1.39.49-2.27.56-.87.07-1.95.07-3.34.07h-2c-1.39 0-2.47 0-3.34-.07-.88-.07-1.61-.22-2.27-.56-1.08-.55-1.96-1.43-2.51-2.51-.34-.66-.49-1.39-.56-2.27-.07-.87-.07-1.95-.07-3.34v-2c0-1.39 0-2.47.07-3.34.07-.88.22-1.61.56-2.27.55-1.08 1.43-1.96 2.51-2.51.66-.34 1.39-.49 2.27-.56.87-.07 1.95-.07 3.34-.07zM9.5 6.63c-.48 0-.87.39-.87.87s.39.87.87.88h.5c.62 0 1.13.5 1.13 1.12v5c0 .62-.5 1.13-1.13 1.13h-.5c-.48 0-.87.39-.87.87s.39.88.87.88h.5c.78 0 1.48-.32 2-.82.52.5 1.22.82 2 .82h.5c.48 0 .88-.4.88-.88s-.4-.87-.88-.87H14c-.62 0-1.12-.5-1.12-1.13v-5c0-.62.5-1.12 1.12-1.12h.5c.48 0 .88-.4.88-.88s-.4-.87-.88-.87H14c-.78 0-1.48.3-2 .8-.52-.5-1.22-.8-2-.8z" clipRule="evenodd" opacity={.4} />
        <path d="M10 6.63c.78 0 1.48.3 2 .8.52-.5 1.22-.8 2-.8h.5c.48 0 .88.39.88.87s-.4.88-.88.88H14c-.62 0-1.12.5-1.12 1.12v5c0 .62.5 1.13 1.12 1.13h.5c.48 0 .88.39.88.87s-.4.88-.88.88H14c-.78 0-1.48-.32-2-.82-.52.5-1.22.82-2 .82h-.5c-.48 0-.87-.4-.87-.88s.39-.87.87-.87h.5c.62 0 1.13-.5 1.13-1.13v-5c0-.62-.5-1.12-1.13-1.12h-.5c-.48 0-.87-.4-.87-.88s.39-.87.87-.87z" />
    </IconBase>
  ))
);

CursorTextSquareFillDuotone.displayName = 'CursorTextSquareFillDuotone';

// Triple export pattern
export { CursorTextSquareFillDuotone, CursorTextSquareFillDuotone as CursorTextSquareFillDuotoneIcon, CursorTextSquareFillDuotone as SiCursorTextSquareFillDuotone };
export default CursorTextSquareFillDuotone;
export type { CursorTextSquareFillDuotoneProps };
