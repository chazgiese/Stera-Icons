import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ListCheckSimpleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListCheckSimpleBoldDuotone = memo(
  forwardRef<SVGSVGElement, ListCheckSimpleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-check-simple-bold-duotone" {...props}>
      <path d="M22 14.5a1 1 0 1 1 0 2H11a1 1 0 1 1 0-2zM22 7.5a1 1 0 0 1 0 2H11a1 1 0 1 1 0-2z" opacity={0.4} />
        <path fill="currentColor" d="M7.31 12.78a1 1 0 0 1 1.38 1.44l-4.2 4a1 1 0 0 1-1.48-.1l-1.8-2.29A1 1 0 1 1 2.8 14.6l1.12 1.42zM7.31 5.78A1 1 0 0 1 8.7 7.22l-4.2 4a1 1 0 0 1-1.48-.1l-1.8-2.29A1 1 0 1 1 2.8 7.6L3.9 9.02z" />
    </IconBase>
  ))
);

ListCheckSimpleBoldDuotone.displayName = 'ListCheckSimpleBoldDuotone';

// Triple export pattern (lucide-react style)
export { ListCheckSimpleBoldDuotone, ListCheckSimpleBoldDuotone as ListCheckSimpleBoldDuotoneIcon, ListCheckSimpleBoldDuotone as SiListCheckSimpleBoldDuotone };
export type { ListCheckSimpleBoldDuotoneProps };
