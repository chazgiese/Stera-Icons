import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PencilLineRegularProps = Omit<IconBaseProps, 'children'>;

const PencilLineRegular = memo(
  forwardRef<SVGSVGElement, PencilLineRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="pencil-line" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M16.59 1.85a2 2 0 0 1 2.82 0l2.74 2.74a2 2 0 0 1 0 2.82L9.3 20.25H21a.75.75 0 0 1 0 1.5H3a1 1 0 0 1-.28-.05l-.03-.02a1 1 0 0 1-.3-.25l-.02-.02-.05-.1-.02-.03a1 1 0 0 1-.05-.36l.5-5 .03-.12q.05-.2.19-.33zM4.22 16.34l-.38 3.82 3.82-.38L17.44 10 14 6.56zM18.35 2.91a.5.5 0 0 0-.7 0l-2.6 2.59 3.45 3.44 2.59-2.59a.5.5 0 0 0 0-.7z" clipRule="evenodd" />
    </IconBase>
  ))
);

PencilLineRegular.displayName = 'PencilLineRegular';

// Triple export pattern (lucide-react style)
export { PencilLineRegular, PencilLineRegular as PencilLineRegularIcon, PencilLineRegular as SiPencilLineRegular };
export default PencilLineRegular;
export type { PencilLineRegularProps };
