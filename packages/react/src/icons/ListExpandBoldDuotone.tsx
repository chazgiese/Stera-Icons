import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ListExpandBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListExpandBoldDuotone = memo(
  forwardRef<SVGSVGElement, ListExpandBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11 17a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM11 11a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM11 5a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2z" opacity={0.4} />
        <path fill="currentColor" d="M20.3 14.8a1 1 0 0 1 1.4 1.4l-3 3a1 1 0 0 1-1.4 0l-3-3a1 1 0 1 1 1.4-1.4l2.3 2.29zM18 4.5a1 1 0 0 1 .7.3l3 3a1 1 0 0 1-1.4 1.4L18 6.92l-2.3 2.3a1 1 0 0 1-1.4-1.42l3-3a1 1 0 0 1 .7-.29" />
    </IconBase>
  ))
);

ListExpandBoldDuotone.displayName = 'ListExpandBoldDuotone';

// Triple export pattern (lucide-react style)
export { ListExpandBoldDuotone, ListExpandBoldDuotone as ListExpandBoldDuotoneIcon, ListExpandBoldDuotone as SiListExpandBoldDuotone };
export type { ListExpandBoldDuotoneProps };
