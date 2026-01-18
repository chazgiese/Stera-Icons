import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ThumbsDownBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ThumbsDownBoldDuotone = memo(
  forwardRef<SVGSVGElement, ThumbsDownBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M11.5 2h-.1a1 1 0 0 0 0 2h.1a3 3 0 0 0-3 3v6.26q-.41-.15-.86-.21a1 1 0 0 0-.28 1.98L7 15a4 4 0 0 1-4-4V7a5 5 0 0 1 5-5zM7.46 4.05A3 3 0 0 0 5 7v4l.01.2a2 2 0 0 0 1.49 1.73V7c0-1.1.36-2.12.96-2.95" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M15.7 2a4 4 0 0 1 3.86 2.92v.01l.01.03.04.12.12.42q.18.56.4 1.39c.31 1.06.67 2.35.82 3.13.1.5.19 1.08.27 1.63A2.95 2.95 0 0 1 18.28 15h-1.82c.31 1.07.5 2.3.37 3.44-.1.86-.39 1.77-1.03 2.46A3.7 3.7 0 0 1 13 22a1 1 0 0 1-.87-.5l-3-5.27a2.5 2.5 0 0 0-1.77-1.2 1 1 0 1 1 .28-1.98c1.34.2 2.54 1 3.22 2.19l2.69 4.7q.55-.12.78-.4.4-.41.51-1.32a7.5 7.5 0 0 0-.73-3.77A1 1 0 0 1 15 13h3.28c.6 0 1.03-.51.96-1.07l-.25-1.53c-.14-.68-.47-1.9-.77-2.96l-.4-1.37-.13-.42-.03-.1-.01-.04-.01-.04A2 2 0 0 0 15.7 4H11.5a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

ThumbsDownBoldDuotone.displayName = 'ThumbsDownBoldDuotone';

// Triple export pattern (lucide-react style)
export { ThumbsDownBoldDuotone, ThumbsDownBoldDuotone as ThumbsDownBoldDuotoneIcon, ThumbsDownBoldDuotone as SiThumbsDownBoldDuotone };
export type { ThumbsDownBoldDuotoneProps };
