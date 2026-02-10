import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HashCircleFillProps = Omit<IconBaseProps, 'children'>;

const HashCircleFill = memo(
  forwardRef<SVGSVGElement, HashCircleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="hash-circle-fill" {...props}>
      <path fill="currentColor" d="M13.13 13.13h-2.26v-2.26h2.26z" />
        <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m2 4.63c-.48 0-.87.39-.87.87v1.63h-2.26V7.5a.88.88 0 0 0-1.74 0v1.63H7.5a.87.87 0 1 0 0 1.74h1.63v2.26H7.5a.88.88 0 0 0 0 1.74h1.63v1.63a.88.88 0 0 0 1.74 0v-1.62h2.26v1.62a.88.88 0 0 0 1.74 0v-1.62h1.63a.88.88 0 0 0 0-1.76h-1.62v-2.24h1.62a.88.88 0 0 0 0-1.76h-1.62V7.5c0-.48-.4-.87-.88-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

HashCircleFill.displayName = 'HashCircleFill';

// Triple export pattern (lucide-react style)
export { HashCircleFill, HashCircleFill as HashCircleFillIcon, HashCircleFill as SiHashCircleFill };
export default HashCircleFill;
export type { HashCircleFillProps };
