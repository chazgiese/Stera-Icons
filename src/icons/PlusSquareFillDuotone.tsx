import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlusSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PlusSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, PlusSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="plus-square-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12.5 2.63c1.39 0 2.48 0 3.36.07s1.63.22 2.3.57c1.11.56 2.01 1.46 2.57 2.56.35.68.5 1.43.57 2.31.08.88.07 1.97.07 3.36v1c0 1.39 0 2.48-.07 3.36a6 6 0 0 1-.57 2.3c-.56 1.11-1.46 2.01-2.56 2.57-.68.35-1.43.5-2.31.57-.88.08-1.97.07-3.36.07h-1c-1.39 0-2.48 0-3.36-.07a6 6 0 0 1-2.3-.57c-1.11-.56-2.01-1.46-2.57-2.56a6 6 0 0 1-.57-2.31c-.08-.88-.08-1.97-.08-3.36v-1c0-1.39 0-2.48.08-3.36s.22-1.63.57-2.3c.56-1.11 1.46-2.01 2.56-2.57.68-.35 1.43-.5 2.31-.57.88-.08 1.97-.08 3.36-.08zm-.5 4.5c-.48 0-.87.39-.87.87v3.12H8a.88.88 0 0 0 0 1.75h3.13V16a.87.87 0 1 0 1.75 0v-3.13H16a.87.87 0 1 0 0-1.75h-3.12V8c0-.48-.4-.87-.88-.87" clipRule="evenodd" opacity={.4} />
        <path d="M12 7.13c.49 0 .88.39.88.87v3.12H16a.88.88 0 0 1 0 1.75h-3.12V16a.88.88 0 0 1-1.75 0v-3.13H8a.87.87 0 1 1 0-1.75h3.13V8c0-.48.4-.87.87-.87" />
    </IconBase>
  ))
);

PlusSquareFillDuotone.displayName = 'PlusSquareFillDuotone';

// Triple export pattern (lucide-react style)
export { PlusSquareFillDuotone, PlusSquareFillDuotone as PlusSquareFillDuotoneIcon, PlusSquareFillDuotone as SiPlusSquareFillDuotone };
export default PlusSquareFillDuotone;
export type { PlusSquareFillDuotoneProps };
