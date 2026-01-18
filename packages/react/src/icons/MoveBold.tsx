import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MoveBoldProps = Omit<IconBaseProps, 'children'>;

const MoveBold = memo(
  forwardRef<SVGSVGElement, MoveBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 1a1 1 0 0 1 .7.3l2.5 2.5a1 1 0 1 1-1.4 1.4l-.8-.78V11h6.59l-.8-.8a1 1 0 1 1 1.42-1.4l2.5 2.5.16.2v.01a1 1 0 0 1-.07 1.1l-.1.1-2.5 2.5a1 1 0 1 1-1.4-1.42l.79-.79H13v6.58l.8-.79a1 1 0 1 1 1.4 1.42l-2.41 2.42a1 1 0 0 1-1.5.08l-2.5-2.5a1 1 0 1 1 1.42-1.42l.8.8V13H4.4l.8.8a1 1 0 1 1-1.42 1.4l-2.5-2.5-.06-.07-.06-.07a1 1 0 0 1-.04-1.05v-.01l.16-.2 2.5-2.5a1 1 0 1 1 1.42 1.4l-.8.8h6.6V4.4l-.8.8a1 1 0 1 1-1.42-1.4l2.5-2.5.08-.07A1 1 0 0 1 12 1" />
    </IconBase>
  ))
);

MoveBold.displayName = 'MoveBold';

// Triple export pattern (lucide-react style)
export { MoveBold, MoveBold as MoveBoldIcon, MoveBold as SiMoveBold };
export type { MoveBoldProps };
