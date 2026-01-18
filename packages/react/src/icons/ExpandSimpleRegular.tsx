import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ExpandSimpleRegularProps = Omit<IconBaseProps, 'children'>;

const ExpandSimpleRegular = memo(
  forwardRef<SVGSVGElement, ExpandSimpleRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M8.47 14.47a.75.75 0 1 1 1.06 1.06l-4.72 4.72H9a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 1.5 0v4.19zM21 2.25c.41 0 .75.34.75.75v6a.75.75 0 0 1-1.5 0V4.81l-4.72 4.72a.75.75 0 1 1-1.06-1.06l4.72-4.72H15a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

ExpandSimpleRegular.displayName = 'ExpandSimpleRegular';

export { ExpandSimpleRegular };
export type { ExpandSimpleRegularProps };
