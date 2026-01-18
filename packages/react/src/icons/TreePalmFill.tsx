import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TreePalmFillProps = Omit<IconBaseProps, 'children'>;

const TreePalmFill = memo(
  forwardRef<SVGSVGElement, TreePalmFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M14.28 1.82a6 6 0 0 1 7.47 1.15 1 1 0 0 1-.25 1.53l-3.88 2.25q.57.2 1.1.5a6 6 0 0 1 2.74 7.06 1 1 0 0 1-1.45.56l-6.88-4c.11 2.72 0 6.37-2.21 11.52a1 1 0 0 1-1.84-.78 22.6 22.6 0 0 0 2.04-10.88l-7.13 4.14a1 1 0 0 1-1.45-.56 6 6 0 0 1 3.83-7.56L2.5 4.5a1 1 0 0 1-.25-1.53 6 6 0 0 1 7.47-1.15c1 .58 1.76 1.4 2.28 2.33a6 6 0 0 1 2.28-2.33" />
    </IconBase>
  ))
);

TreePalmFill.displayName = 'TreePalmFill';

// Triple export pattern (lucide-react style)
export { TreePalmFill, TreePalmFill as TreePalmFillIcon, TreePalmFill as SiTreePalmFill };
export type { TreePalmFillProps };
