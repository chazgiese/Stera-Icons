import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlusCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PlusCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, PlusCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 5.38c-.48 0-.87.39-.87.87v3.12H8c-.48 0-.87.4-.87.88s.39.87.87.87h3.13V16c0 .48.4.88.87.88.49 0 .88-.4.88-.88v-3.13H16c.48 0 .88-.4.88-.87 0-.49-.4-.88-.88-.88h-3.12V8c0-.48-.4-.87-.88-.87" clipRule="evenodd" opacity={.4} />
        <path d="M12 7.13c.49 0 .88.39.88.87v3.12H16c.48 0 .87.4.88.88 0 .48-.4.87-.88.87h-3.12V16c0 .48-.4.87-.88.88-.48 0-.87-.4-.87-.88v-3.13H8c-.48 0-.87-.4-.87-.87 0-.49.39-.88.87-.88h3.13V8c0-.48.4-.87.87-.87" />
    </IconBase>
  ))
);

PlusCircleFillDuotone.displayName = 'PlusCircleFillDuotone';

// Triple export pattern
export { PlusCircleFillDuotone, PlusCircleFillDuotone as PlusCircleFillDuotoneIcon, PlusCircleFillDuotone as SiPlusCircleFillDuotone };
export default PlusCircleFillDuotone;
export type { PlusCircleFillDuotoneProps };
