import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TriangleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TriangleFillDuotone = memo(
  forwardRef<SVGSVGElement, TriangleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="triangle-fill-duotone" {...props}>
      <path fill="currentColor" d="M11.4 4.62a1.5 1.5 0 0 1 1.21 0c.12.05.32.2.66.69s.75 1.17 1.33 2.17l4.06 7.02c.58 1 .98 1.7 1.23 2.23.25.55.28.8.27.92-.05.43-.27.81-.61 1.06-.11.08-.34.18-.94.23s-1.39.06-2.55.06H7.94c-1.16 0-1.96 0-2.55-.06-.6-.05-.83-.15-.94-.23a1.5 1.5 0 0 1-.6-1.06c-.02-.13 0-.37.26-.92.25-.54.65-1.23 1.23-2.23L9.4 7.48c.58-1 .98-1.69 1.33-2.17.34-.5.54-.64.66-.7" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M10.58 2.8c.9-.41 1.94-.41 2.84 0 .62.27 1.08.78 1.49 1.35q.59.87 1.42 2.33l4.06 7.02q.86 1.43 1.31 2.4c.3.63.52 1.29.44 1.96a3.5 3.5 0 0 1-1.42 2.47c-.55.4-1.22.54-1.92.6q-1.06.09-2.74.07H7.94q-1.68.01-2.74-.06c-.7-.07-1.37-.2-1.92-.6a3.5 3.5 0 0 1-1.42-2.48c-.08-.67.14-1.33.44-1.97q.46-.95 1.31-2.4l4.06-7.01Q8.5 5.02 9.1 4.15c.41-.57.87-1.08 1.49-1.36m2.03 1.82a1.5 1.5 0 0 0-1.22 0c-.12.05-.32.2-.66.69S9.98 6.48 9.4 7.48L5.34 14.5c-.58 1-.98 1.7-1.23 2.23-.25.55-.28.8-.27.93.05.42.27.8.61 1.05.11.08.34.18.94.23s1.39.06 2.55.06h8.12c1.16 0 1.96 0 2.55-.06.6-.05.83-.15.94-.23.34-.25.56-.63.6-1.05.02-.13 0-.38-.26-.93-.25-.54-.65-1.23-1.23-2.23L14.6 7.48c-.58-1-.98-1.69-1.33-2.17-.34-.5-.54-.64-.66-.7" clipRule="evenodd" />
    </IconBase>
  ))
);

TriangleFillDuotone.displayName = 'TriangleFillDuotone';

// Triple export pattern (lucide-react style)
export { TriangleFillDuotone, TriangleFillDuotone as TriangleFillDuotoneIcon, TriangleFillDuotone as SiTriangleFillDuotone };
export default TriangleFillDuotone;
export type { TriangleFillDuotoneProps };
