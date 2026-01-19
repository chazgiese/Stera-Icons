import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PencilRulerRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PencilRulerRegularDuotone = memo(
  forwardRef<SVGSVGElement, PencilRulerRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="pencil-ruler-duotone" {...props}>
      <path d="M9.25 19.25h-4.5v-1.5h4.5zM17 16.5a.75.75 0 0 1 0 1.5h-2.25v-1.5zM17 11.75a.75.75 0 0 1 0 1.5h-2.25v-1.5zM17 7a.75.75 0 0 1 0 1.5h-2.25V7zM9.25 7.75h-4.5v-1.5h4.5z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M7 1.25q.34.01.57.26l3 3.5q.18.21.18.49v15.25a2 2 0 0 1-1.8 1.99l-.2.01h-3.5a2 2 0 0 1-2-2V5.5q0-.27.18-.49l3-3.5.06-.06q.22-.2.51-.2M4.75 5.78v14.97c0 .28.22.5.5.5h3.5a.5.5 0 0 0 .5-.5V5.78L7 3.15zM18.75 2.25a2 2 0 0 1 2 2v16.5a2 2 0 0 1-2 2h-3.5a2 2 0 0 1-2-2V4.25c0-1.1.9-2 2-2zm-3.5 1.5a.5.5 0 0 0-.5.5v16.5c0 .28.22.5.5.5h3.5a.5.5 0 0 0 .5-.5V4.25a.5.5 0 0 0-.5-.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

PencilRulerRegularDuotone.displayName = 'PencilRulerRegularDuotone';

// Triple export pattern (lucide-react style)
export { PencilRulerRegularDuotone, PencilRulerRegularDuotone as PencilRulerRegularDuotoneIcon, PencilRulerRegularDuotone as SiPencilRulerRegularDuotone };
export default PencilRulerRegularDuotone;
export type { PencilRulerRegularDuotoneProps };
