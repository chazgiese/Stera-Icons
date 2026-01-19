import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowURightFillProps = Omit<IconBaseProps, 'children'>;

const ArrowURightFill = memo(
  forwardRef<SVGSVGElement, ArrowURightFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-u-right-fill" {...props}>
      <path fill="currentColor" d="M8.5 3a7.5 7.5 0 1 0 0 15H17v3a1 1 0 0 0 1.7.7l4-4 .07-.07.1-.13v-.01a1 1 0 0 0-.16-1.2l-4-4A1 1 0 0 0 17 13v3H8.5a5.5 5.5 0 1 1 0-11H16a1 1 0 1 0 0-2z" />
    </IconBase>
  ))
);

ArrowURightFill.displayName = 'ArrowURightFill';

// Triple export pattern (lucide-react style)
export { ArrowURightFill, ArrowURightFill as ArrowURightFillIcon, ArrowURightFill as SiArrowURightFill };
export type { ArrowURightFillProps };
