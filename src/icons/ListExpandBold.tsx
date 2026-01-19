import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ListExpandBoldProps = Omit<IconBaseProps, 'children'>;

const ListExpandBold = memo(
  forwardRef<SVGSVGElement, ListExpandBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-expand-bold" {...props}>
      <path fill="currentColor" d="M20.3 14.8a1 1 0 1 1 1.4 1.4l-3 3a1 1 0 0 1-1.4 0l-3-3a1 1 0 1 1 1.4-1.4l2.3 2.29zM11 17a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM11 11a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM18 4.5a1 1 0 0 1 .7.3l3 3a1 1 0 1 1-1.4 1.4L18 6.92l-2.3 2.3a1 1 0 1 1-1.4-1.42l3-3a1 1 0 0 1 .7-.29M11 5a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

ListExpandBold.displayName = 'ListExpandBold';

// Triple export pattern (lucide-react style)
export { ListExpandBold, ListExpandBold as ListExpandBoldIcon, ListExpandBold as SiListExpandBold };
export default ListExpandBold;
export type { ListExpandBoldProps };
