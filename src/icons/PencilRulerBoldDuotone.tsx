import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PencilRulerBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PencilRulerBoldDuotone = memo(
  forwardRef<SVGSVGElement, PencilRulerBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="pencil-ruler-bold-duotone" {...props}>
      <path d="M9 19.5H5v-2h4zM9 8H5V6h4zM17 16.25a1 1 0 1 1 0 2h-2v-2zM17 11.5a1 1 0 1 1 0 2h-2v-2zM17 6.75a1 1 0 1 1 0 2h-2v-2z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M7 1a1 1 0 0 1 .76.35l3 3.5a1 1 0 0 1 .24.65v15.25C11 21.99 10 23 8.75 23h-3.5C4.01 23 3 22 3 20.75V5.5a1 1 0 0 1 .24-.65l3-3.5A1 1 0 0 1 7 1M5 5.87v14.88c0 .14.11.25.25.25h3.5q.23-.02.25-.25V5.87L7 3.54zM18.75 2C19.99 2 21 3 21 4.25v16.5c0 1.24-1 2.25-2.25 2.25h-3.5C14.01 23 13 22 13 20.75V4.25C13 3.01 14 2 15.25 2zm-3.5 2a.25.25 0 0 0-.25.25v16.5q.02.23.25.25h3.5q.23-.02.25-.25V4.25a.25.25 0 0 0-.25-.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

PencilRulerBoldDuotone.displayName = 'PencilRulerBoldDuotone';

// Triple export pattern (lucide-react style)
export { PencilRulerBoldDuotone, PencilRulerBoldDuotone as PencilRulerBoldDuotoneIcon, PencilRulerBoldDuotone as SiPencilRulerBoldDuotone };
export type { PencilRulerBoldDuotoneProps };
