import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TriangleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TriangleBoldDuotone = memo(
  forwardRef<SVGSVGElement, TriangleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="triangle-bold-duotone" {...props}>
      <path d="M16.06 19a1 1 0 1 0 0 2H7.94a1 1 0 0 0 0-2z" opacity={.4} />
        <path d="M10.58 2.8c.9-.41 1.94-.41 2.84 0 .62.27 1.08.78 1.49 1.35q.59.87 1.42 2.33l4.06 7.01q.86 1.45 1.31 2.4c.3.64.52 1.3.45 1.97a3.5 3.5 0 0 1-1.43 2.47c-.55.4-1.22.54-1.92.6q-1.06.09-2.74.07a1 1 0 0 1 0-2c1.16 0 1.96 0 2.55-.06.6-.05.83-.15.94-.23.34-.25.56-.63.6-1.05.02-.13 0-.38-.26-.93a32 32 0 0 0-1.23-2.23L14.6 7.48c-.58-1-.98-1.69-1.33-2.17-.34-.5-.54-.64-.66-.7a1.5 1.5 0 0 0-1.22 0c-.12.06-.32.2-.66.7A32 32 0 0 0 9.4 7.48L5.34 14.5c-.58 1-.98 1.7-1.23 2.23-.25.55-.28.8-.27.93.05.42.27.8.61 1.05.11.08.34.18.94.23s1.4.06 2.55.06a1 1 0 0 1 0 2q-1.68.01-2.74-.06c-.7-.07-1.37-.2-1.92-.61a3.5 3.5 0 0 1-1.42-2.47c-.08-.68.14-1.33.44-1.97q.46-.95 1.31-2.4l4.06-7.01Q8.5 5.02 9.1 4.15c.41-.57.87-1.08 1.49-1.36" />
    </IconBase>
  ))
);

TriangleBoldDuotone.displayName = 'TriangleBoldDuotone';

// Triple export pattern (lucide-react style)
export { TriangleBoldDuotone, TriangleBoldDuotone as TriangleBoldDuotoneIcon, TriangleBoldDuotone as SiTriangleBoldDuotone };
export default TriangleBoldDuotone;
export type { TriangleBoldDuotoneProps };
