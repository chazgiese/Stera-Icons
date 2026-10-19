import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorTextCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorTextCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, CursorTextCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75M9.5 6.63c-.48 0-.87.39-.87.87s.39.87.87.88h.5c.62 0 1.13.5 1.13 1.12v5c0 .62-.5 1.13-1.13 1.13h-.5c-.48 0-.87.39-.87.87s.39.88.87.88h.5c.78 0 1.48-.32 2-.82.52.5 1.22.82 2 .82h.5c.48 0 .88-.4.88-.88s-.4-.87-.88-.87H14c-.62 0-1.12-.5-1.12-1.13v-5c0-.62.5-1.12 1.12-1.12h.5c.48 0 .88-.4.88-.88s-.4-.87-.88-.87H14c-.78 0-1.48.3-2 .8-.52-.5-1.22-.8-2-.8z" clipRule="evenodd" opacity={.4} />
        <path d="M10 6.63c.78 0 1.48.3 2 .8.52-.5 1.22-.8 2-.8h.5c.48 0 .88.39.88.87s-.4.88-.88.88H14c-.62 0-1.12.5-1.12 1.12v5c0 .62.5 1.13 1.12 1.13h.5c.48 0 .88.39.88.87s-.4.88-.88.88H14c-.78 0-1.48-.32-2-.82-.52.5-1.22.82-2 .82h-.5c-.48 0-.87-.4-.87-.88s.39-.87.87-.87h.5c.62 0 1.13-.5 1.13-1.13v-5c0-.62-.5-1.12-1.13-1.12h-.5c-.48 0-.87-.4-.87-.88s.39-.87.87-.87z" />
    </IconBase>
  ))
);

CursorTextCircleFillDuotone.displayName = 'CursorTextCircleFillDuotone';

// Triple export pattern
export { CursorTextCircleFillDuotone, CursorTextCircleFillDuotone as CursorTextCircleFillDuotoneIcon, CursorTextCircleFillDuotone as SiCursorTextCircleFillDuotone };
export default CursorTextCircleFillDuotone;
export type { CursorTextCircleFillDuotoneProps };
