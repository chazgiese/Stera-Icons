import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ThumbsDownFillProps = Omit<IconBaseProps, 'children'>;

const ThumbsDownFill = memo(
  forwardRef<SVGSVGElement, ThumbsDownFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="thumbs-down-fill" {...props}>
      <path fill="currentColor" d="M15.7 2a4 4 0 0 1 3.86 2.92v.01l.01.03.04.12.12.42.4 1.39a46 46 0 0 1 .82 3.13c.1.5.19 1.08.27 1.63A2.95 2.95 0 0 1 18.28 15h-1.82c.31 1.07.5 2.3.37 3.44-.1.86-.39 1.77-1.04 2.46A3.7 3.7 0 0 1 13 22a1 1 0 0 1-.8-.4l-.07-.1-3-5.27a2.4 2.4 0 0 0-.63-.72V4c0-1.1.9-2 2-2zM7.04 2a4 4 0 0 0-.54 2v10.97A4 4 0 0 1 3 11V5a3 3 0 0 1 3-3z" />
    </IconBase>
  ))
);

ThumbsDownFill.displayName = 'ThumbsDownFill';

// Triple export pattern (lucide-react style)
export { ThumbsDownFill, ThumbsDownFill as ThumbsDownFillIcon, ThumbsDownFill as SiThumbsDownFill };
export default ThumbsDownFill;
export type { ThumbsDownFillProps };
