import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HashSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const HashSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, HashSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="hash-square-fill-duotone" {...props}>
      <path d="M13.13 10.88v2.24h-2.26v-2.24z" opacity={0.4} />
        <path fillRule="evenodd" d="M12.5 2.63c1.39 0 2.48 0 3.36.07s1.63.22 2.3.57c1.11.56 2.01 1.46 2.57 2.56.35.68.5 1.43.57 2.31.08.88.07 1.97.07 3.36v1c0 1.39 0 2.48-.07 3.36a6 6 0 0 1-.57 2.3c-.56 1.11-1.46 2.01-2.56 2.57-.68.35-1.43.5-2.31.57-.88.08-1.97.07-3.36.07h-1c-1.39 0-2.48 0-3.36-.07a6 6 0 0 1-2.3-.57c-1.11-.56-2.01-1.46-2.57-2.56a6 6 0 0 1-.57-2.31c-.08-.88-.08-1.97-.08-3.36v-1c0-1.39 0-2.48.08-3.36s.22-1.63.57-2.3c.56-1.11 1.46-2.01 2.56-2.57.68-.35 1.43-.5 2.31-.57.88-.08 1.97-.08 3.36-.08zm1.5 4c-.48 0-.87.39-.87.87v1.63h-2.26V7.5a.88.88 0 0 0-1.74 0v1.63H7.5a.87.87 0 1 0 0 1.74h1.63v2.26H7.5a.88.88 0 0 0 0 1.74h1.63v1.63a.88.88 0 0 0 1.74 0v-1.62h2.26v1.62a.88.88 0 0 0 1.74 0v-1.62h1.63a.88.88 0 0 0 0-1.76h-1.62v-2.24h1.62a.88.88 0 0 0 0-1.76h-1.62V7.5c0-.48-.4-.87-.88-.87" clipRule="evenodd" opacity={0.4} />
        <path fillRule="evenodd" d="M14 6.63c.48 0 .88.39.88.87v1.63h1.62a.88.88 0 0 1 0 1.74h-1.62v2.26h1.62a.88.88 0 0 1 0 1.74h-1.62v1.63a.88.88 0 0 1-1.76 0v-1.62h-2.24v1.62a.88.88 0 0 1-1.76 0v-1.62H7.5a.88.88 0 0 1 0-1.76h1.63v-2.24H7.5a.88.88 0 0 1 0-1.76h1.63V7.5a.88.88 0 0 1 1.74 0v1.63h2.26V7.5c0-.48.39-.87.87-.87m-3.12 6.5h2.24v-2.26h-2.24z" clipRule="evenodd" />
    </IconBase>
  ))
);

HashSquareFillDuotone.displayName = 'HashSquareFillDuotone';

// Triple export pattern (lucide-react style)
export { HashSquareFillDuotone, HashSquareFillDuotone as HashSquareFillDuotoneIcon, HashSquareFillDuotone as SiHashSquareFillDuotone };
export default HashSquareFillDuotone;
export type { HashSquareFillDuotoneProps };
