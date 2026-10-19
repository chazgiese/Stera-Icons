import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorTextCircleRegularProps = Omit<IconBaseProps, 'children'>;

const CursorTextCircleRegular = memo(
  forwardRef<SVGSVGElement, CursorTextCircleRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10 6.75c.79 0 1.5.33 2 .87.5-.54 1.21-.87 2-.87h.5c.41 0 .75.34.75.75s-.34.75-.75.75H14c-.69 0-1.25.56-1.25 1.25v5c0 .69.56 1.25 1.25 1.25h.5c.41 0 .75.34.75.75s-.34.75-.75.75H14c-.79 0-1.5-.33-2-.87-.5.54-1.21.87-2 .87h-.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.5c.69 0 1.25-.56 1.25-1.25v-5c0-.69-.56-1.25-1.25-1.25h-.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
        <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 1.5c-4.83 0-8.75 3.92-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.92 8.75-8.75S16.83 3.25 12 3.25" clipRule="evenodd" />
    </IconBase>
  ))
);

CursorTextCircleRegular.displayName = 'CursorTextCircleRegular';

// Triple export pattern
export { CursorTextCircleRegular, CursorTextCircleRegular as CursorTextCircleRegularIcon, CursorTextCircleRegular as SiCursorTextCircleRegular };
export default CursorTextCircleRegular;
export type { CursorTextCircleRegularProps };
