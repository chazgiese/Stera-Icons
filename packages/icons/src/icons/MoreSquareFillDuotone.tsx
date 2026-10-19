import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoreSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MoreSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, MoreSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13 2.25c1.39 0 2.47 0 3.34.07.88.07 1.61.22 2.27.56 1.08.55 1.96 1.43 2.51 2.51.34.66.49 1.39.56 2.27.07.87.07 1.95.07 3.34v2c0 1.39 0 2.47-.07 3.34-.07.88-.22 1.61-.56 2.27-.55 1.08-1.43 1.96-2.51 2.51-.66.34-1.39.49-2.27.56-.87.07-1.95.07-3.34.07h-2c-1.39 0-2.47 0-3.34-.07-.88-.07-1.61-.22-2.27-.56-1.08-.55-1.96-1.43-2.51-2.51-.34-.66-.49-1.39-.56-2.27-.07-.87-.07-1.95-.07-3.34v-2c0-1.39 0-2.47.07-3.34.07-.88.22-1.61.56-2.27.55-1.08 1.43-1.96 2.51-2.51.66-.34 1.39-.49 2.27-.56.87-.07 1.95-.07 3.34-.07zm-5 8.38c-.76 0-1.37.61-1.37 1.37s.61 1.38 1.37 1.38 1.38-.62 1.38-1.38-.62-1.37-1.38-1.37m4 0c-.76 0-1.37.61-1.37 1.37s.61 1.38 1.37 1.38 1.38-.62 1.38-1.38-.62-1.37-1.38-1.37m4 0c-.76 0-1.37.61-1.37 1.37s.61 1.38 1.37 1.38 1.38-.62 1.38-1.38-.62-1.37-1.38-1.37" clipRule="evenodd" opacity={.4} />
        <path d="M8 10.63c.76 0 1.38.61 1.38 1.37S8.76 13.38 8 13.38 6.63 12.76 6.63 12s.61-1.37 1.37-1.37M12 10.63c.76 0 1.38.61 1.38 1.37s-.62 1.38-1.38 1.38-1.37-.62-1.37-1.38.61-1.37 1.37-1.37M16 10.63c.76 0 1.38.61 1.38 1.37s-.62 1.38-1.38 1.38-1.37-.62-1.37-1.38.61-1.37 1.37-1.37" />
    </IconBase>
  ))
);

MoreSquareFillDuotone.displayName = 'MoreSquareFillDuotone';

// Triple export pattern
export { MoreSquareFillDuotone, MoreSquareFillDuotone as MoreSquareFillDuotoneIcon, MoreSquareFillDuotone as SiMoreSquareFillDuotone };
export default MoreSquareFillDuotone;
export type { MoreSquareFillDuotoneProps };
