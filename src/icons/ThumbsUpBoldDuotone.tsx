import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ThumbsUpBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ThumbsUpBoldDuotone = memo(
  forwardRef<SVGSVGElement, ThumbsUpBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="thumbs-up-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M7.36 8.97a1 1 0 1 0 .28 1.98q.45-.06.86-.21V17a3 3 0 0 0 3 3h-.1a1 1 0 0 0 .1 2H8a5 5 0 0 1-5-5v-4a4 4 0 0 1 4.18-4zm-.86 2.1a2 2 0 0 0-1.49 1.73L5 13v4a3 3 0 0 0 2.46 2.95A5 5 0 0 1 6.5 17z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M15.7 22a4 4 0 0 0 3.86-2.92v-.01l.01-.03.04-.12.12-.42.4-1.39c.31-1.06.66-2.35.82-3.13.1-.5.19-1.08.27-1.63A2.95 2.95 0 0 0 18.28 9h-1.82c.31-1.07.5-2.3.37-3.44a4.2 4.2 0 0 0-1.04-2.46A3.7 3.7 0 0 0 13 2a1 1 0 0 0-.87.5l-3 5.27a2.5 2.5 0 0 1-1.77 1.2 1 1 0 1 0 .28 1.98c1.34-.2 2.54-1 3.22-2.19l2.69-4.7c.38.07.62.23.78.4q.4.41.51 1.32a7.5 7.5 0 0 1-.73 3.77A1 1 0 0 0 15 11h3.28c.6 0 1.03.51.96 1.07l-.25 1.53c-.14.68-.47 1.9-.77 2.96l-.4 1.37-.13.42-.03.1-.01.04-.01.04A2 2 0 0 1 15.7 20H11.5a1 1 0 1 0 0 2z" />
    </IconBase>
  ))
);

ThumbsUpBoldDuotone.displayName = 'ThumbsUpBoldDuotone';

// Triple export pattern (lucide-react style)
export { ThumbsUpBoldDuotone, ThumbsUpBoldDuotone as ThumbsUpBoldDuotoneIcon, ThumbsUpBoldDuotone as SiThumbsUpBoldDuotone };
export default ThumbsUpBoldDuotone;
export type { ThumbsUpBoldDuotoneProps };
