import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LeafFillProps = Omit<IconBaseProps, 'children'>;

const LeafFill = memo(
  forwardRef<SVGSVGElement, LeafFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="leaf-fill" {...props}>
      <path fill="currentColor" d="M4.62 17.07a8 8 0 0 0 1.44 1.41l-.5.72c-.47.71-.9 1.5-1.11 2.12a1 1 0 0 1-1.9-.64c.3-.87.84-1.82 1.34-2.58q.38-.57.73-1.03" />
        <path fill="currentColor" d="M21 3c0 4.05-.38 6.9-1.2 9.18a15 15 0 0 1-3.78 5.59 7.6 7.6 0 0 1-9.96.71q.42-.53.59-.72l4.14-4.14a1 1 0 0 0-1.41-1.41l-4.15 4.14q-.24.25-.6.72a7.63 7.63 0 0 1 .6-10.1c1.32-1.3 2.7-2.6 4.96-3.52C12.42 2.53 15.43 2 20 2h1z" />
    </IconBase>
  ))
);

LeafFill.displayName = 'LeafFill';

// Triple export pattern (lucide-react style)
export { LeafFill, LeafFill as LeafFillIcon, LeafFill as SiLeafFill };
export default LeafFill;
export type { LeafFillProps };
