import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ExpandSimpleAltRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ExpandSimpleAltRegularDuotone = memo(
  forwardRef<SVGSVGElement, ExpandSimpleAltRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.53 14.47a.75.75 0 1 0-1.06 1.06l4.72 4.72h1.06v-1.06zM3.75 3.75v1.06l4.72 4.72a.75.75 0 1 0 1.06-1.06L4.81 3.75z" />
        <path fill="currentColor" d="M21 14.25c.41 0 .75.34.75.75v6c0 .41-.34.75-.75.75h-6a.75.75 0 0 1 0-1.5h5.25V15c0-.41.34-.75.75-.75M9 2.25a.75.75 0 0 1 0 1.5H3.75V9a.75.75 0 0 1-1.5 0V3c0-.41.34-.75.75-.75z" />
    </IconBase>
  ))
);

ExpandSimpleAltRegularDuotone.displayName = 'ExpandSimpleAltRegularDuotone';

export { ExpandSimpleAltRegularDuotone };
export type { ExpandSimpleAltRegularDuotoneProps };
