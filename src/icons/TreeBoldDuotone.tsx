import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TreeBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TreeBoldDuotone = memo(
  forwardRef<SVGSVGElement, TreeBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="tree-bold-duotone" {...props}>
      <path fill="currentColor" d="M13 21a1 1 0 1 1-2 0v-2h2z" />
        <path fill="currentColor" fillRule="evenodd" d="M12 2c.3 0 .6.14.79.39l3.89 5a1 1 0 0 1-.8 1.61h-.28l2.63 3.39a1 1 0 0 1-.79 1.61h-.28l2 2.58A1.5 1.5 0 0 1 17.98 19H6.02a1.5 1.5 0 0 1-1.18-2.42l2-2.58h-.28a1 1 0 0 1-.8-1.61L8.4 9H8.1a1 1 0 0 1-.79-1.61l3.9-5 .07-.09A1 1 0 0 1 12 2m-1.84 5h.28a1 1 0 0 1 .8 1.61L8.6 12h.29a1 1 0 0 1 .79 1.61L7.04 17h9.91l-2.63-3.39a1 1 0 0 1 .8-1.61h.28l-2.63-3.39A1 1 0 0 1 13.56 7h.28L12 4.63z" clipRule="evenodd" opacity={.4} />
    </IconBase>
  ))
);

TreeBoldDuotone.displayName = 'TreeBoldDuotone';

// Triple export pattern (lucide-react style)
export { TreeBoldDuotone, TreeBoldDuotone as TreeBoldDuotoneIcon, TreeBoldDuotone as SiTreeBoldDuotone };
export default TreeBoldDuotone;
export type { TreeBoldDuotoneProps };
