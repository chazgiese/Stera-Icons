import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TextUnderlineBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextUnderlineBoldDuotone = memo(
  forwardRef<SVGSVGElement, TextUnderlineBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-underline-bold-duotone" {...props}>
      <path fill="currentColor" d="M19 21a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2z" opacity={.4} />
        <path fill="currentColor" d="M18 1a1 1 0 0 1 1 1v10a7 7 0 1 1-14 0V2a1 1 0 0 1 2 0v10a5 5 0 0 0 10 0V2a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

TextUnderlineBoldDuotone.displayName = 'TextUnderlineBoldDuotone';

// Triple export pattern (lucide-react style)
export { TextUnderlineBoldDuotone, TextUnderlineBoldDuotone as TextUnderlineBoldDuotoneIcon, TextUnderlineBoldDuotone as SiTextUnderlineBoldDuotone };
export type { TextUnderlineBoldDuotoneProps };
