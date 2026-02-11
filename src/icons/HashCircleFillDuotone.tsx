import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HashCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const HashCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, HashCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="hash-circle-fill-duotone" {...props}>
      <path d="M13.13 10.88v2.24h-2.26v-2.24z" opacity={0.4} />
        <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m2 4.63c-.48 0-.87.39-.87.87v1.63h-2.26V7.5a.88.88 0 0 0-1.74 0v1.63H7.5a.87.87 0 1 0 0 1.74h1.63v2.26H7.5a.88.88 0 0 0 0 1.74h1.63v1.63a.88.88 0 0 0 1.74 0v-1.62h2.26v1.62a.88.88 0 0 0 1.74 0v-1.62h1.63a.88.88 0 0 0 0-1.76h-1.62v-2.24h1.62a.88.88 0 0 0 0-1.76h-1.62V7.5c0-.48-.4-.87-.88-.87" clipRule="evenodd" opacity={0.4} />
        <path fillRule="evenodd" d="M14 6.63c.48 0 .88.39.88.87v1.63h1.62a.88.88 0 0 1 0 1.74h-1.62v2.26h1.62a.88.88 0 0 1 0 1.74h-1.62v1.63a.88.88 0 0 1-1.76 0v-1.62h-2.24v1.62a.88.88 0 0 1-1.76 0v-1.62H7.5a.88.88 0 0 1 0-1.76h1.63v-2.24H7.5a.88.88 0 0 1 0-1.76h1.63V7.5a.88.88 0 0 1 1.74 0v1.63h2.26V7.5c0-.48.39-.87.87-.87m-3.12 6.5h2.24v-2.26h-2.24z" clipRule="evenodd" />
    </IconBase>
  ))
);

HashCircleFillDuotone.displayName = 'HashCircleFillDuotone';

// Triple export pattern (lucide-react style)
export { HashCircleFillDuotone, HashCircleFillDuotone as HashCircleFillDuotoneIcon, HashCircleFillDuotone as SiHashCircleFillDuotone };
export default HashCircleFillDuotone;
export type { HashCircleFillDuotoneProps };
