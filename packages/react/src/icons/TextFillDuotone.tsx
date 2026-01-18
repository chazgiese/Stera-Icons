import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TextFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextFillDuotone = memo(
  forwardRef<SVGSVGElement, TextFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M15 19.5a1.5 1.5 0 0 1 0 3H9a1.5 1.5 0 0 1 0-3zM18 1.5A3.5 3.5 0 0 1 21.5 5v1a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0-.5.5v1a1.5 1.5 0 1 1-3 0V5A3.5 3.5 0 0 1 6 1.5z" />
        <path fill="currentColor" fillRule="evenodd" d="M14 4.5h-4c.28 0 .5.22.5.5v14a.5.5 0 0 1-.5.5h4a.5.5 0 0 1-.5-.5V5c0-.28.22-.5.5-.5" clipRule="evenodd" opacity={.4} />
    </IconBase>
  ))
);

TextFillDuotone.displayName = 'TextFillDuotone';

// Triple export pattern (lucide-react style)
export { TextFillDuotone, TextFillDuotone as TextFillDuotoneIcon, TextFillDuotone as SiTextFillDuotone };
export type { TextFillDuotoneProps };
