import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ExpandRegularProps = Omit<IconBaseProps, 'children'>;

const ExpandRegular = memo(
  forwardRef<SVGSVGElement, ExpandRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M8.47 14.47a.75.75 0 1 1 1.06 1.06l-3.72 3.72H8a.75.75 0 0 1 0 1.5H4l-.13-.01h-.02l-.04-.02q-.05 0-.1-.03l-.08-.04-.16-.12-.12-.16-.04-.08a1 1 0 0 1-.06-.29v-4a.75.75 0 0 1 1.5 0v2.19zM14.47 14.47c.3-.3.77-.3 1.06 0l3.72 3.72V16a.75.75 0 0 1 1.5 0v4a1 1 0 0 1-.06.29l-.04.08-.12.16-.16.12-.08.04-.1.03-.04.01h-.02l-.05.02H16a.75.75 0 0 1 0-1.5h2.19l-3.72-3.72a.75.75 0 0 1 0-1.06M8 3.25a.75.75 0 0 1 0 1.5H5.81l3.72 3.72a.75.75 0 1 1-1.06 1.06L4.75 5.81V8a.75.75 0 0 1-1.5 0V4a1 1 0 0 1 .05-.28V3.7l.05-.08.12-.16q.07-.08.16-.12l.08-.04.1-.03.04-.02h.02L4 3.25zM20 3.25l.13.01h.02l.04.02.1.03q.04.01.08.04.09.04.16.12t.12.16l.04.08a1 1 0 0 1 .06.29v4a.75.75 0 0 1-1.5 0V5.81l-3.72 3.72a.75.75 0 1 1-1.06-1.06l3.72-3.72H16a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

ExpandRegular.displayName = 'ExpandRegular';

export { ExpandRegular };
export type { ExpandRegularProps };
