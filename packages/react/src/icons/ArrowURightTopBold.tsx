import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowURightTopBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowURightTopBold = memo(
  forwardRef<SVGSVGElement, ArrowURightTopBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M18.7 2.3a1 1 0 1 0-1.4 1.4L19.58 6H8.5a7.5 7.5 0 1 0 0 15H16a1 1 0 0 0 0-2H8.5a5.5 5.5 0 0 1 0-11h11.09l-2.3 2.3a1 1 0 0 0 1.42 1.4l4-4a1 1 0 0 0 .27-.88 1 1 0 0 0-.1-.3l-.01-.02-.16-.2z" />
    </IconBase>
  ))
);

ArrowURightTopBold.displayName = 'ArrowURightTopBold';

export { ArrowURightTopBold };
export type { ArrowURightTopBoldProps };
