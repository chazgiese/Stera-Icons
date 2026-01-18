import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TreePalmBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TreePalmBoldDuotone = memo(
  forwardRef<SVGSVGElement, TreePalmBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M14.28 1.82a6 6 0 0 1 7.47 1.15 1 1 0 0 1-.25 1.53l-3.88 2.25q.57.2 1.1.5a6 6 0 0 1 2.74 7.06 1 1 0 0 1-1.45.56L12 10.22l-8 4.65a1 1 0 0 1-1.46-.56 6 6 0 0 1 3.83-7.56L2.5 4.5a1 1 0 0 1-.25-1.53 6 6 0 0 1 7.47-1.15c1 .58 1.76 1.4 2.28 2.33a6 6 0 0 1 2.28-2.33m-4.6 6.85a4.06 4.06 0 0 0-5.42 3.74l5.93-3.45zm8.04.31a4 4 0 0 0-3.4-.31l-.5.3 5.93 3.43a4 4 0 0 0-2.03-3.42m-9-5.43a4 4 0 0 0-3.97-.05l5.85 3.39.15.09a4 4 0 0 0-2.03-3.43m10.53-.05a4.05 4.05 0 0 0-6 3.48l.15-.1z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M13.13 10.88c.11 2.7 0 6.36-2.21 11.51a1 1 0 1 1-1.84-.78 22.6 22.6 0 0 0 2.04-10.88l.88-.5z" />
    </IconBase>
  ))
);

TreePalmBoldDuotone.displayName = 'TreePalmBoldDuotone';

// Triple export pattern (lucide-react style)
export { TreePalmBoldDuotone, TreePalmBoldDuotone as TreePalmBoldDuotoneIcon, TreePalmBoldDuotone as SiTreePalmBoldDuotone };
export type { TreePalmBoldDuotoneProps };
