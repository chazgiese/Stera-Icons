import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PencilRulerRegularProps = Omit<IconBaseProps, 'children'>;

const PencilRulerRegular = memo(
  forwardRef<SVGSVGElement, PencilRulerRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="pencil-ruler" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M7 1.25q.34.01.57.26l3 3.5q.18.21.18.49v15.25a2 2 0 0 1-2 2h-3.5a2 2 0 0 1-2-2V5.5q0-.27.18-.49l3-3.5A.8.8 0 0 1 7 1.25m-2.25 18v1.5c0 .28.22.5.5.5h3.5a.5.5 0 0 0 .5-.5v-1.5zm0-1.5h4.5v-10h-4.5zm0-11.97v.47h4.5v-.47L7 3.15zM18.75 2.25a2 2 0 0 1 2 2v16.5a2 2 0 0 1-2 2h-3.5a2 2 0 0 1-2-2V4.25c0-1.1.9-2 2-2zm-3.5 1.5a.5.5 0 0 0-.5.5V7H17a.75.75 0 0 1 0 1.5h-2.25v3.25H17a.75.75 0 0 1 0 1.5h-2.25v3.25H17a.75.75 0 0 1 0 1.5h-2.25v2.75c0 .28.22.5.5.5h3.5a.5.5 0 0 0 .5-.5V4.25a.5.5 0 0 0-.5-.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

PencilRulerRegular.displayName = 'PencilRulerRegular';

// Triple export pattern (lucide-react style)
export { PencilRulerRegular, PencilRulerRegular as PencilRulerRegularIcon, PencilRulerRegular as SiPencilRulerRegular };
export default PencilRulerRegular;
export type { PencilRulerRegularProps };
