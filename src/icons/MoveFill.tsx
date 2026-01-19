import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MoveFillProps = Omit<IconBaseProps, 'children'>;

const MoveFill = memo(
  forwardRef<SVGSVGElement, MoveFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="move-fill" {...props}>
      <path fill="currentColor" d="M12 1a1 1 0 0 1 .7.3l2.5 2.5a1 1 0 0 1-.7 1.7H13V11h5.5V9.5a1 1 0 0 1 1.7-.7l2.5 2.5.17.2v.01a1 1 0 0 1-.07 1.1l-.1.1-2.5 2.5a1 1 0 0 1-1.7-.71V13H13v5.5h1.5a1 1 0 0 1 .7 1.7l-2.41 2.43a1 1 0 0 1-1.5.08l-2.5-2.5a1 1 0 0 1 .71-1.71H11V13H5.5v1.5a1 1 0 0 1-1.7.7l-2.5-2.5-.07-.07-.06-.07a1 1 0 0 1-.04-1.05v-.01l.16-.2 2.5-2.5a1 1 0 0 1 1.71.7V11H11V5.5H9.5a1 1 0 0 1-.7-1.7l2.5-2.5.07-.07A1 1 0 0 1 12 1" />
    </IconBase>
  ))
);

MoveFill.displayName = 'MoveFill';

// Triple export pattern (lucide-react style)
export { MoveFill, MoveFill as MoveFillIcon, MoveFill as SiMoveFill };
export type { MoveFillProps };
