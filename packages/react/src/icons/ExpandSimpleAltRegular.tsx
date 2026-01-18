import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ExpandSimpleAltRegularProps = Omit<IconBaseProps, 'children'>;

const ExpandSimpleAltRegular = memo(
  forwardRef<SVGSVGElement, ExpandSimpleAltRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M21 14.25c.41 0 .75.34.75.75v6c0 .41-.34.75-.75.75h-6a.75.75 0 0 1 0-1.5h4.19l-4.72-4.72a.75.75 0 1 1 1.06-1.06l4.72 4.72V15c0-.41.34-.75.75-.75M9 2.25a.75.75 0 0 1 0 1.5H4.81l4.72 4.72a.75.75 0 1 1-1.06 1.06L3.75 4.81V9a.75.75 0 0 1-1.5 0V3c0-.41.34-.75.75-.75z" />
    </IconBase>
  ))
);

ExpandSimpleAltRegular.displayName = 'ExpandSimpleAltRegular';

// Triple export pattern (lucide-react style)
export { ExpandSimpleAltRegular, ExpandSimpleAltRegular as ExpandSimpleAltRegularIcon, ExpandSimpleAltRegular as SiExpandSimpleAltRegular };
export type { ExpandSimpleAltRegularProps };
