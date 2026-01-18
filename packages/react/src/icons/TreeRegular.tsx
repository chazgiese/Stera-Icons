import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TreeRegularProps = Omit<IconBaseProps, 'children'>;

const TreeRegular = memo(
  forwardRef<SVGSVGElement, TreeRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="m12.07 1.25.07.02.15.04.06.03.02.01.1.06v.01l.09.08.02.02.01.02 4.44 5.66a.75.75 0 0 1-.59 1.22h-1.12l3.5 4.45a.75.75 0 0 1-.6 1.21H17.1l2.86 3.65c.64.82.05 2.02-.99 2.02H13V22a1 1 0 1 1-2 0v-2.25H5.03a1.25 1.25 0 0 1-.99-2.02l2.86-3.65H5.78a.75.75 0 0 1-.6-1.21l3.5-4.45H7.56a.75.75 0 0 1-.6-1.22l4.45-5.66.01-.02.03-.03.02-.02.02-.02.03-.03.1-.07h.02l.03-.02.03-.02.09-.03.07-.01.07-.02h.14M9.1 6.92h1.12a.75.75 0 0 1 .6 1.21l-3.5 4.45h1.12a.75.75 0 0 1 .6 1.22l-3.5 4.45h12.92l-3.5-4.45a.75.75 0 0 1 .6-1.22h1.12l-3.5-4.45a.75.75 0 0 1 .6-1.21h1.12L12 3.22z" clipRule="evenodd" />
    </IconBase>
  ))
);

TreeRegular.displayName = 'TreeRegular';

// Triple export pattern (lucide-react style)
export { TreeRegular, TreeRegular as TreeRegularIcon, TreeRegular as SiTreeRegular };
export type { TreeRegularProps };
